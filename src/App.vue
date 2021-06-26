<template>
  <div id="app">
    <Menu class="menu" @changeComponent="onChangeComponent"/>
    <main class="main">
      <component :is="componentActive"></component>
    </main>
    <Player />
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Discover from './components/Discover.vue'
import Search from './components/Search.vue'
import Radio from './components/Radio.vue'
import Genres from './components/Genres.vue'
import Player from './components/Player.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Discover,
    Search,
    Radio,
    Genres,
    Player
  },
  data() {
    return {
      componentActive: 'Discover'
    }
  },
  methods: {
    onChangeComponent(name) {
      if (name === 'Descubrir')
        this.componentActive = 'Discover'
      else if (name === 'Géneros')
        this.componentActive = 'Genres'
      else if (name === 'Radio')
        this.componentActive = 'Radio'
      else if (name === 'Buscar')
        this.componentActive = 'Search'
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 100vw;
  min-height: 100vh;
  background-color: #fffdfd;
}

.main { 
  padding-left: 5.6rem;
  width: calc(100% - 9rem);
  position: relative;
}
</style>
