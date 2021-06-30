<template>
  <div class="logo">
    <transition name="fade" appear >
      <img
        v-if="hover"
        key="logo"
        height="60" 
        src="@/assets/logo.png" 
        alt="Logo de VueTune">
      <img 
        v-else
        height="60"
        key="isotipo" 
        src="@/assets/isotipo.png" 
        alt="Isotipo de VueTune">
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    hover: {
      type: Boolean,
      default() {
        return false;
      }
    }
  }
}
</script>

<style scoped>
.fade-enter-active {
  transition: all .7s ease;
}

.fade-leave-active {
  transform: all .7s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-enter, .fade-leave-to {
  transform: translateX(1.7em);
  opacity: 0
}

.logo {
  height: 84px;
  width: 100%;
  display: flex;
  justify-content: center;
  color: aliceblue;
  padding-top: 12px;
  padding-bottom: 12px;
}
</style>