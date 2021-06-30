<template>
  <div>
    <transition name="bounce">
      <div
        key="search-initial" 
        v-if="searchInitial" 
        class="container-search full-screen">
        <form @submit.prevent="onSearch">
          <input 
            type="text"
            v-model="inputSearch" 
            placeholder="Presione enter para buscar ..." class="input">
        </form>
      </div>
      <div v-else key="search">
        <div class="container-search pt">
          <form  @submit.prevent="onSearch">
            <input 
              type="text"
              v-model="inputSearch" 
              placeholder="Presione enter para buscar ..." class="input-sm">
          </form>
        </div>
        <div class="container-tracks" v-if="!loadingTracks">
          <h2 class="title">Resultados de: {{ inputSearch }}</h2>
          <CardTracks 
            v-for="track in tracks"
            :key="track.id"
            :title="track.title"
            :duration="track.duration"
            :album="track.album"
            :artist="track.artist"
            size="sm"
            :linkAudio="track.preview"
          />
        </div>
        <div v-else>
          <Spinner :fullScreen="true"/>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import CardTracks from '@/components/CardTrack'
import Spinner from '@/components/Spinner'
import Repository from '@/Repository'

export default {
  name: 'Search',
  components: {
    CardTracks,
    Spinner
  },
  data() {
    return {
      searchInitial: true,
      inputSearch: '',
      tracks: [],
      loadingTracks: true
    }
  },
  methods: {
    async onSearch() {
      this.loadingTracks = true;
      if (this.searchInitial ) {
        this.searchInitial = false;
      }
      const repository = new Repository();
      this.tracks = await repository.getTracksBySearch(this.inputSearch);
      this.loadingTracks = false;
    }
  }
}
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in .6s;
}
.bounce-leave-active {
  animation: bounce-in .6s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}

.input {
  padding: .6em 1em;
  border-radius: 5px;
  font-size: 1.2em;
  min-width: 20rem;
  border: 1px solid rgb(177, 177, 177);
  color: rgb(58, 58, 58)
}

.pt {
  padding-top: 1em;
}

.title {
  font-size: 1.5em;
  margin-bottom: 1em;
}

.input-sm {
  padding: .4em 1em;
  border-radius: 5px;
  min-width: 20rem;
  border: 1px solid rgb(177, 177, 177);
  color: rgb(58, 58, 58)
}

.input:focus,
.input-sm:focus {
  outline: none;
}

.container-tracks {
  margin-top: 1em;
}

.full-screen {
  min-height: 100vh;
}

.container-search { 
  display: grid;
  place-items: center;
}
</style>