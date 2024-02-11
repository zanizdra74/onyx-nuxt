<template>
  <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
<!--    <label class="menu__btn" :class="{menu__btn_lite: darkHamburger==='dark'?false:true}" for="menu__toggle" @click="visibleMainMenu(seeMainMenu)">-->
      <label class="menu__btn" :class="{menu__btn_lite: darkHamburger==='dark'?false:true}" @click="visibleMainMenu(seeMainMenu)">

     <span></span>
    </label>
  </div>
</template>

<script>
  // Created by https://medium.com/@krokhin.ezh/%D0%BA%D0%B0%D0%BA-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D0%B3%D0%B0%D0%BC%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80-%D0%BC%D0%B5%D0%BD%D1%8E-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D1%8F-%D1%82%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE-css-%D0%B8-html-c6abf7c32c6d
    export default {
        name: "hamburgerMenu",
        props: ["seeHamburgerMenu", "darkHamburger", ],
        data(){
          return {
              seeMainMenu: false,
          }
        },
        methods: {
            visibleMainMenu(flagSeeMenu){
                this.seeMainMenu = !flagSeeMenu;
                $nuxt.$emit('labelShowMainMenu', this.seeMainMenu);
 //               $nuxt.$emit('labelShowHamburgerMenu', false);
            }
        }
    }
</script>

<style scoped>
  .hamburger-menu{
    display: flex;
  }
  .hamburger-menu input{
    width: 26px;
    height: 26px;
  }
  /* скрываем чекбокс */
  #menu__toggle {
    opacity: 0;
    margin: 0;
  }
  .menu__btn {
    display: flex; /* используем flex для центрирования содержимого */
    align-items: center;  /* центрируем содержимое кнопки */
    position: fixed;
/*    top: 20px; */
/*    left: 20px; */
    width: 26px;
    height: 26px;
    cursor: pointer;
    z-index: 1;
  }
  /* добавляем "гамбургер" */
  .menu__btn > span,
  .menu__btn > span::before,
  .menu__btn > span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #616161;
  }
  .menu__btn_lite > span,
  .menu__btn_lite > span::before,
  .menu__btn_lite > span::after {
    background-color: #fff;
  }
  .menu__btn > span::before {
    content: '';
    top: -8px;
  }
  .menu__btn > span::after {
    content: '';
    top: 8px;
  }
/*
  !* Open/close menu*!
  #menu__toggle:checked ~ .menu__btn > span {
    transform: rotate(45deg);
  }
  #menu__toggle:checked ~ .menu__btn > span::before {
    top: 0;
    transform: rotate(0);
  }
  #menu__toggle:checked ~ .menu__btn > span::after {
    top: 0;
    transform: rotate(90deg);
  }
  #menu__toggle:checked ~ .menu__box {
    visibility: visible;
    left: 0;
  }

  !* Animation *!
  .menu__btn > span,
  .menu__btn > span::before,
  .menu__btn > span::after {
    transition-duration: .25s;
  }
  .menu__box {
    transition-duration: .25s;
  }
  .menu__item {
    transition-duration: .25s;
  }*/
</style>
