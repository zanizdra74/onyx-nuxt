<template>
  <main>
    <div class="header-with-add row row-between">
      <h1>Users</h1>
      <button type="button" class="btn">Create New</button>
    </div>
    <div>
<!--        <tab-elements :arr-elements="arrElements" :show-delete-button="showDeleteButton" />-->
      <table id="tab-elements" class="table table-hover" border="1">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">User</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(user, keyUsers) in users" :key="keyUsers">
          <th scope="row">{{ keyUsers + 1 }}</th>
          <td>{{ user.login }} </td>
          <td class="td-button">
            <button
              type="button"
              class="btn btn-primary"
              @click="editUser(user.login)"
            >
              Edit
            </button>
          </td>
          <td class="td-button">
            <button
              type="submit"
              class="btn btn-danger"
              @click="deleteUser(user.login)"
            >
              Delete
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </main>
</template>

<script>
export default {
  name: "indexAdminUsers",
  layout: "admin",
  middleware: ['admin-auth'],
  async asyncData({store}) {
    const users = await store.dispatch('users/getAllUsers')
    console.log('users arrElements = ', users)
    return { users }
  },
  data: ()=>({/*    showDeleteButton: false,*/}),
  mounted() {console.log('users->', this.users)},
  methods: {
    editUser(login){
      console.log(`login action login->${login}`)
    },
    deleteUser(login){
      console.log(`delete action login->${login}`)
    },
  }
}
</script>

<style scoped>

</style>
