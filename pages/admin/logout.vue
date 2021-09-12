<template>
  <div>
    <div>Сlear data</div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  beforeCreate() {
    this.$store.dispatch('auth/logout')
    this.$router.push('/')
  }
}
</script>

<style scoped>

</style>
