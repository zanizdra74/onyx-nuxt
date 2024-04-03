<template>
  <div id="container-advantages">
    <div
      class="item-advantages"
      v-for="(itemAdvantages, indexAdvantages) in productData"
    >
      <h3>{{ itemAdvantages.title }}</h3>
      <div class="container-item-advantages">

        <div class="icon-advantages" v-if="indexAdvantages % 2 === 0">
          <img class="" :src="require('~/assets/icon/productParagrath/' + itemAdvantages.icon)"  alt="">
        </div>
        <div class="text-advantages">
          <div>{{ itemAdvantages.text }}</div>
        </div>
        <div class="icon-advantages"  v-if="indexAdvantages % 2 === 1">
          <img class="" :src="require('~/assets/icon/productParagrath/' + itemAdvantages.icon)"  alt="">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "advantages",
  props: ["productData", ],
  mounted() {
    console.log('advantages == ', this.productData)
  },
}
</script>

<style scoped>
.item-advantages{
  margin-bottom: 40px;
}
.item-advantages h3{
  text-align: center;
  margin: 15px;
}
.container-item-advantages{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icon-advantages img{
  width: 64px;
  height: 64px;
  margin: 20px;
}
.text-advantages{
  white-space: pre-line;
}
</style>
