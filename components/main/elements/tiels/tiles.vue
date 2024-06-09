<template>
  <div>
    <div
      class="form-shadow block-tile"
      v-for="(itemTiles, keyTiles) in tiles"
      :class="(keyTiles +1) % 3 !== 0 ? 'odd-item' : '' "
      v-if="tiles && tiles.length>0"
    >
      <tile :slug="itemTiles.slug" :image="itemTiles.image" :title="itemTiles.title"/>
    </div>
  </div>

</template>

<script>
import Tile from "./tile";
export default {
  name: "tilesVue",
  components: {Tile},
  props: ["tiles", ],
  mounted() {
    console.log('tiles')
  }
}
</script>

<style scoped>
  .block-tile{
    float: left;
    position: relative;
    width: 32%;
    margin-bottom: 10px;
  }
  .block-tile:hover{
    box-shadow: 3px -3px 5px  rgba(245,225,68,0.4);
  }
  .odd-item{
    margin-right: 2%;
  }
</style>
