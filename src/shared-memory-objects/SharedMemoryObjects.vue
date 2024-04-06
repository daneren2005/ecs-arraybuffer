<template>
	<div class="home">
		<div class="list">
			<div>Startup time: {{ startupTime.toFixed(2) }} ms</div>
			<div>Update time: {{ minUpdateTime.toFixed(2) }} - {{ maxUpdateTime.toFixed(2) }} ({{ avgUpdateTime.toFixed(2) }} avg) ms</div>
			<div>Memory: {{ world.heap.prettyMemory() }} </div>
			<p/>

			<div>Entities: {{ stationsCount }} stations and {{ shipsCount }} ships</div>
			<span class="station-list" v-for="station in stationShips" :key="station.color" :style="{ color: station.displayColor }">{{ '#' + station.color.toString(16) }}: {{ station.ships }}</span>

			<p/>
			<button @click="addShips">Add Ships</button>
		</div>

		<div id="phaser-container-simple"/>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, Ref } from 'vue';
import Phaser from 'phaser';
import World from './entities/world';
import Entity from './entities/entity';
import generateScene from '@/data/generate-scene';
import Station from './entities/station';
import Ship from './entities/ship';

let world = new World();
const startupTime = ref(0);
const minUpdateTime = ref(0);
const maxUpdateTime = ref(0);
const avgUpdateTime = ref(0);
const stationsCount = ref(0);
const shipsCount = ref(0);
const stationShips = ref([]) as Ref<Array<{ color: number, displayColor: string, ships: number }>>;

let game: Phaser.Game | null;
onMounted(() => {
	let updateTicks = 0;
	let updateTimes: Array<number> = [];

	const width = window.innerWidth / 3 * 2;
	const height = window.innerHeight / 3 * 2;
	let paused = false;
	game = new Phaser.Game({
		type: Phaser.AUTO,
		width,
		height,
		parent: 'phaser-container-simple',
		scene: {
			preload() {
				this.load.image('boid', 'boid.png');
				this.load.image('station', 'station.png');
				this.load.image('shield', 'shield3.png');
			},
			create() {
				// TODO: Get rid of events so we can create/kill in other threads
				world.on('entity-added', (entity: Entity) => {
					let image = this.add.image(entity.x, entity.y, entity.key) as any;
					image.setScale(entity.width / image.width, entity.height / image.height);
					image.shieldImage = this.add.image(entity.x, entity.y, 'shield');
					image.shieldImage.setScale(entity.width / image.shieldImage.width * 2, entity.height / image.shieldImage.height * 2);
					image.shieldImage.visible = entity.shields > 0;
					if(entity instanceof Station || entity instanceof Ship) {
						image.setTint(entity.color);
					}

					['x', 'y', 'angle'].forEach(property => {
						const spriteProperty = property === 'angle' ? 'rotation' : property;
						Object.defineProperty(image, spriteProperty, {
							get() {
								// @ts-expect-error
								return entity[property] ?? 0;
							}
						});

						Object.defineProperty(image.shieldImage, property, {
							get() {
								// @ts-expect-error
								return entity[property];
							}
						});
					});
					entity.on('dead', () => {
						image.destroy();
						image.shieldImage.destroy();
					});

					// TODO: Won't work anymore
					entity.on('shields-updated', (newValue: number) => {
						image.shieldImage.visible = newValue > 0;
					});
				});

				let start = performance.now();
				world.load(generateScene({
					stations: 6,
					shipsPerStation: 100,
					width,
					height
				}));
				let end = performance.now();
				startupTime.value = end - start;

				let stations = world.entities.filter(entity => entity instanceof Station) as Array<Station>;
				stationShips.value = stations.map(station => {
					let displayColor = '#' + station.color.toString(16);
					if(displayColor === '#ffffff') {
						displayColor = '#00000';
					}

					return {
						color: station.color,
						displayColor,
						ships: station.ships.length
					};
				});

				this.input.keyboard?.on('keydown-SPACE', () => {
					paused = !paused;
				});
			},
			update(time: number, delta: number) {
				if(paused) {
					return;
				}

				let start = performance.now();
				world.update(delta / 1_000);
				let end = performance.now();

				updateTimes.push(end - start);
				updateTicks += delta;
				if(updateTicks > 1_000) {
					minUpdateTime.value = updateTimes.reduce((min, time) => {
						return Math.min(min, time);
					}, 1_000_000);
					maxUpdateTime.value = updateTimes.reduce((max, time) => {
						return Math.max(max, time);
					}, 0);
					avgUpdateTime.value = updateTimes.reduce((total, time) => {
						return total + time;
					}, 0) / updateTimes.length;
					updateTimes = [];
					updateTicks = 0;

					stationsCount.value = world.entities.filter(entity => entity instanceof Station).length;
					shipsCount.value = world.entities.filter(entity => entity instanceof Ship).length;

					let stations = world.entities.filter(entity => entity instanceof Station) as Array<Station>;
					stationShips.value.forEach(val => {
						let matchingStation = stations.find(station => station.color === val.color);
						if(matchingStation) {
							val.ships = matchingStation.ships.length;
						} else if(val.ships > 0) {
							// paused = true;
							val.ships = 0;
						}
					});
				}
			}
		}
	});
});
onBeforeUnmount(() => {
	if(game) {
		game.destroy(true);
		game = null;
	} 
});

function addShips() {
	let stations = world.entities.filter(entity => entity instanceof Station) as Array<Station>;
	stations.forEach(station => {
		station.money += 10;
	});
}
</script>

<style scoped>
.list {
	margin-bottom: 1em;
}
.station-list {
	margin-left: 0.5em;
}
</style>