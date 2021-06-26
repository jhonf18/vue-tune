<template>
  <div 
    class="container-spinner" 
    :class="{ 'full-screen': fullScreen }">
    <div class="spinner" 
    :style="{ width: width + 'px', height: height + 'px' }"></div>
  </div>
</template>

<script>
export default {
  name: 'Spinner',
  props: {
    width: {
      type: Number,
      default() {
        return 80;
      }
    },
    height: {
      type: Number,
      default() {
        return 80;
      }
    },
    fullScreen: {
      type: Boolean,
      default() {
        return true;
      }
    }
  }
}
</script>

<style scoped>
.spinner {
  display: block;
  border-radius: 50%;
  border: 20px solid transparent;
  border-top-color: rgb(47, 2, 119);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.container-spinner {
  display: grid;
  place-items: center;
}

.full-screen {
  position: absolute;
  top: 0;
  left: 4rem;
  min-height: 100vh;
  min-width: calc(100vw - 4rem);
}


</style>