<template>
  <div id="header-section">
    <header-nav :background-color-nav="backgroundColorNav" :color-theme="colorTheme" />
    <sec-header-background/>
  </div>
</template>

<script>

import HeaderNav from "../../headerNav";
import SecHeaderBackground from "./secHeaderBackground";
export default {
  name: "secHeader",
  components: {SecHeaderBackground, HeaderNav},
  data(){
    return{
      backgroundColorNav: 'transparent',
      colorTheme: 'dark',
    }
  },
}
</script>

<style scoped>

</style>
