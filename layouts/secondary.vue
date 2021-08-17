<template>
  <el-container>
    <el-header>
      <header-navigation />
    </el-header>
    <el-main>

      <nuxt />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>


</template>
<script>
import HeaderNavigation from "../components/main/HeaderNavigation";
export default {
  components: {
    HeaderNavigation,
    name: "secondary"
  }
}
</script>
<style>
body{
  margin: 0;
}
</style>

<style>

</style>

<template>

</template>

<script>
export default {
  name: "secondary"
}
</script>

<style scoped>

</style>
