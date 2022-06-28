<template>
  <div class="site-wrapper">
    <Navigation />
    <SettingsIcon @click="$root.$emit('click-settings')" />
    <div class="box">
      <div class="box-content">
        <p @click="openAddItem">Item hinzufügen</p>
        <p>Eintrag entfernen</p>
      </div>
    </div>
    <Popup
      v-show="isAddItemOpen"
      @close-modal="openAddItem('addItem-index')"
      class="addItem"
    >
    <h1>Eintrag hinzufügen</h1>
      <form class="form">
        <div class="item">
          <label for="name">Name</label>
          <input type="text" v-model="newItem.name" id="name" />
        </div>
        <div class="item">
          <label for="facturedBy">Hersteller</label>
          <input type="text" v-model="newItem.fracturedBy" id="facturedBy" />
        </div>
        <div class="item">
          <label for="name">BildURL</label>
          <input type="text" v-model="newItem.imageURL" id="name" />
        </div>
        <div class="item">
          <label for="name">tag</label>
          <input type="text" v-model="newItem.tags" id="name" />
        </div>
        <button @click.prevent="sendNewItem">Absenden</button>
      </form>
    </Popup>
    <div class="item-container">
      <Item v-for="item in items" :key="item.name" :item="item"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Popup from '~/components/Popup.vue'
export default {
    name: "IndexPage",
    data() {
        return {
            items: {
                type: Object,
                default: []
            },
            newItem: {
              name: '',
              fracturedBy: '',
              imageURL: '',
              tags: '',
              type: 'NULL'
            },
            isAddItemOpen: false,
        };
    },
    created() {
        this.getItems();
        if (localStorage.getItem("showImages") === null) {
            localStorage.setItem("showImages", true);
        }
    },
    mounted () {
      this.$root.$on('close-modal', () => {
          this.closeAddItem()
      })
    },
    methods: {
      sendNewItem () {
        if(this.newItem.name !== '' && this.newItem.facturedBy !== '' && this.newItem.imageURL !== '' && this.newItem.tag !== ''){
          axios.post(this.$config.apiURL + "/item", this.newItem)
          .then(() => {
            this.getItems()
          }) .catch(error => {
            console.log(error.response)
          })
        }
      },
      openAddItem() {
        this.isAddItemOpen = true;
      },
      closeAddItem(){
        this.isAddItemOpen = false;
      },
      getItems() {
          axios.get(this.$config.apiURL + "/item?tagsAsList").then(response => {
              this.items = response.data;
          }).catch(error => { console.log(error.response); });
      }
    },
    components: { Popup }
}
</script>
<style lang="stylus" scoped>
// farbpalette: https://coolors.co/f2e3bc-96bbbb-21231a-c19875-e3170a-4f772d
.site-wrapper
  .box
    border 1px black solid
    border-radius: 1rem
    display flex
    flex-direction row
    justify-content: center
    align-content: center
    .box-content
      display flex
      flex-direction: row
      gap 4rem
      p
        border 1px black solid
        padding 10px
        border-radius 4rem
        text-align: center
        min-width: 20rem
        background-color lightgreen
  .addItem
    .form
      display flex
      flex-direction column
      gap 1rem
      .item
        display block

  .item-container
    display: flex;
    gap 2rem
    flex-wrap: wrap
</style>
