<template>
  <div>
    <mobile-menu v-show="menuVisible" />
    <the-header />
    <nuxt />
    <the-footer />
  </div>
</template>

<script>
export default {
  computed: {
    menuVisible() {
      return this.$store.state.menuVisible;
    },
  },
};
</script>
