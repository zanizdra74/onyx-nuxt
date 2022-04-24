<template>
  <div>
    <div>Сlear data</div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  beforeCreate() {
    this.$store.dispatch('auth/logout')
    this.$router.push('/admin/login?message=logout')
  }
}
</script>

<style scoped>

</style>
