<template>
    <div class="container-header chameleon-container-header">
      <div class="chameleon-inside-container-header liteNav" :class="{darkNav :darkLogo !== 'dark'}">
        <div class="chameleon-header-block">
          <div class="container-logo">
            <img
              src="~/assets/onyx_dark.png"
              alt = "Logo Onyx"
              v-if="darkLogo === 'dark'"
            >
            <img
              src="~/assets/onyx_lite.png"
              alt = "Logo Onyx"
              v-else
            >
          </div>
          <div class="chameleon-header-right">
            <hamburger-menu :see-hamburger-menu = showHamburgerMenu :dark-hamburger="darkLogo" v-if="showHamburgerMenu" />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import hamburgerMenu from "./hamburgerMenu";
    export default {
        components: { hamburgerMenu },
        props:[ 'darkLogo', "showHamburgerMenu"]

    }
</script>

<style scoped>
  .container-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .chameleon-container-header{
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    -webkit-clip-path: inset(0px);
    clip-path: inset(0px);
    pointer-events: none;
  }
  .chameleon-inside-container-header {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    font-size: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    pointer-events: auto;
  }
  .chameleon-header-block{
    width: 992px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .container-logo{
    width: 150px;
    height: 80px;
    display: flex;
  }
  .container-logo img{
    width: inherit;
    object-fit: contain;
  }
  .chameleon-header-right{
    display: flex;
  }
  .liteNav{
    background-color: rgba(222,232,233,0.95);
  }
  .darkNav{
    background-color: rgba(45,58,75,0.95);
  }
</style>
