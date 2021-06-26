<template>
  <div 
    class="container-player" 
    :class="{'visible-player': showPlayer }">
    <div class="container-image">
      <img class="img"
        :class="{ 'animation-running': play, 'animation-paused': !play }"
        :src="picture"
        :alt="'Imagen de ' + title">
    </div>
    <div class="container-audio-info">
      <div>
        <h3>{{ title }}</h3>
      </div>
      <div class="controls" @click="onClick">
        <div v-if="!play">
          <i class="fas fa-play"></i>
        </div>
        <div v-else>
          <i class="fas fa-pause"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '@/EventBus';

export default {
  name: 'Player',
  data() {
    return {
      title: '',
      picture: '',
      link: '',
      showPlayer: false,
      audio: {},
      play: false,
      countDown: 30
    }
  },
  mounted() {
    EventBus.$on('playTrack', info => {
      this.title = info.title;
      this.picture = info.picture;
      this.link = info.link
      if (this.showPlayer) {
        this.audio.pause()
      }
      this.audio = new Audio(this.link);
      this.audio.play();
      this.countDown = 30;
      this.play = true;
      this.showPlayer = true;
      this.countDownTimer();
    });
  },
  methods: {
    onClick() {
      this.play = !this.play;
      if (!this.play) {
        this.audio.pause();
      }
      else {
        this.audio.play()
        this.countDownTimer()
      } 

    },
    countDownTimer() {
      if(this.countDown > 0 && this.play) {
        setTimeout(() => {
          this.countDown -= 1
          this.countDownTimer()
        }, 1000)
      }
      if (this.countDown === 0) {
        console.log('terminó')
        this.showPlayer = false;
      }
    }
  }
}
</script>

<style scoped>
.container-player {
  position: fixed;
  bottom: -100px;
  transition: all .8s;
  left: 4rem;
  width: calc(100% - 4rem);
  background-color: rgba(44, 44, 44, 0.918);
  padding: 1em 2em;
  display: flex;
}

.visible-player {
  bottom: 0
}

.img {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  animation: image 10s infinite linear;
}

@keyframes image {
  to {
    transform: rotate(360deg);
  }
}

.animation-running {
  animation-play-state: running;
}

.animation-paused {
  animation-play-state: paused;
}


.container-audio-info {
  color: aliceblue;
  padding-left: 10px;
  width: calc(100% - 70px - 4em);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.controls {
  cursor: pointer;
}

</style>