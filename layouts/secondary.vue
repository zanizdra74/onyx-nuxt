<template>
  <div>
    <header>
      <sec-header />
    </header>
    <main>
      <nuxt />
    </main>
    <footer>2Footer</footer>
  </div>
</template>
<script>
import SecHeader from "../components/main/secondaryPage/secHeader/secHeader";
export default {
  name: "secondary",
  components: {
    SecHeader,
  }
}
</script>

<style scoped>

</style>
