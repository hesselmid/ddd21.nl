<template>
  <main :style="bgColor">
    <div class="mx-auto max-w-[375px] md:w-[768px] md:max-w-none xl:w-[1280px]">
      <img
        class="ml-[23.3px] w-[345.27px] md:ml-[48.6px] md:w-[707.66px] xl:ml-[95px] xl:w-[1161px]"
        src="/images/logos/logo.png"
        alt="I hear what you're seeing"
        width="2322"
        height="1774"
      />
    </div>
    <div
      class="mx-auto mt-[15.3px] max-w-[375px] md:w-[768px] md:max-w-none xl:w-[1280px]"
    >
      <div
        id="cloud"
        class="relative ml-[48px] w-[280.99px] h-[154.12px] bg-center bg-no-repeat bg-cover md:mt-[49px] md:ml-[131.1px] md:w-[542.74px] md:h-[283.12px] xl:mt-[72.3px] xl:ml-[187px] xl:w-[906.09px] xl:h-[472.66px]"
      >
        <div
          :class="{
            block: carouselIndex === index,
            hidden: carouselIndex != index,
          }"
          v-for="(carouselItem, index) in carouselItems"
          :key="carouselItem.title"
        >
          <h2
            class="absolute top-[5px] left-[95px] text-[17px] leading-[20px] text-center md:top-[20.2px] md:left-[231.9px] md:text-[22px] md:leading-[27px] xl:top-[31.7px] xl:left-[360px] xl:text-[32px] xl:leading-[38px]"
          >
            {{ carouselItem.title }}
          </h2>
          <p
            class="absolute top-[32.9px] left-[50px] text-[8px] leading-[10px] text-center md:top-[62.2px] md:left-[109.9px] md:text-[14px] md:leading-[17px] xl:top-[94.7px] xl:left-[177px] xl:text-[22px] xl:leading-[27px]"
            v-html="carouselItem.description"
          ></p>
        </div>
      </div>
      <div
        class="flex justify-between mt-[6.8px] ml-[169px] w-[93px] md:mt-[22.1px] md:ml-[343px] md:w-[166px] xl:mt-[35px] xl:ml-[566px] xl:w-[210px]"
      >
        <div
          class="w-[12px] h-[11px] bg-white border border-black rounded-full md:w-[21px] md:h-[21px] xl:w-[27px] xl:h-[27px]"
          :class="{
            'bg-black': carouselIndex === index,
          }"
          v-for="(carouselItem, index) in carouselItems"
          :key="carouselItem.title"
          @click="changecarouselIndex(index)"
        ></div>
      </div>
    </div>
  </main>
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
  data() {
    return {
      carouselIndex: 0,
      carouselItems: [
        {
          title: 'I feel objects',
          description:
            'From extremely practical to purely poetic. In ‘I feel objects’ autonomous- and product designers draw attention to the tangible world around us and the interaction we have with it. The designers show surprising perspectives on materials such as marble, plastic waste and textiles.',
        },
        {
          title: 'I hear stories',
          description:
            'Stories are there to be experienced. The designers in ‘I hear stories’  invite you into visual worlds that are not your own. Connect with your surroundings through the visions of Graphic Designers, Illustrators, Filmmakers, and Interior Designers.',
        },
        {
          title: 'I see systems',
          description: `Designers aren't there to provide answers, but to question the obvious. The designers in ‘I see systems’ give insights in their process, guided by alternative visions of the systems in which we function as humans.`,
        },
      ],
    };
  },
  computed: {
    bgColor() {
      if (this.carouselIndex === 0) {
        return 'background-color:#B5DECB';
      } else if (this.carouselIndex === 1) {
        return 'background-color:#FBDC00';
      } else if (this.carouselIndex === 2) {
        return 'background-color:#007190';
      } else return;
    },
  },
  methods: {
    changecarouselIndex(index) {
      this.carouselIndex = index;
    },
  },
  mounted() {
    setInterval(() => {
      if (this.carouselIndex >= 2) {
        this.carouselIndex = 0;
      } else this.carouselIndex++;
    }, 5000);
  },
};
</script>

<style scoped>
#cloud {
  background-image: url(/images/backgrounds/white-bg-home.svg);
}
</style>
