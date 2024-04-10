<template>
	<div class="home">
		<div class="list">
			<div style="color: red">mainThread: {{ minUpdateTime.toFixed(2) }} - {{ maxUpdateTime.toFixed(2) }} ({{ avgUpdateTime.toFixed(2) }} avg) ms</div>
			<div v-for="system in systemUpdates" :key="system.name">{{ system.name }}: {{ system.max.toFixed(2) }} ({{ system.avg.toFixed(2) }} avg) ms</div>
			<div></div>
			<div>Memory: {{ world.heap.prettyMemory() }} </div>
			<p/>

			<div>Entities: {{ stationsCount }} stations and {{ shipsCount }} ships ({{ totalCount }})</div>
			<span class="station-list" v-for="station in stationShips" :key="station.color" :style="{ color: station.displayColor }">{{ '#' + station.color.toString(16) }}: {{ station.ships }}</span>

			<br/>
			<button @click="addShips">Add Ships</button>
		</div>

		<div id="phaser-container-simple"/>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, Ref } from 'vue';
import Phaser from 'phaser';
import generateScene from '@/data/generate-scene';
import Station from './entities/station';
import Ship from './entities/ship';
import MainWorld from './entities/main-world';

let world = new MainWorld();
const startupTime = ref(0);
const minUpdateTime = ref(0);
const maxUpdateTime = ref(0);
const avgUpdateTime = ref(0);
const stationsCount = ref(0);
const shipsCount = ref(0);
const totalCount = ref(0);
const stationShips = ref([]) as Ref<Array<{ color: number, displayColor: string, ships: number }>>;
const systemUpdates = ref([]) as Ref<Array<{ name: string, min: number, avg: number, max: number }>>;

let game: Phaser.Game | null;
onMounted(() => {
	let updateTicks = 0;
	let updateTimes: Array<number> = [];

	const width = window.innerWidth / 3 * 2;
	const height = window.innerHeight / 3 * 2;
	let paused = false;
	let add: any;
	const sprites: Array<any> = [];
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
				add = this.add;
				let start = performance.now();

				// this.cameras.main.zoomTo(0.5, 0);
				world.load(generateScene({
					stations: 8,
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

				systemUpdates.value = world.systems.map(system => {
					return {
						name: system.name,
						min: 0,
						avg: 0,
						max: 0
					};
				});
			},
			update(time: number, delta: number) {
				if(paused) {
					return;
				}

				let start = performance.now();

				// Add new entity sprites
				world.entities.forEach(entity => {
					if(!entity.getSprite) {
						let image = add.image(entity.x, entity.y, entity.key) as any;
						image.setScale(entity.width / image.width, entity.height / image.height);
						image.shieldImage = add.image(entity.x, entity.y, 'shield');
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

						['_alphaBL', '_alphaBR', '_alphaTL', '_alphaTR'].forEach(prop => {
							Object.defineProperty(image.shieldImage, prop, {
								get: () => {
									return entity.shields > 0 ? 1 : 0;
								}
							});
						});

						entity.getSprite = () => image;
						image.entity = entity;
						sprites.push(image);
					}
				});

				// Remove old sprites
				sprites.forEach(sprite => {
					if(sprite.entity.dead) {
						sprite.destroy();
						sprite.shieldImage.destroy();

						sprites.splice(sprites.indexOf(sprite), 1);
					}
				});

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
					totalCount.value = world.entities.length;

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

					systemUpdates.value = world.systems.map(system => {
						return {
							name: system.name,
							...system.getRuntimeStats()
						};
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
	if(world) {
		world.destroy();
	}
});

function addShips() {
	let stations = world.entities.filter(entity => entity instanceof Station) as Array<Station>;
	stations.forEach(station => {
		station.addMoney(10);
	});
}
</script>

<style scoped>
.list {
	margin-bottom: 0.5em;
}
.station-list {
	margin-left: 0.5em;
}
</style>