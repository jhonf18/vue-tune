<template>
  <div class="genre">
    <h2 class="title">Géneros</h2>
    <div>
      <article v-for="genre in genres" :key="genre.id" class="container-genre">
        <div class="container-image">
          <img
            class="image"
            :src="genre.picture" 
            :alt="'Radio ' + genre.name">
        </div>
        <div class="container-text">
          <div>
            <span class="title-genre">
              {{ genre.name }}
            </span>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import Repository from '@/Repository';

export default {
  name: 'Genres',
  data(){
    return {
      genres: []
    }
  },
  async created() {
    const repository = new Repository();
    this.genres = await repository.getGenres();
  }
}
</script>

<style scoped>
.title {
  text-align: center;
}
.genre {
  padding-top: 1em;
}

.container-genre {
  padding: 1em 2em;
  margin-bottom: 1em;
  border: 1px solid rgb(112, 112, 112);
  display: flex;
}

.image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.container-text {
  padding-left: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title-genre {
  font-size: 2em;
  font-weight: bold;
}
</style>