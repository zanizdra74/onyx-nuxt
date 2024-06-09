<template>
  <div>Hello Article</div>
</template>

<script>

export default {

  layout: "secondary",
  data() {
    return {
    }
  },
  async mounted() {
/*    const allProducts = await this.$store.dispatch('products/getProducts')
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
    }, false)*/
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
