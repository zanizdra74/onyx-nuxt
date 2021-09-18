<template>
  <main>
    <h1>Settings Page</h1>
  </main>
</template>

<script>
import admin from "../../../layouts/admin";
export default {
  name: "indexAdminSettings",
  layout: "admin",
  async asyncData({store}) {
    /*
    const arrElements = store.getters["pagesSite/pagesSite"]
    return { arrElements }
     */
  },
  data: ()=>({/*    showDeleteButton: false,*/}),
  mounted() {},
  methods: {}
}
</script>

<style scoped>

</style>
