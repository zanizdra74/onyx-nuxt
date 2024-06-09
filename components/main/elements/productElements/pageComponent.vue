<template>
  <div id="product-content">
    <div class="block-title-h1">
      <h1 class="title-page">{{ titlePage }}</h1>
      <div class="title-page-underline"></div>
    </div>
    <div class="content" v-if="productOfSlug.name !==''">
      <product-card :products-data="productOfSlug" />
    </div>
  </div>
</template>

<script>
import ProductCard from "./productCard";
export default {
  name: "pageComponent",
  components: {ProductCard},
  props: ["titlePage", "productOfSlug", ],
  mounted() {
    console.log('page component productOfSlug ==> ', this.productOfSlug)
  }
}
</script>

<style scoped>
#product-content{
  padding: 15px 20px;
}
</style>
