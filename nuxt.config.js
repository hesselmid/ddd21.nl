export default {
  target: 'static',

  head: {
    htmlAttrs: {
      lang: 'nl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    script: [
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/blotter.min.js',
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/materials/liquidDistortMaterial.min.js',
      },
    ],
  },

  plugins: ['~/plugins/vue-blotter.js'],

  components: true,

  buildModules: ['@nuxtjs/google-analytics', '@nuxtjs/tailwindcss'],

  modules: ['@nuxt/content', '@nuxtjs/sitemap'],

  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        preserveLineBreaks: false,
        collapseWhitespace: true,
      },
    },
  },

  googleAnalytics: {
    id: 'UA-208803280-1',
    set: [{ field: 'anonymizeIp', value: true }],
  },

  sitemap: {
    hostname: 'https://www.ddd21.nl/',
  },
};
