<template>
  <div class="item">
    <h2 class="title">
      {{ title }}
    </h2>
    <strong v-if="amount != 0">Anzahl: {{ amount }}</strong>
    <img :src="image" alt="" class="image">
    <div class="description" v-if="description !== ''">
      <p>{{ description }}</p>
    </div>
    <div class="tags">
      <p class="tag" v-for="tag in tags" :key="tag.name">
        {{ tag.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: '',
      type: String
    },
    image: {
      default: 'https://s.jlosch.de/images-jlosch.de/missing-picture.svg',
      type: String
    },
    amount: {
      type: Number,
      default: 0
    },
    description: {
      type: String,
      default: ''
    },
    tags: {
      type: Object
    }
  }
}
</script>

<style lang="stylus" scoped>
.item
  margin-top 2rem
  border 1px solid black
  border-radius 4rem
  padding 5rem
  min-height: 20rem
  max-width: 20%
  .title
    margin-top -3rem
    font-size 16pt
    text-align: center
  .image
    margin-top 2rem
    border 1px solid black
    border-radius 4rem
    min-height: 10rem
  .description
    margin-top 2rem
    text-overflow: ellipsis
    overflow: hidden
    max-height: 5rem
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: wrap;
  .tags
    margin-top 0.5rem
    display inline-flex
    flex-direction row
    gap .5rem
    .tag
      background rgba(193, 152, 117, 0.6)
      border-radius 1rem
      padding .5rem
      width: initial
</style>
