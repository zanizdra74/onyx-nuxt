<template>
    <div class="container-header chameleon-container-header">
      <div class="chameleon-inside-container-header">
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

          <div class="chameleon-header-right">burger</div>
        </div>

      </div>

    </div>
</template>

<script>
    export default {
        props:[ 'darkLogo', ]

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
</style>
