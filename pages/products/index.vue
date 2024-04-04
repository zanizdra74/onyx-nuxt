<template>
  <div>
    <div class="block-title-h1">
      <h1 class="title-page">{{ $t('pages.products.title') }}</h1>
      <div class="title-page-underline"></div>
    </div>
    <div class="content container">
      <products-list v-if="productOfSlug.length>0" :products-list="productOfSlug" />
    </div>
  </div>
</template>

<script>
import ProductCard from "../../components/main/elements/productElements/productCard";
import ProductsList from "../../components/main/elements/productElements/productsList";
export default {
  components: {ProductsList, ProductCard},
/*
  props: [listPproducts],
*/
//  name: "aboutUs",
  layout: "secSidebarProd",
  data(){
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
    console.log('lang--->', this.$t('hello'))

    this.showSubCategory = this.slugPage
    console.log('lang--->', this.$t('hello'))
    const pageSlug = this.$route.params.name
    $nuxt.$emit('labelSlugPage', pageSlug);
    $nuxt.$emit('labelSlugMenu', pageSlug);

    this.productOfSlug = await this.$store.dispatch('products/getProducts')
    console.log('this.productOfSlug = ', this.productOfSlug )


  }
}
</script>

<style scoped>

</style>
