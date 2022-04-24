<template>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav">
      <li class="nav-item">
        <nuxt-link :to="localePath('about-us')" class="nav-link hover-item-a"> {{ $t('adminPages.aboutUs.title') }}</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link :to="localePath('projects')" class="nav-link hover-item-a"> {{ $t('adminPages.projects.title') }}</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link :to="localePath('products')" class="nav-link hover-item-a"> {{ $t('adminPages.products.title') }}</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link :to="localePath('articles')" class="nav-link hover-item-a"> {{ $t('adminPages.articles.title') }}</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link :to="localePath('contacts')" class="nav-link hover-item-a"> {{ $t('adminPages.contacts.title') }}</nuxt-link>
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
}
</script>

<style scoped>
.navbar-nav{
  display: flex;
  align-items: center;
}
.nav-link{
  font-size: 1.3rem;
  color: #fff;
  margin: 0 1rem;
}
</style>
