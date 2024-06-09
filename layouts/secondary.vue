<template>
  <div id="body">
    <div id="content">
      <header>
<!--        <sec-header />-->
        <header-nav-secondary
          class="chameleon-header"
          :show-hamburger-menu="!seeMainMenu"
          :type-nav-menu=typeMenu
        />
      </header>
      <main>
        <div class="content content-secondary">
          <nuxt />
        </div>
      </main>
    </div>
    <footer>
      <footer-main />
    </footer>
    <main-menu :visible-main-menu="seeMainMenu" />
  </div>
</template>
<script>
import HeaderNav from "~/components/main/headerNav";
import FooterMain from "../components/main/footerMain";
import MainMenu from "../components/main/mainMenu";
import HeaderNavSecondary from "../components/main/headerNavSecondary";

export default {
  name: "secondary",
  components: {
    HeaderNavSecondary,
    FooterMain,
  },
  data(){
    return{
      seeMainMenu: false,
      seeHamburger: true,
      typeMenu: 'line',
    }
  },
  created() {
    if (process.browser){
      const onResize = () => this.typeMenu = window.innerWidth <= 992 ? 'hamburger': 'line';
      onResize();
      window.addEventListener('resize', onResize);
      this.$once('hook:beforeDestroy', () => window.removeEventListener('resize', onResize));
    }
  },
  mounted() {
    $nuxt.$on('labelShowMainMenu', something => this.seeMainMenu = something);
    $nuxt.$on('labelCloseMainMenu', something => this.seeMainMenu = something);
//    $nuxt.$on('labelShowHamburgerMenu', something => this.seeHamburger = something);
  }
}
</script>
<style>
html, body, #__nuxt, #__layout{
  height: 100%;
}
</style>
<style scoped>
#body {
  height: 100%;
}
#body {
  display: flex;
  flex-direction: column;
}
#content {
  flex: 1 0 auto;
}
.content-secondary{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 85%;
}
footer {
  flex-shrink: 0;
}
main{
  margin-top: 80px;
}
</style>
