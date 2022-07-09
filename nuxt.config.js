export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'kemary webapp',
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      {
        src:
          'https://analytics.jlosch.de/js/plausible.js',
          defer: true,
          'data-domain': "test.kemary.de"
      },

    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  ssr: false,
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BASE_URL === undefined ? 'https://test.kemary.de/api' : process.env.BASE_URL
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'https://test.kemary.de/api'
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
