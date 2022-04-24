<template>
<!--  <el-container style="width: 992px; margin-right: auto; margin-left: auto;" > -->
  <div id="main">
    <vertical-fixed-nav />
    <div class="container-flex">
      <div class="container-col">
        <section id="index-section-header" class="bg-dark chameleon-section cd-section">
          <header-nav dark-logo = "light" :show-hamburger-menu="seeHamburger" />
          <div class="chameleon-main">
            <zoom-out :image-header="contentHomePage.images.header.url" />
          </div>
        </section>

        <section id="index-section-about-us" class="bg-light chameleon-section cd-section">
          <header-nav class="chameleon-header" dark-logo = "dark" :show-hamburger-menu="seeHamburger" />
          <div class="chameleon-main container-section-main">
            <about-us
              :image-about-us-top = "contentHomePage.images.aboutUsTop"

              :image-about-us-bottom = "contentHomePage.images.aboutUsBottom"
              :text-about-us-text = "contentHomePage.text.aboutUs.text"
            />
          </div>
        </section>
        <section id="index-section-production" class="bg-dark chameleon-section cd-section">
          <header-nav class="chameleon-header" dark-logo = "light" :show-hamburger-menu="seeHamburger" />
          <div class="chameleon-main container-section-main">
            <production />
          </div>
        </section>
        <section id="index-section-advantages" class="bg-light chameleon-section cd-section">
          <header-nav class="chameleon-header" dark-logo = "dark" :show-hamburger-menu="seeHamburger" />
          <div class="chameleon-main container-section-main">
            <advantages />
          </div>
        </section>
        <section id="index-section-reviews" class="bg-dark chameleon-section cd-section">
          <header-nav class="chameleon-header" dark-logo = "light" :show-hamburger-menu="seeHamburger" />
          <div class="chameleon-main container-section-main">
            <reviews />
          </div>
        </section>
        <section id="index-section-contacts-footer" class="bg-light chameleon-section cd-section">
          <header-nav class="chameleon-header" dark-logo = "dark" :show-hamburger-menu="seeHamburger" />
          <div id="container-main-contact-footer" class="chameleon-main container-section-main">
            <contacts-footer />
          </div>
        </section>
      </div>
      <main-menu v-if="seeMainMenu"  />
    </div>
<!--    <el-footer class="bg-dark">Footer</el-footer>-->
  </div>
<!--  </el-container> -->

<!--
  <div class="container">
  Hi! It's My first page
  </div>
  -->
</template>

<script>
import headerNav from "~/components/main/headerNav";
import mainMenu from "~/components/main/mainMenu";
import zoomOut from "../components/main/zoomOut";
import verticalFixedNav from "../components/main/verticalFixedNav";
import aboutUs from "../components/main/homePage/aboutUs";
import production from "../components/main/homePage/production";
import advantages from "../components/main/homePage/advantages";
import reviews from "../components/main/homePage/reviews";
import contactsFooter from "../components/main/homePage/contactsFooter";
export default {
  layout: "home",
  components: { headerNav, mainMenu, zoomOut, verticalFixedNav, aboutUs, advantages, production, reviews, contactsFooter },
  contentHomePageStore: null,


  async asyncData({store}) {
    const contentHomePageStore = await store.getters["adminPages/contentHomePage"]
    return { contentHomePageStore }
  },
  data(){
      return {
          seeMainMenu: false,
          seeHamburger: true,
        contentHomePage: null,
      }
  },
  created() {
    this.contentHomePage = this.contentHomePageStore;

    console.log('contentHomePage.images.aboutUsBottom !!!!-->', this.contentHomePage.images.aboutUsBottom);
  },
  mounted() {
      $nuxt.$on('labelShowMainMenu', something => this.seeMainMenu = something);
      $nuxt.$on('labelCloseMainMenu', something => this.seeMainMenu = something);
      $nuxt.$on('labelShowHamburgerMenu', something => this.seeHamburger = something);



  },
  methods: {

  }
}
</script>

<style>
  #main{
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }
  #index-section-about-us{
    z-index: 3;
  }
  .container-flex{
    display: flex;
  }
  .container-col{
    width: 100%;
  }
  .bg-light{
    background-color: #DEE8E9;
  }
  .bg-dark{
    background-color: #2D3A4B;
  }
  .chameleon-section{
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }
  .chameleon-header{
    z-index: 40;
  }
  .chameleon-main{
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
/*    padding-top: 4rem;*/
    z-index: 10;
  }
  .container-section-main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    overflow: hidden;
  }
  #container-main-contact-footer{
/*    padding-top: 0;*/
  }
</style>
