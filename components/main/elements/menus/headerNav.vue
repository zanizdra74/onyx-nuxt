<template>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav">
      <li class="nav-item">
        <nuxt-link :to="localePath('about-us')" class="nav-link hover-item-a"> {{ $t('pages.aboutUs.title') }}</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link :to="localePath('projects')" class="nav-link hover-item-a"> {{ $t('pages.projects.title') }}</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link :to="localePath('products')" class="nav-link hover-item-a"> {{ $t('pages.products.title') }}</nuxt-link>
      </li>
      <li class="nav-item parent-nested-nav">
        <nuxt-link :to="localePath('information')" class="nav-link hover-item-a">
          {{ $t('pages.info.title') }}
        </nuxt-link>
        <ul class="nested-nav">
          <li class="nav-item nested-nav-item">
            <nuxt-link :to="localePath('articles')" class="nav-link hover-item-a"> {{ $t('pages.articles.title') }}</nuxt-link>
          </li>
          <li class="nav-item nested-nav-item">
            <nuxt-link :to="localePath('certificates')" class="nav-link hover-item-a"> {{ $t('pages.certificates.title') }}</nuxt-link>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <nuxt-link :to="localePath('contacts')" class="nav-link hover-item-a"> {{ $t('pages.contacts.title') }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:[ "itemsNavMenu", ],
  data(){
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
#navbarText{
  display: flex;
  height: 80px;
}
.navbar-nav{
  display: flex;
  align-items: center;
}
.nav-item{
  display: flex;
  align-items: center;
  height: 100%;
}
.nav-link{
  font-size: 1.3rem;
  color: #fff;
  margin: 0 1rem;
}
.parent-nested-nav:hover .nested-nav{
  display: block;
}
.nested-nav {
  display: none;
  position: absolute;
  /*background-color: #2D3A4B;*/
  background-color: rgba(45,	58,	75, 0.5);
  top: 80px;
  /*background: no-repeat url(/_nuxt/assets/image/secondaryHeader.png);*/
}
.nested-nav-item {
  margin: 10px 0;
}
</style>
