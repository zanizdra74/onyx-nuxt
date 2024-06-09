<template>
  <NuxtLink class="tile" :to="'articles/' + slug">
    <img v-if="image.url && image.alt" class="img-tile" :src="require('~/upload/products/' + image.url)" :alt="image.alt">
    <div class="title-tile">
      <p>{{title}}</p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: "tile",
  props: ["slug", "image", "title"],
}
</script>

<style scoped>
.tile{
  text-decoration: none;
}
.img-tile{
  width: -webkit-fill-available;
}
.title-tile{
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 10px 10px 0 10px;
}
.title-tile p{
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #2d3a4b;
  font-size: 1.2rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
