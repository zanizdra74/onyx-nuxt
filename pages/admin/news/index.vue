<template>
  <div>
      <h1 class="col-sm-4">News</h1>
  </div>
</template>

<script>
  export default {
//      components: {ConfirmModal},
    name: "indexAdminNews",
    layout: "admin",
    middleware: ['admin-auth'],

    async asyncData({store}) {
//      const arrNews = await store.dispatch('news/fetchAdmin')
//      return {arrNews}
    },
    data(){
        return {
 //           arrNews:'',
 //           show: false,
 //           deleteMsg: ''
        }
    },
    methods: {
      /*
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

       */
    }
  }
</script>

<style scoped>
  .btn-create-new-page{
    height: 40px;
    margin-top: 7px;
  }
</style>
