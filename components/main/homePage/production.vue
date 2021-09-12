<template>
  <section id="section-production" class="section-main">
    <h1>Продукция</h1>
    <div id="container-slider-production" >
      <div class="variable-part-slider">
        <div id="img-slider">
          <img :src="slider.urlImage" alt="">
        </div>
        <div id="text-description" class="description-slider text-section-near-right-nav" style="color: #F5E144;">
          <h2 v-html="slider.banner"></h2>
          <div class="dark-page-text text-description">
              {{ slider.description }}
          </div>
          <a href="#" style="color: inherit;">Подробнее ...</a>
        </div>
      </div>
      <ul id="nav-bottom-slider">
        <li v-for="(itemHomeProduction, indexHomeProduction) in homeProduction" :key="indexHomeProduction"
          class="item-nav-bottom-slider"
          @click="triggerSlider(indexHomeProduction)">
          {{ itemHomeProduction.numberSlider }}
        </li>
      </ul>
    </div>
    <div id=""></div>
  </section>
</template>

<script>
  export default {
    name: "production",
    data() {
      return{
        slider: {
          banner: '',
          description: '',
          urlImage: '',
          altImage: '',
        },
        homeProduction: [
          {
            name: 'oven',
            numberSlider: 0,
            urlPage: '',
            banner: 'Печи<br>Полимеризации',
            description: 'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.',
            urlImage: require('~/assets/image/homePage/production/polymerizationFurnaces.jpg'),
            altImage: '',
          },
          {
            name: 'spray',
            numberSlider: 1,
            urlPage: '',
            banner: 'Электротехнические<br> шкафы',
            description: 'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.',
            urlImage: require('~/assets/image/homePage/production/transportSystems.jpg'),
            altImage: '',
          },
          {
            name: 'spray-2',
            numberSlider: 2,
            urlPage: '',
            banner: 'Телекоммуникационное<br> оборудование',
            description: 'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.',
            urlImage: require('~/assets/image/homePage/production/polymerizationFurnaces.jpg'),
            altImage: '',
          },
          {
            name: 'spray-3',
            numberSlider: 3,
            urlPage: '',
            banner: 'Корпусные и<br> другие металлоизделия',
            description: 'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.',
            urlImage: require('~/assets/image/homePage/production/transportSystems.jpg'),
            altImage: '',
          },
          {
            name: 'welding',
            numberSlider: 4,
            urlPage: '',
            banner: 'Cварочное<br> оборудование.',
            description: 'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.',
            urlImage: require('~/assets/image/homePage/production/polymerizationFurnaces.jpg'),
            altImage: '',
          },
        ],
      }
    },
    props: {

    },
    mounted() {
      this.triggerSlider(0)
    },
    methods: {
      triggerSlider(index){
        console.log('index==>', index)
        this.slider.banner=this.homeProduction[index].banner
        this.slider.description=this.homeProduction[index].description
        this.slider.urlImage=this.homeProduction[index].urlImage
        this.slider.altImage=this.homeProduction[index].altImage

      }
    }
  }
</script>

<style scoped>
  #section-production{
    display: flex;
    flex-direction: column;
  }
  #section-production, #container-slider-production, .variable-part-slider{
    height: 100%;
  }

  #section-production h1{
    text-align: right;
    margin-bottom: 30px;
    /*
    color: rgba(245, 225, 68, 0.1);
     */
  }
  #section-production h2{
    color: #F5E144;
  }

  .variable-part-slider {
    display: grid;
    position: relative;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100% 0;
    grid-gap: 5px;
    height: 80%;
  }
  .description-slider{
    display: flex;
    flex-direction: column;
    height: 80%;
  }
  #text-description {
    height: 100%;
    margin-left: 30px;
  }
  #img-slider {
    height: 80%;
    margin-right: 30px;
  }
  #img-slider img{
    width: 100%;
  }
  #nav-bottom-slider{
    display: flex;
    justify-content: center;
    margin: 0 auto 0 auto;
    position: relative;
    top: -49px;
    list-style-type: none;
    background-color: #F5E144;
    width: fit-content;
    padding-left: 0;
  }
  .item-nav-bottom-slider{
    text-decoration: none;
    padding: 15px;
    outline: 1px solid #F5E144;
    color: #2D3A4B;
  }
  .item-nav-bottom-slider:hover, .item-nav-bottom-slider:active{
    background-color: #2D3A4B;
    color: #F5E144;
  }

</style>
