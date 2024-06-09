<template>
  <div class="block-product-card">
    <div
      class="form-shadow block-product-card-little"
      v-for="(itemProductsList, keyProductsList, indexProductsList) in productsList"
      :class="(keyProductsList +1) % 3 !== 0 ? 'odd-item' : '' "
    >
      <NuxtLink class="block-item-card" :to="'/products/' + itemProductsList.slug">
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
    }
  },
  mounted() {
    console.log("!!!!!!!  productsList ==> ", this.productsList)
  },
  methods: {},
}
</script>

<style scoped>
.block-item-card{
  text-decoration: none;
}
.block-product-card-little{
  float: left;
  position: relative;
  width: 32%;
  margin-bottom: 10px;
}
.img-product-card-little{
  width: -webkit-fill-available;
}
.odd-item{
  margin-right: 2%;
}
.title-product-card-little{
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 10px 10px 0 10px;
}
.block-product-card-little:hover{
  box-shadow: 3px -3px 5px  rgba(245,225,68,0.4);
}
.title-product-card-little p{
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #2d3a4b;
  font-size: 1.2rem;
}
</style>
