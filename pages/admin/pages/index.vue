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
    let ap = this
    console.log('arrElements->', this.arrElements)
//    this.$root.$emit("showSpinner");
    $nuxt.$on('editElementsPage', slug => ap.openEditablePage(slug));
  },
  methods: {
    openEditablePage(slug){
      console.log('open page with slug=', slug)
      $nuxt.$router.push({ path: '/admin/pages/' + slug })
    }
  }
}
</script>

<style scoped>

</style>
