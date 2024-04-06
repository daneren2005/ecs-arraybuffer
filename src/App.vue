<template>
  <nav>
	<router-link to="/multithreaded">Custom ECS (MT)</router-link> |
	<router-link to="/shared-memory-objects">Entity System (MT)</router-link> |
	<router-link to="/bitecs">BitECS(ST) </router-link> |
    <router-link to="/simple">Simple Entity (ST)</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
