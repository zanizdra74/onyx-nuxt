<template>
  <ul id="menu-accordion" class="accordion">
    <li
      class=""
      v-for="(category, indexCategory) in production "
    >
      <ul
        class="category"
        v-if="Array.isArray(category.data)"
      >
        <div
          class="accordion-item accordion-item-first"
          @click="openCategory(category.slug)"
        >
          <p>{{category.title}}</p>
          <font-awesome-icon class="icon-close" :icon="['fas', 'chevron-up']" v-if="slugPage === category.slug" />
          <font-awesome-icon class="icon-open" :icon="['fas', 'chevron-down']" v-else />
        </div>
        <li
          v-for="subcategory in category.data"
        >
          <transition name="fade">
            <div
              class="accordion-item accordion-item-second"
              :class="{activeItemMenu: activeMenu === subcategory.slug}"
              v-if="slugPage === category.slug"
            >
              <ul
                class="subcategory"
                v-if="subcategory.data.length>0"
              >
                <div>
                  {{subcategory.title}}
                  <i class="el-icon-edit"></i>
                </div>
                <li
                  v-for="product in subcategory.data"
                  class="test"
                  :class="{activeItemMenu: activeMenu === product.slug}"
                >
                  <NuxtLink
                    :to="'/products/' + product.slug"

                  >
                    {{product.title}}
                  </NuxtLink>
                </li>
              </ul>
              <NuxtLink
                v-else
                class="nuxt-link"
                :to="'/products/' + subcategory.slug"
              >
                {{subcategory.title}}
              </NuxtLink>
            </div>
          </transition>
        </li>
      </ul>
      <a v-else >{{category.title}}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "sideProductMenu",
  props: ["slugPage", "activeMenu"],

  data() {
    return {
      production: [
        {
          data: [],
          images: [],
          name: '',
          slug: '',
          title: '',
          type: '',
        },
      ],
      showSubCategory: false,
    }
  },
  async mounted() {
    const allProducts = await this.$store.dispatch('products/getProducts')
    this.production = allProducts.data
  },
  methods: {
    openCategory(index){
      if( this.$route.params.name === index){
        this.$router.push({path: '/products'})
      } else {
        this.$router.push({path: '/products/' + index})
      }
    },
  },
}
</script>

<style scoped>
.accordion{
  font-size: 1.2rem;
}
#menu-accordion{
  padding: 50px 15px;
}
#menu-accordion a{
  color: #2d3a4b;
}
.accordion-item{
  padding: 5px 5px 5px 15px;
  border-radius: 3px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
  margin-top: 5px;
}
.activeItemMenu,
.accordion-item:hover{
  box-shadow: 0px 4px 5px #f5e14499;
}
.accordion-item-first{
  display: flex;
  justify-content: space-between;
  background-color: rgba(222,232,233,0.25);
}
.accordion-item a{
  display: block;
  text-decoration: none;
}
.icon-close path{
  fill: rgb(245 225 68);
}
.accordion-item-second{
  padding-left: 30px;
  background-color: #DEE8E9;
}
.accordion-item-third{
  padding-left: 45px;
}
</style>
