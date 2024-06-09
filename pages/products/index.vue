<template>
  <page-component v-if="" :title-page="$t('pages.products.title')" :product-of-slug="productOfSlug" />
  <!--  <div>
      <div class="block-title-h1">
        <h1 class="title-page">{{ $t('pages.products.title') }}</h1>
        <div class="title-page-underline"></div>
      </div>
      <div class="content container">
        <products-list v-if="productOfSlug.length>0" :products-list="productOfSlug" />
      </div>
    </div>-->
</template>

<script>
/*import ProductCard from "../../components/main/elements/productElements/productCard";
import ProductsList from "../../components/main/elements/productElements/productsList";*/
import PageComponent from "../../components/main/elements/productElements/pageComponent";
export default {
  components: { PageComponent, /*ProductsList, ProductCard*/ },
/*
  props: [listPproducts],
*/
  name: "Products",
  layout: "secSidebarProd",
  data(){
    return {
      productOfSlug: {
        description: {
          advantages: [],
        },
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
    const pageSlug = this.$route.params.name

    $nuxt.$emit('labelSlugPage', pageSlug);
    $nuxt.$emit('labelSlugMenu', pageSlug);

/*    const allProducts = await this.$store.dispatch('products/getProducts')
    this.productOfSlug = allProducts.data*/
    this.productOfSlug = await this.$store.dispatch('products/getProducts')
    console.log('productOfSlug--->', this.productOfSlug)

  }
}
</script>

<style scoped>

</style>
