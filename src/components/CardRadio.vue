<template>
  <article class="container-radio" @click="onClick">
    <div class="container-image">
      <img
        class="image-radio"
        :src="picture" 
        :alt="'Radio ' + title">
    </div>
    <div class="container-text">
      <div>
        <span class="title-radio">
          {{ title }}
        </span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'CardRadio',
  props: {
    title: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    },
    id: Number
  },
  methods: {
    onClick() {
      this.$emit('selectRadio', this.id);
    }
  }
}
</script>

<style scoped>
.container-radio {
  padding: 1em 2em;
  margin-bottom: 1em;
  border: 1px solid rgb(112, 112, 112);
  display: flex;
  cursor: pointer;
}

.container-radio:hover {
  background-color: #f3f2f2;
}

.image-radio {
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

.title-radio {
  font-size: 2em;
  font-weight: bold;
}

</style>