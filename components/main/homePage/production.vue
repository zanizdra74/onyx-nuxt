_<template>
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
          <NuxtLink :to="'/products/' + slider.slug" >
            Подробнее ...
          </NuxtLink>
        </div>
      </div>
      <ul id="nav-bottom-slider">
<!--        <li v-for="(itemHomeProduction, indexHomeProduction) in homeProduction" :key="indexHomeProduction"
          class="item-nav-bottom-slider"
          @click="triggerSlider(indexHomeProduction)">
          {{ itemHomeProduction.numberSlider }}
        </li>-->
        <li v-for="(itemHomeProduction, indexHomeProduction) in productions" :key="indexHomeProduction"
            class="item-nav-bottom-slider"
            :class="{ activeÍtemNav :indexHomeProduction === activeIndex }"
            @click="triggerSlider(indexHomeProduction)">
          {{ indexHomeProduction + 1 }}
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
          activeIndex: 0,
          banner: '',
          description: '',
          slug: '#',
          urlImage: '',
          altImage: '',
        },
        productions: [],
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
    async mounted() {
//      this.triggerSlider(0)
      const allProducts = await this.$store.dispatch('products/getProducts')
      this.productions = allProducts.data
      this.triggerSlider(0)
      console.log("productions = ", this.productions)
    },
    methods: {
/*      triggerSlider(index){
        console.log('index==>', index)
        this.slider.banner=this.homeProduction[index].banner
        this.slider.description=this.homeProduction[index].description
        this.slider.urlImage=this.homeProduction[index].urlImage
        this.slider.altImage=this.homeProduction[index].altImage
      }*/
      triggerSlider(index){
        console.log('index==>', index)
        this.activeIndex = index
        this.slider.banner=this.productions[index].title
        this.slider.description=this.productions[index].description.description
        this.slider.slug = this.productions[index].slug
        this.slider.urlImage=require('~/upload/products/' + this.productions[index].images[0])
 //       this.slider.altImage=this.homeProduction[index].altImage
        console.log('slider == ', this.slider)
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
    padding-left: 52%;
    margin-bottom: 30px;
  }
  #section-production h2{
    color: #F5E144;
    margin-bottom: 10px;
  }

  .variable-part-slider {
    display: grid;
    position: relative;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100% 0;
    grid-gap: 5px;
    height: 70%;
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
  .text-description {
/*    text-overflow: ellipsis;
    line-clamp: 3;
    -webkit-line-clamp: 3;*/
  }
  #img-slider {
    /*height: 80%;*/
    margin-right: 30px;
  }
  #img-slider img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  #nav-bottom-slider{
    display: flex;
    justify-content: center;
    margin: 0 auto 0 auto;
    position: relative;
    top: -22px;
    list-style-type: none;
    background-color: #F5E144;
    width: fit-content;
    padding-left: 0;
  }
  .text-description {
    margin-bottom: 10px;
  }
  #text-description a{
    color: #F5E144;
    text-decoration: none;
  }
  .item-nav-bottom-slider{
    text-decoration: none;
    padding: 15px;
    outline: 1px solid #F5E144;
    color: #2D3A4B;
  }
  .item-nav-bottom-slider:hover, .item-nav-bottom-slider:active, .activeÍtemNav{
    background-color: #2D3A4B;
    color: #F5E144;
  }
  @media (max-width: 1200px) {
    #section-production h1{
      font-size: 60px;
    }
  }
  @media (max-width: 800px) {
    #section-production h1 {
      padding-left: 0;
      text-align: center;
    }
    #section-production h1{
      font-size: 40px;
    }
    #img-slider{
      display: none;
    }
    .variable-part-slider{
      display: block;
    }
  }
</style>
