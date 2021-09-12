<template>
  <div>
    <h1>{{ news.title }}</h1>
    <form
      @submit.prevent="onSubmit"
      :model="controls"
      ref="form"
    >
      <div class="form-group">
        <label for="text-news">Text page</label>
        <textarea
          id="text-news"
          class="form-control"
          name="text-page"
          rows="15"
          v-model.trim="controls.textNews"
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
        title: `Admin Xloo | ${this.news.title}`
      }
    },

    async asyncData({store,  params}) {
        const news = await store.dispatch('news/fetchAdminById', params.id)
        return { news }
    },

    data() {
      return {
        loading: false,
        controls: {
          titleNews: '',
          textNews: '',
        },
      }
    },
    mounted() {
      this.controls.textNews = this.news.text
    },
    methods: {
      async onSubmit() {
        this.loading = true
        const formData = {
          title: this.controls.titleNews,
          text: this.controls.textNews,
          id: this.news._id
        }
        await this.$store.dispatch('news/update', formData)
        this.loading = false
      }
    }
  }
</script>

<style scoped>
</style>
