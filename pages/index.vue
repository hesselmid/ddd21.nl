<template>
  <main :style="bgColor" class="md:mb-[38.6px] xl:mb-[79px]">
    <img
      class="mt-[13px] w-full pointer-events-none md:mt-[31.7px] xl:mt-[-6.27px]"
      src="/images/backgrounds/white-stroke-top.png"
      alt=""
      width="1280"
      height="78"
    />
    <div
      class="mx-auto mt-[17.4px] max-w-[375px] md:mt-[42.4px] md:w-[768px] md:max-w-none xl:mt-[93.4px] xl:w-[1280px]"
    >
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
            class="absolute top-[10.9px] left-[110px] text-[17px] leading-[20px] md:top-[49.2px] md:left-[234.9px] md:text-[22px] md:leading-[27px] xl:top-[63.7px] xl:left-[401px] xl:text-[32px] xl:leading-[38px]"
          >
            {{ carouselItem.title }}
          </h2>
          <p
            class="absolute top-[43.9px] left-[56px] w-[196px] text-[10px] leading-[13px] text-center md:top-[94.2px] md:left-[105.9px] md:w-[363px] md:text-[16px] md:leading-[19px] xl:top-[153.7px] xl:left-[193px] xl:w-[605px] xl:text-[28px] xl:leading-[34px]"
            v-html="carouselItem.description"
          ></p>
        </div>
      </div>
      <div
        class="flex justify-between mt-[8.8px] ml-[173px] w-[53px] md:mt-[26.1px] md:ml-[369px] md:w-[108px] xl:mt-[35px] xl:ml-[566px] xl:w-[210px]"
      >
        <div
          class="w-[7px] h-[7px] bg-white border border-black rounded-full md:w-[14px] md:h-[13px] xl:w-[27px] xl:h-[27px]"
          :class="{
            'bg-black': carouselIndex === index,
          }"
          v-for="(carouselItem, index) in carouselItems"
          :key="carouselItem.title"
          @click="changecarouselIndex(index)"
        ></div>
      </div>
    </div>
    <img
      class="mt-[7px] w-full md:mt-[32.7px] xl:mt-[63px]"
      src="/images/backgrounds/white-stroke-bottom.png"
      alt=""
      width="1280"
      height="48"
    />
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
          title: 'About the Expo',
          description:
            'An exhibition of 17 design studios that listen to see the world. Peek and peer through the grey areas into a world of wonder, beauty and questions. Discover the ideas and visions that lie beyond the first glance through the themes; I see systems, I hear stories and I feel objects.',
        },
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
    }, 10000);
  },
};
</script>

<style scoped>
#cloud {
  background-image: url(/images/backgrounds/white-bg-home.svg);
}
</style>
