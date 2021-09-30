<template>
  <main :style="bgColor" class="overflow-x-hidden md:mb-[38.6px] xl:mb-[79px]">
    <img
      class="w-full pointer-events-none"
      src="/images/backgrounds/white-stroke-top.svg"
    />
    <div
      class="relative mx-auto mt-[30.4px] max-w-[375px] md:mt-[75px] md:w-[768px] md:max-w-none xl:mt-[88.5px] xl:w-[1280px]"
    >
      <img
        class="relative z-10 ml-[23.3px] w-[345.27px] pointer-events-none md:ml-[48.6px] md:w-[707.66px] xl:ml-[95px] xl:w-[1161px]"
        src="/images/logos/logo.png"
        alt="I hear what you're seeing"
        width="2322"
        height="1774"
      />
      <img
        class="absolute top-[-46px] left-[-12.83px] z-20 w-[69.77px] transform rotate-[-95deg] pointer-events-none md:top-[-94.4px] md:left-[-26.3px] md:w-[143px] xl:top-[-158px] xl:left-[-43px] xl:w-[238px]"
        src="/images/elements/eye_1.png"
        alt=""
        width="476"
        height="632"
      />
      <img
        class="absolute top-[-46.1px] left-[270.63px] w-[56.08px] transform rotate-[128deg] pointer-events-none md:top-[-94.5px] md:left-[554.67px] md:w-[114.93px] xl:top-[-158.4px] xl:left-[923.61px] xl:w-[191.29px]"
        src="/images/elements/eye_2.png"
        alt=""
        width="383"
        height="534"
      />
      <img
        class="absolute top-[81.3px] left-[265.4px] w-[51.7px] transform rotate-[-89deg] pointer-events-none md:top-[166.6px] md:left-[543.95px] md:w-[105.96px] xl:top-[276.4px] xl:left-[905.94px] xl:w-[176.35px]"
        src="/images/elements/eye_3.png"
        alt=""
        width="353"
        height="487"
      />
      <img
        class="absolute top-[54.7px] left-[344.63px] w-[79px] transform rotate-[-108deg] pointer-events-none md:top-[112px] md:left-[706.34px] md:w-[161.92px] xl:top-[185.4px] xl:left-[1175.89px] xl:w-[270px]"
        src="/images/elements/eye_4.png"
        alt=""
        width="540"
        height="1212"
      />
      <img
        class="absolute top-[135.5px] left-[-31.66px] w-[117.88px] transform rotate-[87deg] pointer-events-none md:top-[277.8px] md:left-[-64.88px] md:w-[241.6px] xl:top-[461.6px] xl:left-[-107.35px] xl:w-[402.13px]"
        src="/images/elements/eye_5.png"
        alt=""
        width="805"
        height="834"
      />
      <img
        class="absolute top-[241.4px] left-[7.89px] w-[44.93px] transform rotate-[-90deg] pointer-events-none md:top-[494.8px] md:left-[16.17px] md:w-[92.09px] xl:top-[822.7px] xl:left-[27.56px] xl:w-[153.27px]"
        src="/images/elements/eye_6.png"
        alt=""
        width="307"
        height="362"
      />
      <img
        class="absolute top-[212.13px] left-[261.63px] w-[100.4px] transform rotate-[176deg] pointer-events-none md:top-[434.77px] md:left-[536.22px] md:w-[205.78px] xl:top-[722.79px] xl:left-[893.09px] xl:w-[342.48px]"
        src="/images/elements/eye_7.png"
        alt=""
        width="685"
        height="736"
      />
      <img
        class="absolute top-[313.36px] left-[45.58px] w-[67.61px] transform rotate-[90deg] pointer-events-none md:top-[587.19px] md:left-[93.42px] md:w-[138.56px] xl:top-[976px] xl:left-[156px] xl:w-[231px]"
        src="/images/elements/eye_8.png"
        alt=""
        width="462"
        height="1362"
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
          class="w-[7px] h-[7px] bg-white border border-black rounded-full md:w-[14px] md:h-[13px] xl:w-[23px] xl:h-[23px]"
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
      class="mt-[23.7px] w-full pointer-events-none md:mt-[22px] xl:mt-[62px]"
      src="/images/backgrounds/white-stroke-bottom.svg"
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
            'An exhibition of 17 design studios that listen to see the world. Peek and peer through the grey areas into a world of wonder, beauty and questions.',
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
            'From extremely practical to purely poetic. In<br /> ‘I feel objects’ autonomous- and product designers draw attention to the tangible world around us and the interaction we have with it. The designers show surprising perspectives on materials such as marble, plastic waste and textiles.',
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
        return 'background-color:#B5DECB';
      } else if (this.carouselIndex === 2) {
        return 'background-color:#FBDC00';
      } else if (this.carouselIndex === 3) {
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
