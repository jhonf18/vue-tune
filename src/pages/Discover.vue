<template>
  <div class="container">
    <h2 class="title">Descubrir</h2>
    <div class="container-discover" v-if="!initialLoading">
      <CardTrack
        v-for="track in tracks"
        :key="track.id" 
        :title="track.title"
        :duration="track.duration"
        :album="track.album"
        :artist="track.artist"
        :linkAudio="track.preview"
      />
    </div>
    <div v-else>
      <Spinner />
    </div>
    <div v-if="loadMoreData">
      <Spinner 
        :width="40" 
        :height="40" :fullScreen="false" 
        style="margin-bottom: 1em" />
    </div>
  </div>
</template>

<script>
import Repository from '@/Repository/index'
import CardTrack from '@/components/CardTrack'
import Spinner from '@/components/Spinner'

export default {
  name: 'Discover',
  components: {
    CardTrack,
    Spinner
  },
  data() {
    return {
      tracks: [],
      initialLoading: true,
      loadMoreData: false,
      repository: new Repository(),
      index: 5
    }
  },
  async created() {
    this.tracks = await this.repository.getDiscoverMusic(); 
    this.initialLoading = false;
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    async handleScroll() {
      const scrollTop = document.documentElement.scrollTop;
      const positionScroll = scrollTop + window.innerHeight;   
      if (positionScroll === document.documentElement.offsetHeight && !this.loadMoreData) {
        this.loadMoreData = true;
        const result = await this.repository.getMoreDataDiscover(this.index)
        this.tracks.push(...result)
        this.index += 5;
        this.loadMoreData = false;
      }
    }
  }
}
</script>

<style scoped>
.container {
  padding-top: 1em;
  padding-right: 2em;
}

.title {
  text-align: center;
  margin-bottom: 2em;
}

.container-discover {
  padding: 0 1em;
}
</style>