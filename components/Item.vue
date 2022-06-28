<template>
  <div class="item" @click.prevent="openAddStorage">
    <h2 class="title">
      {{ item.name }}
    </h2>
    <strong>{{item.barcode}}</strong><br />
    <p>Hersteller: {{item.fracturedBy}}</p>
    <strong>Anzahl: {{ itemCount }}</strong>
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
    <Popup
      v-show="isStorageVisible"
      @close-modal="closeAddStorage"
    >
      <div class="storage">
        <h4>{{item.name}}</h4>
        <div class="storage-item">
          <label for="location">Lagerort</label>
          <select
            id="location"
            name="location"
            required="required"
            v-model="newStorage.location"
          >
            <option value="null" selected disabled>
              AUSWÄHLEN
            </option>
            <option v-for="location in locations" :key="location.key" :value="location.name">
              {{location.name}}
            </option>
          </select>
        </div>
        <div class="storage-item">
          <label for="boughtAt">Gekauft am</label>
          <input type="date" v-model="newStorage.boughtAt" />
        </div>
        <div class="storage-item">
          <label for="boughtAt">Läuft ab am am</label>
          <input type="date" v-model="newStorage.expiresOn" />
        </div>
        <div class="storage-item">
          <label for="count">Anzahl</label>
          <input id="count" v-model="newStorage.count" type="number" />
        </div>
        <button @click="addStorage">Absenden</button>
      </div>
    </Popup>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    item: {
      default: {}
    },
    itemCount: 0
  },
  data () {
    return {
      showImages: null,
      locations: {type: Array},
      isStorageVisible: false,
      newStorage: {
        boughtAt: new Date().toISOString().substr(0, 10),
        expiresOn: new Date().toISOString().substr(0, 10),
        location: null,
        count: 0,
        itemID: this.item.id
      }
    }
  },
  mounted () {
    if(process.client) {
      this.showImages = localStorage.getItem("showImages")
    }
    this.$root.$on('close-modal', () => {
      this.closeAddStorage()
    })
    this.getItemCount()
    this.getLocations()
  },
  methods: {
    addStorage(){
      axios.post(this.$config.apiURL + "/storage", this.newStorage).then(response => {
        console.log(response)
      }).catch(error => { console.log(error.response); });
    },
    openAddStorage() {
      this.isStorageVisible = true
    },
    closeAddStorage() {
      this.isStorageVisible = false
    },
    getLocations(){
        axios.get(this.$config.apiURL + "/location").then(response => {
          this.locations = response.data;
        }).catch(error => { console.log(error.response); });
    },
    getItemCount() {
        axios.get(this.$config.apiURL + "/storage/item-count?itemID=" + this.item.id).then(response => {
          console.log(response.data)
          this.itemCount = response.data;
        }).catch(error => { console.log(error.response); });
    }
  },
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
.storage
  display: flex
  flex-direction: column
  gap .5rem
  justify-content: center
  align-items: center
  .storage-item
    display block
</style>
