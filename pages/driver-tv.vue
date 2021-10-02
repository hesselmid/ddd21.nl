<template>
  <main class="md:pb-[17px] xl:pb-[29px]">
    <div
      class="px-[42px] mx-auto mt-[20.6px] max-w-[375px] md:px-[87px] md:mt-[32.1px] md:w-[768px] md:max-w-none xl:px-[145px] xl:mt-[58.5px] xl:w-[1280px]"
    >
      <div
        class="flex justify-center mt-[25px] h-[68px] md:mt-0 md:h-[75px] xl:mt-[27px]"
      >
        <vue-blotter
          class="inline-block h-[45px] md:hidden"
          family="Haarlem-Regular"
          :size="45"
          material-type="LiquidDistortMaterial"
          text="Driver TV"
          :uniforms="{
            uSpeed: 0.25,
          }"
          :padding-right="40"
          :padding-left="40"
        >
          <h1></h1>
        </vue-blotter>
        <vue-blotter
          class="hidden md:inline-block md:h-[61px]"
          family="Haarlem-Regular"
          :size="50"
          material-type="LiquidDistortMaterial"
          text="Driver TV"
          :uniforms="{
            uSpeed: 0.25,
          }"
          :padding-right="60"
          :padding-left="60"
        >
          <h1></h1>
        </vue-blotter>
      </div>
      <div class="md:flex md:justify-between md:mt-[45px] xl:mt-[163px]">
        <p
          class="mt-[14px] text-[16px] leading-[19px] md:mt-0 md:w-[378px] md:text-[20px] md:leading-[24px] xl:w-[630px] xl:text-[25px] xl:leading-[30px]"
        >
          Meet the Drivers in these portrait videos, aired on DDW TV during
          Dutch Design Week 2021.
        </p>
        <div class="mt-[20px] md:mt-0">
          <h2
            class="text-[11px] leading-[13px] md:text-[15px] md:leading-[18px] xl:text-[18px] xl:leading-[22px]"
          >
            Share this artikel
          </h2>
          <div class="flex flex-col mt-[13px] md:mt-[18px] xl:mt-[22px]">
            <a
              class="text-[11px] leading-[13px] underline md:text-[15px] md:leading-[18px] xl:text-[18px] xl:leading-[22px]"
              href="https://www.facebook.com/sharer/sharer.php?u=https://ddd21.netlify.app/driver-tv"
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              Facebook
            </a>
            <a
              class="text-[11px] leading-[13px] underline md:text-[15px] md:leading-[18px] xl:text-[18px] xl:leading-[22px]"
              href="https://www.linkedin.com/shareArticle?mini=true&url=https://ddd21.netlify.app/driver-tv"
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div class="pb-[15px] md:pb-[23px] xl:pb-[61px]">
        <article
          class="mt-[33px] md:mt-[52px] xl:mt-[48px]"
          v-for="video in videos"
          :key="video.videoId"
        >
          <h2
            class="text-[40px] leading-[48px] md:text-[45px] md:leading-[54px]"
          >
            {{ video.name }}
          </h2>
          <div
            style="padding:56.25% 0 0 0;position:relative;"
            class="mt-[13px] w-[291px] h-auto bg-white md:mt-[69px] md:w-[594px] xl:mt-[47px] xl:w-[990px]"
          >
            <iframe
              :src="
                `https://player.vimeo.com/video/${video.videoId}?h=7fdd86b7ea&color=E7411C`
              "
              style="position:absolute;top:0;left:0;width:100%;height:100%;"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <p
            class="mt-[3px] text-[11px] leading-[13px] md:mt-[10px] md:text-[14px] md:leading-[17px] xl:mt-[10px] xl:text-[18px] xl:leading-[22px]"
          >
            {{ video.description }}
          </p>
          <p
            class="mt-[13px] text-[11px] leading-[13px] md:mt-[14px] md:text-[14px] md:leading-[17px] xl:mt-[22px] xl:text-[18px] xl:leading-[22px]"
          >
            {{ video.drivers }}
          </p>
        </article>
      </div>
    </div>
    <div
      id="grey-stroke"
      class="
        mt-[93px]
        h-[47px]
        bg-center bg-no-repeat bg-cover
        md:mt-[89px] md:h-[97px]
        xl:mt-[71px] xl:h-[159px]
      "
    ></div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Driver TV - Driving Dutch Design 2021',
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
      videos: [
        {
          name: 'I see systems',
          videoId: '614471863',
          description:
            'Designers aren’t there to provide answers, but to question the obvious. The designers in ‘I see systems’ give insights in their process, guided by alternative visions of the systems in which we function as humans.',
          drivers:
            'Drivers: Bram de Vos, Thom Bindels, Studio Uncoated, Fides Lapidaire, Studio Tessa Petrusa & Lisa Mandemaker',
        },
        {
          name: 'I hear stories',
          videoId: '614784182',
          description:
            'From extremely practical to purely poetic. In ‘I feel objects’ autonomous- and product designers draw attention to the tangible world around us and the interaction we have with it. The designers show surprising perspectives on materials such as marble, plastic waste and textiles.',
          drivers:
            'Drivers: Rein Reitsma, Jan Willem van Elten, Lola van Praag, Inderjeet Sandhu, Studio Jule Cats & Studio Brundal',
        },
        {
          name: 'I feel objects',
          videoId: '614469590',
          description:
            'Stories are there to be experienced. The designers in ‘I hear stories’  invite you into visual worlds that are not your own. Connect with your surroundings through the visions of Graphic Designers, Illustrators, Filmmakers, and Interior Designers.',
          drivers:
            'Drivers: Studio New West, Asja Keeman, Geert Snijders, Daisy van Loenhout & Djenné Fila',
        },
      ],
    };
  },
};
</script>

<style scoped>
#grey-stroke {
  background-image: url('/images/backgrounds/grey-stroke.png');
}
</style>
