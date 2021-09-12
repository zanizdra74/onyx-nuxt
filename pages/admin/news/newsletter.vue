<template>

</template>

<script>
  export default {
    layout: 'admin',
    middleware: 'admin-auth',
    head() {
      return {
          title: `Admin Xloo | Newsletter`
      }
    },
    async asyncData({store}) {
      var abjNewsLetter = {
        news: await store.dispatch('news/fetchAdmin'),
        arrSubscriber: await store.dispatch('news/fetchAdmin')
      };
      return { abjNewsLetter }
    },
    methods: {
        sentNews () {

        }
    }
  }
</script>

<style scoped>

</style>
