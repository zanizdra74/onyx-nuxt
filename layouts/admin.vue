<template>
  <div class="row layout-admin-wrap">
    <div id="admin-sidebar">
      <nav id="admin-navbar" class="navbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/admin">Analytics</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/admin/new-user">New User</nuxt-link>
          </li>
          <li class="nav-item" v-on:click="showSubPages=!showSubPages">
            <nuxt-link class="nav-link" to="/admin/pages">Pages of Site</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/admin/news">News</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/admin/logout">Logout</nuxt-link>
          </li>
        </ul>

      </nav>
    </div>
    <div id="admin-main">
      <nuxt/>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      showSubPages: false,
    }
  },
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(value) {
//        this.$message.error(value.response.data.message)
    }
  }
}
</script>

<style scoped>
.layout-admin-wrap {
  width: 100%;
  height: 100vh;
}

#admin-sidebar {
  padding: 0;
  background-color: #2D3A4B;

}
#admin-sidebar a{
  color: #E4DDDD;
  font-size: 1.2rem;
}
#admin-navbar {
  height: 100%;
  align-content: flex-start;
  padding: 20px;
}
#admin-main {
  width: 100%;
  padding: 20px;
}
</style>
