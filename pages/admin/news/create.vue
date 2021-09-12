<template>
  <div>
    <h1>New News</h1>
    <form
      @submit.prevent="onSubmit"
      :model="controls"
      ref="form"
    >
      <div class="form-group">
        <label for="title-news">Title news</label>
        <input
          id="title-news"
          type="text"
          class="form-control"
          v-model="controls.titleNews"
        >
      </div>
      <div class="form-group">
        <label for="text-news">Text news</label>
        <textarea
          id="text-news"
          class="form-control"
          name="text-news"
          rows="15"
          v-model="controls.textNews"
        >
        </textarea>
      </div>
      <button
        class="btn btn-primary"
        type="submit"
      >
      <!-- :loading="loading"> -->
      Save Change
    </button>
    </form>


  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  head() {
      return {
          title: `Admin Xloo | New News`
      }
  },
  data() {
    return {
//      loading: false,
      controls: {
        titleNews: '',
        textNews: '',
      },
    }
  },
  methods: {
    async onSubmit() {
//      this.loading = true
      try {
          const formData = {
              title: this.controls.titleNews,
              text: this.controls.textNews,
          }
          await this.$store.dispatch('news/create', formData)
          this.$router.push('/admin/news')
        } catch(e) {
      }
//      this.loading = false
    }
  }
}
</script>

<style scoped>

</style>


