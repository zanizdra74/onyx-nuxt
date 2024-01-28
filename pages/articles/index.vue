<template>
  <div class="content container">
    <h1>{{ $t('pages.products.title') }}</h1>
    <h2>Hello</h2>
  </div>

</template>

<script>
export default {
//  name: "aboutUs",
  layout: "secondary",
  mounted() {
    console.log('lang--->', this.$t('hello'))
  }
}
</script>

<style scoped>

</style>
