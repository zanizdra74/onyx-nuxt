
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_nameNew || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '@/assets/css/index.css',
    '@/assets/css/admin.css',
  ],
  plugins: [
    '@/plugins/globals'
  ],
  buildModules: [
  ],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['nuxt-modernizr',{
      'feature-detects': ['css/scrollbars', 'css/overflow-scrolling'],
        options: ['setClasses'],
    }],
  ],
  axios: {
  },
  build: {
    transpile: [/^element-ui/],
    extend (config, ctx) {
    }
  }
};
