<template>
  <div class="block-product-card">
    <div
      class="form-shadow block-product-card-little"
      v-for="(itemProductsList, keyProductsList, indexProductsList) in productsList"
      :class="keyProductsList % 2 === 0 ? 'odd-item' : '' "
    >
      <NuxtLink :to="'/products/' + itemProductsList.slug">
        <img class="img-product-card-little" :src="require('~/upload/products/' + itemProductsList.images[0])">
        <div class="title-product-card-little"><p>{{itemProductsList.title}}</p></div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "productsList",
  props: ["productsList", ],
  data(){
    return {
//      products: []
    }
  },
  mounted() {
    console.log("!!!!!!!  productsList ==> ", this.productsList)
/*    this.products = this.productsList.map(el => {
      const img = '~/upload/products/4853055417_w640_h640_4853055417.webp';
      return {
        title: el.title,
//      src: require(el.images[0]),
//        src: require(String(img)),
 //                       ~/upload/products/4853055417_w640_h640_4853055417.webp
        src: require('~/upload/products/4853055417_w640_h640_4853055417.webp'),
      }
    })*/
 //   console.log ('this.products = ', this.products)

  },
  methods: {
/*    pushToProduct(itemProductsList){
      switch (itemProductsList.type){
        case 'product':
          this.$router.push({path: '/products/' + index})
          break
      }
      if(itemProductsList.type === 'product'){

      } else {

      }
    },*/
  },
}
</script>

<style scoped>
/*.block-product-card{
  display: flex;
}*/
.block-product-card-little{
  float: left;
  position: relative;
  width: 49%;
  margin-bottom: 10px;
}
.img-product-card-little{
  width: -webkit-fill-available;
}
.odd-item{
  margin-right: 2%;
}
.title-product-card-little{
  min-height: 30px;
  padding: 10px;
}
.block-product-card-little:hover{
  box-shadow: 3px -3px 5px  rgba(245,225,68,0.4);
}
.title-product-card-little p{
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
</style>
