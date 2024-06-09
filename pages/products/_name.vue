<template>
  <page-component :title-page="productOfSlug.title" :product-of-slug="productOfSlug" />
</template>

<script>
import PageComponent from "../../components/main/elements/productElements/pageComponent";

export default {
  name: "varProducts",
  components: {PageComponent,/* ProductsList, ProductCard*/},
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
    const allProducts = await this.$store.dispatch('products/getProducts')
    const products = allProducts.data
    const pageSlug = this.$route.params.name

    const labelSlug = this.checkSlug(pageSlug, products)
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
</style>
