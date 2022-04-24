<template>
  <!--
  <no-ssr placeholder="Loading Your Editor...">
    <vue-editor placeholder="Write Something..." v-model="content"></vue-editor>
  </no-ssr>
  -->
  <client-only>
    <VueEditor placeholder="Write Something..." v-model="content"/>
  </client-only>
</template>
<script>

export default{
  name: "textWriter",
  components: {  },
  props: [ 'contentTextBlock', 'adminPage', 'nameTextWriter' ],
  data: () => ({
    content: '',
  }),
  watch: {
    content(val){
      $nuxt.$emit('textUpdate' + this.adminPage, { nameTextWriter: this.nameTextWriter, text: this.content });
    }
  },
  mounted() {
    this.content = this.contentTextBlock
  },
}
</script>

<style scoped>

</style>
