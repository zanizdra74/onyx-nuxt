<template>
    <div class="container-header chameleon-container-header" id="container-header">
      <div class="chameleon-inside-container-header liteNav" :class="{darkNav :darkLogo !== 'dark'}">
        <div class="chameleon-header-block">
          <nuxt-link :to="localePath('/')" class="container-logo">
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
          </nuxt-link>
          <div class="chameleon-header-right" v-if="typeNavMenu==='line'">
              <header-nav />
          </div>
          <div class="chameleon-header-right" v-else>
            <hamburger-menu
              v-if="showHamburgerMenu"
              :dark-hamburger="darkLogo"
            />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import hamburgerMenu from "./hamburgerMenu";
  import MainMenu from "./mainMenu";
  import HeaderNav from "./elements/menus/headerNav";

  export default {
      components: {HeaderNav, MainMenu, hamburgerMenu },
      props:["darkLogo", "showHamburgerMenu", "typeNavMenu", ]
  }
</script>

<style >
  #container-header{
    z-index: 10;
  }
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
    /*background: no-repeat url("../../assets/image/secondaryHeader.png");*/
  }
</style>
