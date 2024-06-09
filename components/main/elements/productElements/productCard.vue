<template>
  <div class="content form-shadow padding-container">
    <product-slider v-if="productsData.images.length>0" :product-data="productsData"/>
    <advantages v-if="productsData.description.advantages.length>0" :product-data="productsData.description.advantages" />
    <products-list v-if="productsData.data.length>0" :products-list="productsData.data" />
  </div>
</template>

<script>
import ProductSlider from "./productSlider";
import Advantages from "./advantages";
import ProductsList from "./productsList";
export default {
  name: "productCard",
  components: {ProductsList, Advantages, ProductSlider},
  props: ["productsData", ],
  data (){
    return {
      product: {},
    }
  },
  mounted() {
    console.log('productsData == ', this.productsData)
    this.product = this.productsData
  },
}
</script>

<style scoped>
  .padding-container{
    padding: 30px;
  }
</style>
