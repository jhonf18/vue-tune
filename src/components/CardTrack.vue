<template>
  <article class="container-track"
    @click="onClick" 
    :class="{ 'w-100': size === 'lg' }">
    <div class="container-image">
      <img
        class="image-track"
        :src="album.cover" 
        :alt="'Álbum ' + album.title">
    </div>
    <div class="container-text">
      <div>
        <span :class="{ 'title-track': size !== 'sm', 'title-track-sm': size === 'sm' }" >
          {{ title }}
        </span>
      </div>
      <div class="container-duration-track">
        <span class="fw-bolder">
          Duración:
        </span> 
        {{ duration | formatDuration}}
      </div>
      <div class="container-album-track">
        <span class="fw-bolder">
          Álbum:
        </span> 
        {{ album.title }}
      </div>
      <div class="container-artist-track">
        <span class="fw-bolder">
          Artista:
        </span> 
        {{ artist.name }}
      </div>
    </div>
  </article>
</template>

<script>
import EventBus from '@/EventBus'

export default {
  name: 'CardTrack',
  props: {
    title: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    album: {
      type: Object,
      required: true
    },
    artist: {
      type: Object,
      required: true
    },
    linkAudio: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: false,
      default() {
        return 'lg'
      }
    }
  },
  methods: {
    onClick(){
      EventBus.$emit('playTrack', {
        title: this.title,
        picture: this.album.cover,
        link: this.linkAudio
      })
    }
  },
  filters: {
    formatDuration(duration) {
      const seconds = duration % 60;
      const minutes = Math.floor(duration / 60); 
      return `${minutes}:${seconds}`
    }
  }
}
</script>

<style scoped>

.fw-bolder {
  font-weight: bold;
}

.w-100 {
  width: 100%;
}

.container-track {
  padding: 1em 2em;
  margin-bottom: 1em;
  border: 1px solid rgb(112, 112, 112);
  display: flex;
  cursor: pointer;
}

.image-track {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.container-text {
  padding-left: 1em;
}

.title-track {
  font-size: 1.9em;
  font-weight: bold;
}

.title-track-sm {
  font-size: 1.4em;
  font-weight: bold;
}

.container-duration-track,
.container-album-track,
.container-artist-track {
  margin-left: 1em;
  margin-top: .3em;
  font-size: .9em;
}
</style>