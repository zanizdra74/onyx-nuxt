<template>
  <section class="bg-green chameleon-section">
    <header-nav dark-logo = "dark" :show-hamburger-menu="seeHamburger" />
    <div class="chameleon-main">
      Main1
    </div>
  </section>
</template>

<script>
  export default {
    name: "headerSectionZoomOut"
  }
</script>

<style scoped>
  .bg-green{
    background-color: green;
  }
  .chameleon-section{
    position: relative;
    height: 100vh;
  }
  .chameleon-main{
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    padding-top: 4rem;
  }
</style>
