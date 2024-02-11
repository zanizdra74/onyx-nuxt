<template>
  <section id="section-main-menu" :class="visibleMainMenu ? 'section-active' : 'section-none-active'">
    <div id="button-close" class="menu__btn">
    </div>
    <div id="button-close-div" class="menu__btn" @click="closeMainMenu">
      <span></span>
    </div>
    <ul class="menu-box" id="main-menu">
      <li class="light-back block-nav-item" @click="closeMainMenu">
        <nuxt-link :to="localePath('products')" class="menu-item">
          <div class="in_menu__item">
            <img src="~assets/icon/mainMenu/production.png" alt="production">
            <span class="text-menu">{{ $t('pages.products.title') }}</span>
          </div>
        </nuxt-link>
      </li>
      <li class="dark-back block-nav-item" @click="closeMainMenu">
        <nuxt-link :to="localePath('projects')" class="menu-item" >
          <div class="in_menu__item">
            <img src="~assets/icon/mainMenu/projects.png" alt="projects">
            <span class="text-menu"> {{ $t('pages.projects.title') }}</span>
          </div>
        </nuxt-link>
      </li>
      <li class="dark-back block-nav-item" @click="closeMainMenu">
        <nuxt-link :to="localePath('about-us')" class="menu-item" >
          <div class="in_menu__item">
            <img src="~assets/icon/mainMenu/about.png" alt="about us">
            <span class="text-menu">{{ $t('pages.aboutUs.title') }}</span>
          </div>
        </nuxt-link>
      </li>
      <li class="light-back block-nav-item" @click="closeMainMenu">
        <nuxt-link :to="localePath('contacts')" class="menu-item">
          <div class="in_menu__item">
            <img src="~assets/icon/mainMenu/contacts.png" alt="contacts">
            <span class="text-menu"> {{ $t('pages.contacts.title') }}</span>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: "mainMenu",
    props: ['visibleMainMenu', ],
    data(){
      return {
          //                visibleMainMenu: false,
      }
    },
    methods: {
      closeMainMenu(){
        $nuxt.$emit('labelCloseMainMenu', false);
          $nuxt.$emit('labelShowHamburgerMenu', true);
      }
    }
  }
</script>

<style scoped>
  #section-main-menu{
    position: fixed;
/*    display: flex; */
/*
    display: none;
*/
    top:0;
    right:0;
    bottom: 0;
    background-color: transparent;
    width: 50vw;
    z-index: 101;
  }
  .section-none-active{
    /*display: none;*/
    transform: translateX(100%);
    transition: .5s;
  }
  .section-active{
    transform: translateX(0);
    transition: .5s;
  }
  #main-menu{
    width: 100%;
    height: 100%;
    margin-top: 0;
    display: flex;
    flex-wrap: wrap;
  }
  #main-menu li img{
    height: 80px;
  }
  .in_menu__item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .container-item-menu{
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dark-back, #item-projects, #item-about-us{
    background-color: rgba(98, 108, 117, 0.90);
  }
  .light-back,  #item-production, #item-contacts{
    background-color:  rgba(245, 225, 68, 0.90);
  }
  .dark-back:hover{
    background-color: rgba(98, 108, 117, 1);
  }
  .light-back:hover{
    background-color:  rgba(245, 225, 68, 1);
  }

  .block-nav-item{
/*    flex-grow: 1;
    min-width: 50%;*/
/*    display: flex;
    align-items: center;
    justify-content: center;*/
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 50%;

  }
  .menu-item{
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text-menu {
    margin-top: 15px;
    font-family: Roboto-Regular;
    text-align: center;
    font-size: 1.8rem;
  }
  .light-back .text-menu {
    color: rgba(98, 108, 117, 0.95);
  }
  .dark-back .text-menu {
    color: rgba(245, 225, 68, 0.95);
  }

    /* скрываем чекбокс */
  #menu__toggle {
    opacity: 0;
  }
  .menu__btn {
    display: flex; /* используем flex для центрирования содержимого */
    align-items: center;  /* центрируем содержимое кнопки */
    position: absolute;
    top: 15px;
    left: 15px;
    width: 26px;
    height: 26px;
    cursor: pointer;
    z-index: 1;
  }
  /* добавляем "гамбургер" */
  .menu__btn > span,
/*  .menu__btn > span::before,*/
  .menu__btn > span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #616161;
  }
  .menu__btn > span {
    transform: rotate(45deg);
  }
/*  .menu__btn > span::before {
    top: 0;
    transform: rotate(0);
  }*/
  .menu__btn > span::after {
    top: 8px;
    transform: rotate(90deg);
  }
/*
  .menu__btn > span::before {
    content: '';
    top: -8px;
  }
  */
  .menu__btn > span::after {
    content: '';
    top: 1px;
  }

  /* Open/close menu*/
  /*
  #menu__toggle:checked ~ .menu__btn > span {
    transform: rotate(0);
  }
  #menu__toggle:checked ~ .menu__btn > span::before {
    top: 0;
    transform: rotate(0);
  }
  #menu__toggle:checked ~ .menu__btn > span::after {
    top: 0;
    transform: rotate(0);
  }
  #menu__toggle:checked ~ .menu__box {
    visibility: visible;
    left: 0;
  }

  /* Animation */
  /*
  .menu__btn > span,
  .menu__btn > span::before,
  .menu__btn > span::after {
    transition-duration: .25s;
  }
*/

  @media (max-width: 767.98px) {
    .container-item-menu{
      height: 25vh;
    }
    #item-about-us{
      background-color: rgba(245, 225, 68, 0.7);
    }
    #item-contacts{
      background-color: rgba(98, 108, 117, 0.8);
    }
    #section-main-menu{
      width: 100vw;
    }
  }

</style>
