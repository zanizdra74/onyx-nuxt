<template>
  <div id="container-slider">
    <div id="container-slider-production" >
      <div class="variable-part-slider">
        <div id="img-slider">
          <img :src="require('~/upload/products/' + slide.urlImage)" alt="">
        </div>
      </div>
      <ul id="nav-bottom-slider">
        <li v-for="(itemImages, indexImages) in productData.images" :key="indexImages"
            class="item-nav-bottom-slider"
            :class="{activeÍtemNav :indexImages === slide.index}"
            @click="triggerSlider(indexImages)">
          {{ indexImages + 1}}
        </li>
      </ul>
    </div>
<!--    <div id="preview-images">

    </div>-->
  </div>
</template>

<script>
export default {
  name: "productSlider",
  props: ["productData", ],
  data(){
    return {
      slide: {
        urlImage: '',
        altImage: '',
        index: 0,
      },
      homeProduction: [],
    }
  },
  created() {
    this.slide.urlImage=this.productData.images[0]
  },
  methods: {
    triggerSlider(index){
      this.slide.urlImage=this.productData.images[index]
      this.slide.index=index
//     this.slider.altImage=this.productData[index].altImage
    }
  }
}
</script>

<style scoped>
#container-slider{
  display: flex;
}
#container-slider > * {
  flex-grow: 1;
  flex-basis: 250px;
}
#container-slider-production{
  flex-grow: 1;
  flex-basis: 250px;
}
#img-slider{
  height: 65vh;
}
#img-slider img{
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 5px;
}
#nav-bottom-slider{
  display: flex;
  justify-content: center;
  margin: 0 auto 0 auto;
  position: relative;
  top: -22px;
  list-style-type: none;
  width: -moz-fit-content;
  width: fit-content;
  padding-left: 0;
}

#nav-bottom-slider li {
  text-decoration: none;
  padding: 15px;
  background-color: #F5E144;
  outline: 1px solid #2D3A4B;
  color: #2D3A4B;
}
#nav-bottom-slider li:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
#nav-bottom-slider li:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
#nav-bottom-slider li:hover, #nav-bottom-slider li:active,
#nav-bottom-slider .activeÍtemNav{
  background-color: #2D3A4B;
  color: #F5E144;
}
</style>
