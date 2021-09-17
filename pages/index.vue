<template>
  <main id="body" class="h-[531.55px] bg-no-repeat bg-cover"></main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Driving Dutch Design 21',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'The amazing Nuxt application that teaches me all the cool features of Nuxt',
        },
      ],
    };
  },
};
</script>

<style scoped>
#body {
  background-image: url(/images/backgrounds/grey-bg-xl.jpg);
}
</style>
