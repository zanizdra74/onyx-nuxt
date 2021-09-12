<template>
  <div>
    <div class="row align-self-center">
      <h1 class="col-sm-4">News</h1>
      <button
        type="button"
        class="btn btn-primary col-auto btn-create-new-page"
        @click="createNewNews()"
      >
        Create New News
      </button>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Date Change</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="(news, index) in arrNews" :key="index">
        <th scope="row">{{ index }}</th>
        <td>{{ news.title }}</td>
<!--        <td>{{ page.date.toLocaleDateString() }}</td> -->
        <td>{{ new Date(news.date).toLocaleString() }}</td>
        <td>
          <button
            type="button"
            class="btn btn-primary"
            @click="editNews(news._id)"
          >
            Read News
          </button>
        <td>
<!--        <confirm-modal ref="modal" :msg="deleteMsg" />-->
          <b-button
            type="submit"
            class="btn btn-danger"
            @click="deleteNews(news._id)"
          >
            Delete News
            </b-button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//  import ConfirmModal from "../../../components/confirmModal";
  export default {
//      components: {ConfirmModal},
      layout: 'admin',
    middleware: ['admin-auth'],
    async asyncData({store}) {
      const arrNews = await store.dispatch('news/fetchAdmin')
      return {arrNews}
    },
    data(){
        return {
            arrNews:'',
            show: false,
            deleteMsg: ''
        }
    },
    methods: {
      editNews(id){
        this.$router.push(`/admin/news/${id}`)
      },
      createNewNews(){
        this.$router.push(`/admin/news/create`)
      },
      deleteNews(id){
        this.$bvModal.msgBoxConfirm('Please confirm that you want to delete everything.', {
          title: 'Please Confirm',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'YES',
          cancelTitle: 'NO',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        })
          .then(async value => {
              if (value) {
                  await this.$store.dispatch('news/remove', id)
                  this.arrNews = this.arrNews.filter( p => p._id !==id)
              }
          })
          .catch(err => {
              commit('setError', e, {root: true})
              throw e
          })

//        this.$router.push('/admin/news')
      }
    }
  }
</script>

<style scoped>
  .btn-create-new-page{
    height: 40px;
    margin-top: 7px;
  }
</style>
