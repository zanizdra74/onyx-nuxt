<template>
  <div id="product-content">
    <div class="block-title-h1">
      <h1 class="title-page">{{ productOfSlug.title }}</h1>
      <div class="title-page-underline"></div>
    </div>
    <div class="content" v-if="productOfSlug.name !==''">
      <product-card :products-data="productOfSlug" />
    </div>
    <!--
    <div class="content container" v-if="productOfSlug.name !==''">
      <products-list v-if="productOfSlug.data.length>0" :products-list="productOfSlug.data" />
      <product-card v-else :products-data="productOfSlug" />
    </div>
    -->
  </div>
</template>

<script>
import product from "./product";
import ProductCard from "../../components/main/elements/productElements/productCard";
import ProductsList from "../../components/main/elements/productElements/productsList";

export default {
  name: "_name",
  components: {ProductsList, ProductCard},
  layout: "secSidebarProd",
  data() {
    return {
      productOfSlug: {
        data: [],
        images: [],
        name: '',
        slug: '',
        title: '',
        type: '',
      },
    }
  },
  async mounted() {
    const products = await this.$store.dispatch('products/getProducts')
    const pageSlug = this.$route.params.name

    const labelSlug = this.checkSlug(pageSlug, products)
    console.log('labelSlug =!!!>>>>>>> ', labelSlug, ' pageSlug =  ', pageSlug)
    $nuxt.$emit('labelSlugPage', labelSlug);
    $nuxt.$emit('labelSlugMenu', labelSlug === pageSlug ? labelSlug: pageSlug );

    this.productOfSlug= products.reduce((accumulator, itemProd) => {
      if (itemProd.slug === pageSlug) {
        accumulator = itemProd
      } else if (itemProd.data.find(dataItemProd => dataItemProd.slug === pageSlug)) {
        accumulator = itemProd.data.find(dataItemProd => dataItemProd.slug === pageSlug)
      }
      return accumulator
    }, false)
  },
  methods: {
    checkSlug(pageSlug, products) {
      const foundProduct = products.find(el => {
        if (el.slug !== pageSlug) {
          return el.data.find(product => product.slug === pageSlug) ? el.slug : false
        } else {
          return pageSlug
        }
      })
      return foundProduct.slug
    },
  }
}
</script>

<style scoped>
#product-content{
  padding: 15px 20px;
}
/*.content.container{
  padding: 15px 0;
  margin-right: 0;
  margin-left: 0;
}*/
</style>
