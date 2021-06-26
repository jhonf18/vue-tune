<template>
  <aside class="menu">
    <Logo />
    <nav class="nav">
      <ul>
        <li 
          class="nav-item" 
          v-for="item in navItems" 
          :key="item.classLogo"
          :class="{ 'is-active': item.name === activeItem }"
          @click="onClickItem(item.name)">
          <i :class="item.classLogo"></i>
          <span class="nav-item-text">
            {{ item.name }}  
          </span>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'Menu',
  components: {
    Logo
  },
  data() {
    return {
      activeItem: 'Descubrir',
      navItems: [
        { 
          classLogo: 'fab fa-hotjar',
          name: 'Descubrir'
        },
        {
          classLogo: 'fas fa-stream',
          name: 'Géneros'
        },
        {
          classLogo: 'fas fa-podcast',
          name: 'Radio'
        },
        {
          classLogo: 'fa fa-search',
          name: 'Buscar'
        },
      ]
    }
  },
  methods: {
    onClickItem(name) {
      this.activeItem = name;
      this.$emit('changeComponent', name);
    }
  }
}
</script>

<style scoped>
.menu {
  background-color: rgb(47, 2, 119);
  position: fixed;
  z-index: 10;
  height: 100%;
  width: 4rem;
  transition: all .5s;
  color: #fff;
}

.menu:hover {
  width: 9rem;
}

.menu:hover .nav-item-text {
  margin-left: 10px;
}

.nav-item {
  font-size: 1em;
  overflow: hidden;
  padding-top: 23px;
  padding-left: 24px;
  padding-bottom: 23px;
  display: flex;
  flex-wrap: nowrap;
  cursor: pointer;
}

.nav-item:hover {
  background-color: #090548;
}

.is-active {
  background-color: #090548;
}

.nav-item-text {
  transition: all .5s;
  margin-left: 25px;
}

</style>
