<template>
  <div class="content form-shadow padding-container">
    <product-slider :product-data="productsData"/>
    <advantages :product-data="productsData.description.advantages" />
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
    this.product = this.productsData
  },
}
</script>

<style scoped>
  .padding-container{
    padding: 30px;
  }
</style>
