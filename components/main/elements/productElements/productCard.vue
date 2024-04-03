<template>
  <div class="content container form-shadow padding-container">
    <product-slider :product-data="productsData"/>
    <advantages :product-data="productsData.discription.advantages" />
  </div>
</template>

<script>
import ProductSlider from "./productSlider";
import Advantages from "./advantages";
export default {
  name: "productCard",
  components: {Advantages, ProductSlider},
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
