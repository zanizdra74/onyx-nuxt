<template>
  <section id="create-new-user">

    <form
      class="form-shadow"
      :model="controls"
      ref="form"
      @submit.prevent="onSubmit"
    >
      <h1>Create new product</h1>
      <div class="container-input item-form">
        <input id="user-login" v-model.trim="controls.login" placeholder="Name"/>
        <small>Required field.</small>
      </div>
      <div class="row">
        <div class="container-input item-form">
          <input type="password" id="user-password" v-model.trim="controls.password" placeholder="Password"/>
          <small>Required field.</small>
        </div>
        <div class="container-input item-form">
          <input type="password" id="user-confirm-pass" v-model.trim="controls.confirmPass" placeholder="Confirm Password" />
          <small>Required field.</small>
        </div>
      </div>
      <button type="submit" class="btn item-form">Create New</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "createNewProduct",
  layout: "admin",
  middleware: ['admin-auth'],
  data() {
    return {
      loading: false,
      controls: {
        login: '',
        password: '',
        confirmPass: '',
      },
      objInvalid: {
        login: false,
        password: false,
        confirmPass: false,
      }
    }
  },
  methods: {
    async onSubmit() {
      console.log(`login->${this.controls.login} password->${this.controls.password}`)
      this.validationForm()

      try {
        const formData = {
          login: this.controls.login,
          password: this.controls.password
        }
        await this.$store.dispatch('users/createUser', formData)

        /**
//      create element Message    this.$message.success('New User added')
         */
        this.controls.login = ''
        this.controls.password = ''
        this.controls.confirmPass = ''

        /**
         * make redirect on admin page after show message of Create new user
         */

        this.loading = false
      } catch (e) {
        this.loading = false
      }

    },
    validationForm(){
      if (this.controls.password!==this.controls.confirmPass){
        alert('Password does not match confirm password')
        this.objInvalid.password = true
        this.objInvalid.confirmPass = true
        return false
      }
    }
  }
}

</script>

<style scoped>
.item-form{
  align-items: flex-start;
  margin-right: 30px;
  margin-top: 30px;
}
.item-form input{
  width: 300px;
}
button.item-form{
  margin-left: 0;
}
</style>
