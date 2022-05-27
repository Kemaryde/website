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
    <div class="box">
      <div class="box-content">
        <p>Eintrag hinzufügen</p>
        <p>Eintrag entfernen</p>
      </div>
    </div>
    <div class="item">
      <h2 class="title">Titel</h2>
      <img src="https://s.jlosch.de/images-jlosch.de/missing-picture.svg" alt="" class="image">
      <div class="description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, suscipit. Necessitatibus odio molestias voluptatem, sed ullam molestiae, nesciunt fugit repudiandae saepe deleniti distinctio, at sunt officia esse rem modi. Laboriosam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sed aperiam aliquam dolor ducimus unde aliquid praesentium atque soluta, eius provident eligendi voluptatibus. Praesentium, quia rerum officia provident minima omnis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatibus saepe nulla accusantium corrupti, debitis impedit sit ipsa autem aliquid distinctio, ullam, facere quis quibusdam minima doloremque provident a tempore?
      </div>
      <div class="tags">
        <p class="tag">
          test
        </p>
        <p class="tag">
          test
        </p>
        <p class="tag">
          test
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
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
    border-radius: 4rem
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
