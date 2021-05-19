<template>
  <section id="section-main-menu">
    <div id="button-close" class="menu__btn">
    </div>
    <ul class="menu__box" id="main-menu">
      <el-row>
        <el-col :xs="24" :sm="12" id="item-production" class="container-item-menu">
          <div id="button-close-div" class="menu__btn" @click="closeMainMenu">
            <span></span>
          </div>
          <li>
            <a class="menu__item" href="#">
              <div class="in_menu__item">
                <img src="~assets/icon/mainMenu/production.png" alt="production">
                <span>Продукция</span>
              </div>
            </a>
          </li>
        </el-col>
        <el-col :xs="24" :sm="12" id="item-projects" class="container-item-menu bg-grey">
          <li>
            <a class="menu__item" href="#">
              <div class="in_menu__item">
                <img src="~assets/icon/mainMenu/projects.png" alt="projects">
                <span>Проекты</span>
              </div>
            </a>
          </li>
        </el-col>
        <el-col :xs="24" :sm="12" id="item-about-us" class="container-item-menu bg-grey">
          <li>
            <a class="menu__item" href="#">
              <div class="in_menu__item">
                <img src="~assets/icon/mainMenu/about.png" alt="about us">
                <span>О нас</span>
              </div>
            </a>
          </li>
        </el-col>
        <el-col :xs="24" :sm="12" id="item-contacts" class="container-item-menu bg-yellow">
          <li>
            <a class="menu__item" href="#">
              <div class="in_menu__item">
                <img src="~assets/icon/mainMenu/contacts.png" alt="contacts">
                <span>Контакты</span>
              </div>
            </a>
          </li>
        </el-col>
      </el-row>
    </ul>
  </section>

</template>

<script>
  export default {
    name: "mainMenu",
    props: ['visibleMainMenu'],
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
    display: flex;
    top:0;
    right:0;
    bottom: 0;
    background-color: transparent;
    width: 50vw;
    z-index: 101;
  }
  #main-menu{
    width: 100%;
    margin-top: 0;
  }
  #main-menu li img{
    height: 80px;
  }
  .in_menu__item{
    display: flex;
    flex-direction: column;
  }
  .container-item-menu{
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #item-projects, #item-about-us{
    background-color: rgba(98, 108, 117, 0.95);
  }
  #item-production, #item-contacts{
    background-color:  rgba(245, 225, 68, 0.95);
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
