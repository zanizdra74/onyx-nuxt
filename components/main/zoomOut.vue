<template>
  <section id="cd-intro">
<!--    <script async="true" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> -->
<!--
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
-->

    <div id="cd-intro-background"></div>
    <div id="cd-intro-tagline">
      <!--      <h1>Zoom-out Intro Effect</h1> -->
    </div>
  </section>
</template>

<script>
export default {
  name: "zoomOut",
  props: ['imageHeader'],
  data: ()=>({
    test: '',
  }),
  mounted() {
    //change scaleSpeed if you want to change the speed of the scale effect
    const scaleSpeed = 1
    //change opacitySpeed if you want to change the speed of opacity reduction effect
    const opacitySpeed = 1.6;
    //update this value if you change this breakpoint in the style.css file (or _layout.scss if you use SASS)
    const MQ = 600;

    const introSectionJs = document.getElementById("cd-intro-background")
    let introSectionHeight = introSectionJs.offsetHeight

    introSectionJs.style.setProperty("background", "url(/_nuxt/upload/adminPages/home/" + this.imageHeader + " )  no-repeat center center")

    triggerAnimation();

    window.onresize = () => {
      triggerAnimation();
    }

    //bind the scale event to window scroll if window width > $MQ (unbind it otherwise)
    function triggerAnimation() {
      if (window.innerWidth >= MQ) {
        window.onscroll = () => {
          //The window.requestAnimationFrame() method tells the browser that you wish to perform an animation- the browser can optimize it so animations will be smoother
          window.requestAnimationFrame(animateIntro);
        };
      } else {
        console.log('scroll off')
        //если не будет работать нужно будет ракоментировать jq $(window).on('scroll'
//           $(window).off('scroll');
      }
    }

    //assign a scale transformation to the introSection element and reduce its opacity
    function animateIntro() {
      let c = document.getElementById("index-section-header").getBoundingClientRect()
      let scrollTopDist = - c.top
      let scrollPercentage = (scrollTopDist / introSectionHeight).toFixed(5)
      let  scaleValue = 1 - scrollPercentage * scaleSpeed;

      //check if the introSection is still visible
      if (scrollTopDist < introSectionHeight) {
        introSectionJs.style.setProperty('-moz-transform', 'scale(' + scaleValue + ') translateZ(0)')
        introSectionJs.style.setProperty('-webkit-transform', 'scale(' + scaleValue + ') translateZ(0)')
        introSectionJs.style.setProperty('-ms-transform', 'scale(' + scaleValue + ') translateZ(0)')
        introSectionJs.style.setProperty('-o-transform','scale(' + scaleValue + ') translateZ(0)')
        introSectionJs.style.setProperty('transform','scale(' + scaleValue + ') translateZ(0)')
        introSectionJs.style.setProperty('opacity', 1 - scrollPercentage * opacitySpeed)
      }
    }

    /********************************
     open/close submenu on mobile
     ********************************/
/*    $('.cd-main-nav').on('click', function (event) {
      if ($(event.target).is('.cd-main-nav')) $(this).children('ul').toggleClass('is-visible');
    });*/
  }
}
</script>

<style scoped>
html * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*, *:after, *:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-size: 100%;
  font-family: "Ubuntu", sans-serif;
  color: #f35535;
  background-color: #2e313d;
}

a {
  text-decoration: none;
}

/* --------------------------------

Modules - reusable parts of our design

-------------------------------- */
.cd-container {
  /* this class is used to give a max-width to the element it is applied to, and center it horizontally when it reaches that max-width */
  width: 90%;
  max-width: 768px;
  margin: 0 auto;
}

.cd-container::after {
  /* clearfix */
  content: '';
  display: table;
  clear: both;
}

/* --------------------------------

Main components

-------------------------------- */
.cd-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #f35535;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  z-index: 3;
}

.cd-header:after {
  content: "";
  display: table;
  clear: both;
}

.cd-header #cd-logo {
  float: left;
  margin: 13px 0 0 5%;
}

.cd-header #cd-logo img {
  display: block;
}

@media only screen and (min-width: 768px) {
  .cd-header {
    height: 70px;
  }

  .cd-header #cd-logo {
    margin: 23px 0 0 5%;
  }
}
/*

.cd-main-nav {
  float: right;
  margin-right: 5%;
  width: 44px;
  height: 100%;
!*  background: url("../../assets/cd-intro-background.jpg") no-repeat center center;*!

  background: url("#") no-repeat center center;
  background-size: 44px 44px;
  cursor: pointer;
}
*/

/*
@media only screen and (min-width: 768px) {
  .cd-main-nav {
    width: auto;
    height: auto;
    background: none;
    cursor: auto;
  }
}
*/

#cd-intro {
  position: relative;
  height: 100vh;
  margin-top: 70px;
}

#cd-intro #cd-intro-background {
  height: 100%;
  width: 100%;

  background: url("../../assets/cd-intro-background.jpg") no-repeat center center;
/*
  background: url("../../upload/pages/home/header_1234567890.jpg") no-repeat center center;
*/

  background-size: cover;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
}

#cd-intro #cd-intro-tagline {
  position: absolute;
  width: 90%;
  /*    max-width: 1170px;*/
  max-width: 2200px;
  left: 50%;
  top: 50%;
  bottom: auto;
  right: auto;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  -o-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

#cd-intro h1 {
  text-transform: uppercase;
  font-size: 24px;
  font-size: 1.5rem;
  text-align: center;
  color: #FFF;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

@media only screen and (min-width: 768px) {
  /*    #cd-intro {
        height: 100vh;
        margin-top: 70px;
      }*/
  #cd-intro h1 {
    font-size: 30px;
    font-size: 1.875rem;
  }
}

/*
@media only screen and (min-width: 1170px) {
  #cd-intro {
    position: fixed;
    /* do not overlap the header */
/*
    top: 70px;
    left: 0;
    width: 100%;
    height: 500px;
    margin-top: 0;
  }
  #cd-intro h1 {
    font-size: 32px;
    font-size: 2rem;
  }
}
*/
.cd-content {
  position: relative;
  padding: 2em 0;
  line-height: 1.6;
  color: #65676f;
  background-color: #f0f1e7;
  z-index: 2;
}

.cd-content::before {
  /* subtle gradient right above the main content */
  content: '';
  position: absolute;
  bottom: 100%;
  left: 0;
  width: 100%;
  height: 50px;
  background: -webkit-linear-gradient(bottom, rgba(46, 49, 61, 0.5), rgba(46, 49, 61, 0));
  background: linear-gradient(to top, rgba(46, 49, 61, 0.5), rgba(46, 49, 61, 0));
}

.no-cssgradients .cd-content::before {
  /* use Modernizr to detect whether the browser supports or not css gradients */
  display: none;
}

.cd-content h2 {
  font-size: 20px;
  font-size: 1.25rem;
}

.cd-content p {
  margin: 1em 0;
}

@media only screen and (min-width: 768px) {
  .cd-content {
    line-height: 1.8;
  }

  .cd-content h2 {
    font-size: 30px;
    font-size: 1.875rem;
  }
}

@media only screen and (min-width: 1170px) {
  .cd-content {
    padding: 4em 0;
    margin-top: 570px;
  }

  .cd-content p {
    font-size: 20px;
    font-size: 1.25rem;
  }
}

</style>
