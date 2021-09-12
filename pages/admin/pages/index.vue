<template>
  <main>
    <h1>Pages</h1>
    <div>
      <tab-elements :arr-elements="arrElements" :show-delete-button="showDeleteButton" />
    </div>
  </main>
</template>

<script>
import TabElements from "../../../components/admin/tabElements";
export default {
  name: "indexAdminPages",
  components: {TabElements},
  layout: "admin",
  async asyncData({store}) {
    const arrElements = store.getters["pagesSite/pagesSite"]
    return { arrElements }
  },
  data: ()=>({
    showDeleteButton: false,
  }),
  mounted() {
    console.log('arrElements->', this.arrElements)
  }

}
</script>

<style scoped>

</style>
