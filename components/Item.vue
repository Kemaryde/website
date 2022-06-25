<template>
  <div class="item">
    <h2 class="title">
      {{ item.name }}
    </h2>
    <strong>{{item.barcode}}</strong><br />
    <p>Hersteller: {{item.fracturedBy}}</p>
    <strong v-show="item.amount != 0 && item.amount != null">Anzahl: {{ item.amount }}</strong>
    <div class="placeholder-amount" v-show="item.amount === 0 && item.amount == null"></div>
    <img :src="item.imageURL" alt="" class="image" v-if="showImages == 'true'">
    <div class="placeholder-image" v-show="showImages =='false'"></div>
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
      default: {}
    }
  },
  data () {
    return {
      showImages: null
    }
  },
  mounted () {
    if(process.client) {
      this.showImages = localStorage.getItem("showImages")
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
    width 100%
  .placeholder-image
    min-height: 10rem
  .placeholder-amount
    min-height: 2rem
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
