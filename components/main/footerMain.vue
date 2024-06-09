<template>
  <footer id="footer-main">
    <div id="content-footer-main">
      <div id="container-top-left" class="container-top-left">
        <div id="container-block-logo">
          <img src="~/assets/onyx_lite.png" alt="onyx logo" id="logo-footer">
          <span id="banner-logo">ONYX - лидер по производству оборудования для порошковой покраски в Украине</span>
        </div>
      </div>
      <div id="container-top-right" class="container-top-right">
        <div id="container-block-contact">
          <h2>КОНТАКТНА ІНФОРМАЦІЯ:</h2>
          <span>69008, Запоріжжя,</span>
          <span>Експресівська, 28</span>
          <span>+38 066 134-16-81 Viber</span>
          <span>+38 066 720-56-50 Viber</span>
        </div>
      </div>
      <div id="container-bottom" class="container-bottom">
        <span id="copyright-footer">ООО “ОНИКС”, 2021</span>
      </div>
    </div>
  </footer>
</template>

<script>
    export default {
        name: "footerMain"
    }
</script>

<style scoped>
#footer-main{
  display: flex;
  justify-content: center;
  align-items: center;
}
#content-footer-main{
  display: grid;
  grid-template-columns:  1fr 1fr;
  grid-column-gap: 20%;
  grid-template-areas:
    'discription  address'
    'copyright    copyright';
  /*width: 992px;*/
  width: 85%;
  padding-top: 23px;
}
.container-top-left{
  grid-area: discription;
}

.container-top-right{
  grid-area: address;
}
.container-bottom{
  grid-area: copyright;
}
#footer-main{
  background-color: #2e313d;
  width: 100vw;
  margin-left: 0;
  margin-right: 0;
  color: #E4DDDD;
}
#logo-footer{
  height: 40px;
  object-fit: contain;
  padding-bottom: 25px;
}
#container-block-logo, #container-block-contact{
  display: flex;
  flex-direction: column;
}
#container-block-logo{
  align-items: flex-start;
}



#container-block-logo span{

}
#container-block-contact{
  align-items: flex-end;
}
#container-block-contact h2{
  font-weight: 700;
}
#container-block-contact span{
  text-align: end;
}
#container-bottom{
  padding-top: 30px;
  padding-bottom: 15px
}
@media (max-width: 700px) {
  #footer-main {
    grid-template-areas: 'discription' ' address' 'copyright';
  }
}
</style>
