<template>
  <main class="bg-[#007190]">
    <div
      class="px-[42px] mx-auto max-w-[375px] md:px-[87px] md:w-[768px] md:max-w-none xl:px-[145px] xl:w-[1280px]"
    >
      <h1
        class="mt-[28.4px] text-[45px] leading-[54px] md:text-[50px] md:leading-[61px] md:text-center"
      >
        Driver TV
      </h1>
      <div class="md:flex md:justify-between md:mt-[45px] xl:mt-[163px]">
        <p
          class="mt-[14px] text-[16px] leading-[19px] md:mt-0 md:w-[378px] md:text-[20px] md:leading-[24px] xl:w-[630px] xl:text-[25px] xl:leading-[30px]"
        >
          Meet the Drivers in these portrait videos, aired on DDW TV during
          Dutch Design Week 2012. [Language: Dutch]
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
              href="#"
            >
              Facebook
            </a>
            <a
              class="text-[11px] leading-[13px] underline md:text-[15px] md:leading-[18px] xl:text-[18px] xl:leading-[22px]"
              href="#"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div class="pb-[81.8px] md:pb-[154.6px] xl:pb-[223px]">
        <article
          class="mt-[30px] md:mt-[62px] xl:mt-[142px]"
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
        </article>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        { name: 'I feel systems', videoId: '614471863' },
        { name: 'I feel objects', videoId: '614469590' },
        { name: 'I feel stories', videoId: '614469590' },
      ],
    };
  },
};
</script>
