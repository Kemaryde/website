<template>
  <div class="item">
    <h2 class="title">
      {{ item.name }}
    </h2>
    <strong>{{item.barcode}}</strong><br />
    <p>Hersteller: {{item.fracturedBy}}</p>
    <strong v-if="item.amount != 0">Anzahl: {{ item.amount }}</strong>
    <div v-if="showImages">test</div>
    <img :src="item.imageURL" alt="" class="image" v-show="showImages">
    <div class="description" v-if="item.description !== ''">
      <p>{{ item.description }}</p>
    </div>
    <div class="tags">
      <p class="tag" v-for="tag in item.tagList" :key="tag.name">
        {{ tag.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      showImages: false
    }
  },
  mounted () {
    if(process.client) {
      this.showImages = localStorage.getItem("showImages")
      console.log(localStorage.getItem("showImages"))
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
    max-width: 25rem
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
