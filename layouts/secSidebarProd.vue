<template>
  <div id="body">
    <div id="content">
      <header>
        <header-nav-secondary
          class="chameleon-header"
          :show-hamburger-menu="!seeMainMenu"
          :type-nav-menu=typeMenu
        />
      </header>
      <main class="flex-main">
        <div id="sidebar-products">
          <side-product-menu :slug-page="labelSlugPage" :active-menu="labelSlugMenu" />
        </div>
        <div id="main-content">
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
import SideProductMenu from "../components/main/elements/menus/sidePoductMenu/sideProductMenu";
import HeaderNavSecondary from "../components/main/headerNavSecondary";

export default {
  name: "secondary",
  components: {
    HeaderNavSecondary,
    SideProductMenu,
    MainMenu,
    HeaderNav,
    FooterMain,
  },
  data(){
    return{
      seeMainMenu: false,
      seeHamburger: true,
      typeMenu: 'line',
      labelSlugPage: '',
      labelSlugMenu: '',
      showSubCategory: '',
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
    $nuxt.$on('labelSlugPage', something => {
      console.log('labelSlugPage ===>>>>>>>>', something)
      this.labelSlugPage = something
    });
    $nuxt.$on('labelSlugMenu', something => {
      console.log('labelSlugMenu ===>>>>>>>>', something)
      this.labelSlugMenu = something
    })
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
.flex-main{
  display: flex;
}
#content {
  flex: 1 0 auto;
}
footer {
  flex-shrink: 0;
}
main{
  margin-top: 80px;
}
#main-content{
  /* padding: 15px 20px; */
  min-width: 75%;
}
#sidebar-products{
  min-width: 25%;
/*  max-width: 300px;*/
/*  margin: 50px 15px; */
}
</style>
