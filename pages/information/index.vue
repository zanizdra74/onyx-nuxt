<template>
  <div id="container" class="content content-container">
    <h1>{{ $t('pages.info.title') }}</h1>
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
#container h1{
  text-align: center;
}
</style>
