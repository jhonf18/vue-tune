<template>
  <div class="container">
    <div class="container-radios">
      <h2 class="title">Radios</h2>
      <div class="radios" v-if="!loadingRadios" >
        <CardRadio 
          v-for="radio in radios"
          :key="radio.id"
          :title="radio.title"
          :id="radio.id"
          :picture="radio.picture"
          @selectRadio="onSelectRadio"/>
      </div>
      <div v-else  style="margin-top: 10em">
         <Spinner :fullScreen="false" :width="40" :height="40"/>
      </div>
    </div>
    <div class="container-tracks">
      <div>
        <h2 class="title">Lista de pistas</h2>
        <div class="text-empty-tracks" v-if="trackList.length === 0 && !loadingTracks">
          <span>
            No has seleccionado ninguna radio
          </span>
        </div>
        <div v-if="trackList.length !== 0 && !loadingTracks" class="tracks">
          <CardTrack 
            v-for="track in trackList" 
            :key="track.id"
            size="sm"
            :title="track.title"
            :duration="track.duration"
            :album="track.album"
            :artist="track.artist"
            :linkAudio="track.preview" />
        </div>
        <div v-if="loadingTracks" style="margin-top: 10em">
          <Spinner :fullScreen="false" :width="40" :height="40"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Repository from '@/Repository/index'
import Spinner from '@/components/Spinner'
import CardRadio from '@/components/CardRadio'
import CardTrack from '@/components/CardTrack'

export default {
  name: 'Radio',
  data(){
    return {
      radios: [],
      trackList: [],
      loadingTracks: true,
      loadingRadios: true,
      repository: new Repository()
    }
  },
  components: {
    Spinner,
    CardRadio,
    CardTrack
  },
  async created() {
    this.radios = await this.repository.getRadios()
    this.loadingTracks = false;
    this.loadingRadios = false;
  },
  methods: {
    async onSelectRadio(id) {
      this.loadingTracks = true;
      this.trackList = await this.repository.getTracksByRadio(id);
      this.loadingTracks = false; 
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: hidden;
}

.title {
  text-align: center;
}

.container-radios {
  width: 55%;
  border-right: 1px solid rgb(214, 214, 214);
  padding-right: 1em;
}

.radios {
  width: 100%;
  overflow-y: scroll;
  height: calc(100vh - 6rem);
}

.tracks {
  overflow-y: auto;
  height: calc(100vh - 6rem);
}

.container-tracks {
  width: 45%;
  padding-left: 1em;
}

.container-tracks > div {
  position: sticky;
  top: 1em;
}

.text-empty-tracks {
  text-align: center;
  margin-top: 6em;
  font-size: 1.3em;
  font-weight: 500;
}
</style>