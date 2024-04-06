enum ENTITY_COMPONENTS {
	movable = 1,
	spawnsShips = 2
}

enum ENTITY_TYPES {
	ship = ENTITY_COMPONENTS.movable,
	station = ENTITY_COMPONENTS.spawnsShips
}

export { ENTITY_COMPONENTS, ENTITY_TYPES };