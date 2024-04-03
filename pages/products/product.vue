<template>
  <section id="product-card" class="form-shadow">
    <h1>Name product</h1>
    <div class="row">
      <div class="" style="width: 50%;">
        <product-slider />
      </div>
      <div>
        Description
      </div>

    </div>
  </section>
</template>

<script>
import ProductSlider from "../../components/main/elements/productElements/productSlider";
export default {
  name: "product",
  components: {ProductSlider},
  layout: "secondary",

}
</script>

<style scoped>

</style>
