<template>
  <div id="hamburger-menu">
    <div class="menu-btn" :class="{ 'checked-hamburger': checked, 'dark-color':lightColorBtn==='dark', 'light-color':lightColorBtn==='light' }" @click="btnAction">
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "hamburgerMenu",
  props: [ 'lightColorBtn', 'nameMenu'],
  data(){
    return{
      checked: false,
    }
  },
  computed: {
    colorClass: function(){
      return this.lightColorBtn==='dark'?'#616161':'#FFF'
    },
  },
  mounted() {
    document.getElementById("hamburger-menu").style.setProperty("--colorBtn", this.colorClass);
  },
  methods: {
    btnAction(){
      this.checked=!this.checked
      $nuxt.$emit("clickHamburgerMenu", {checked:this.checked, nameMenu:this.nameMenu})
    },
  }
}
</script>

<style scoped>
  #hamburger-menu{
    --colorBtn: transporent;
  }
  /* add hamburger */
  .menu-btn {
    display: flex;
    align-items: center;
    position: fixed;
    top: 200px;
    /*    left: 20px; */
    width: 26px;
    height: 16px;
    cursor: pointer;
    z-index: 1;
  }
  .menu-btn > span,
  .menu-btn > span::before,
  .menu-btn > span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: var(--colorBtn);
  }
  .menu-btn > span::before {
    content: '';
    top: -8px;
  }
  .menu-btn > span {
    content: '';
    top: 0;
  }
  .menu-btn > span::after {
    content: '';
    top: 8px;
  }
  /* Open/close menu*/
  .checked-hamburger > span {
    transform: rotate(45deg);
  }
  .checked-hamburger > span::before {
    top: 0;
    transform: rotate(0);
  }
  .checked-hamburger > span::after {
    top: 0;
    transform: rotate(90deg);
  }
</style>
