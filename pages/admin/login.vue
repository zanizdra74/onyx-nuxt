<template>
  <section id="container-login-form" class="row row-center column-center">
    <form class="login-box"
          @submit.prevent="onSubmit"
          :model="controls"
          ref="form"
    >
      <h1>Login</h1>
      <div class="form-group item-form" prop="login">
        <input
          type="text"
          class="form-control"
          placeholder="Login"
          v-model.trim="controls.login"
        >
      </div>
      <div class="form-group item-form" prop="password">
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model.trim="controls.password"
        >
      </div>
      <button
        class="btn btn-primary item-form"
        type="submit">
        <!--:loading="loading">-->
        Login
      </button>
    </form>
  </section>


</template>

<script>
  export default {
    layout: 'empty',
    data() {
      return {
        loading: false,
        controls: {
          login: '',
          password: ''
        },
      }
    },
/*
    mounted() {
      const {message} = this.$route.query
      switch (message) {
        case 'login':
          this.$message.info('Log in to get started')  // ввести информационно окно на форме эта запись верояней всего только для element-ua
          break
        case 'logout':
          this.$message.success('Вы успешно вышли из системы')
          break
        case 'session':
          this.$message.warning('Время сессии истекло, пожалуйста зайдите заного')
          break
      }
    },
*/
    methods: {
      async onSubmit() {
        try {
          const formData = {
            login: this.controls.login,
            password: this.controls.password
          }
          console.log('login form data -->', formData)
          await this.$store.dispatch('auth/login', formData)
          this.$router.push('/admin')
        } catch (e) {
            this.loading = false
        }
/*
        const formData = {
          login: this.controls.login,
          password: this.controls.password
        }
        await this.$store.dispatch('auth/login', formData)
        this.$router.push('/admin')
*/
      }
    }
  }
</script>


<style scoped>
  #container-login-form{
    margin-top: 20vh;
  }
  h1 {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }
  .login-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 15px 25px 0px rgba(136, 136, 136, 0.25);
    padding: 35px 25px 20px;
    position: relative;
  }


</style>
