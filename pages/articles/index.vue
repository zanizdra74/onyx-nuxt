<template>
  <div class="content container">
    <h1>{{ $t('pages.articles.title') }}</h1>
    <h2>Hello</h2>
    <tiles-vue :tiles = "articles" />
  </div>

</template>

<script>
import TilesVue from "../../components/main/elements/tiels/tiles";
export default {
  components: {TilesVue},
//  name: "aboutUs",
  layout: "secondary",
  data() {
    return {
      articles: [],
    }
  },
  async mounted() {
    console.log('lang--->', this.$t('hello'))
    this.articles =  await this.$store.dispatch('articles/getArticles')
    console.log('articles >>>>', this.articles)
  }
}
</script>

<style scoped>

</style>
