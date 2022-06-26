<template>
  <div class="site-wrapper">
    <div class="navigation">
      <p class="name">
        Kemary
      </p>
      <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32.8759 28.9308H30.7982L30.0618 28.2207C32.6392 25.2224 34.191 21.3299 34.191 17.0955C34.191 7.65352 26.5374 0 17.0955 0C7.65352 0 0 7.65352 0 17.0955C0 26.5374 7.65352 34.191 17.0955 34.191C21.3299 34.191 25.2224 32.6392 28.2207 30.0618L28.9308 30.7982V32.8759L42.0812 46L46 42.0812L32.8759 28.9308ZM17.0955 28.9308C10.5466 28.9308 5.26015 23.6444 5.26015 17.0955C5.26015 10.5466 10.5466 5.26015 17.0955 5.26015C23.6444 5.26015 28.9308 10.5466 28.9308 17.0955C28.9308 23.6444 23.6444 28.9308 17.0955 28.9308Z" fill="black"/>
      </svg>
    </div>
    <SettingsIcon @click="$root.$emit('click-settings')" />
    <div class="box">
      <div class="box-content">
        <p @click="openAddItem">Eintrag hinzufügen</p>
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
// farbpalette: https://coolors.co/f2e3bc-96bbbb-21231a-c19875
.site-wrapper
  .navigation
    display flex
    flex-direction: row
    .name
      left 0
      margin-right: auto;
      font-size 20pt
    svg
      right 0
      margin-left: auto;
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
