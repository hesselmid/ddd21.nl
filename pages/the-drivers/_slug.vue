<template>
  <main>
    <div class="flex justify-center md:mt-[42px] xl:mt-[53px]">
      <vue-blotter
        class="inline-block h-[54px] md:hidden"
        family="Haarlem-Regular"
        :size="45"
        material-type="LiquidDistortMaterial"
        :text="driver.name"
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
        :text="driver.name"
        :uniforms="{
          uSpeed: 0.25,
        }"
        :padding-right="40"
        :padding-left="40"
      >
        <h1></h1>
      </vue-blotter>
    </div>
    <div class="xl:grid xl:grid-cols-2 xl:mx-auto xl:mt-[63px] xl:w-[1280px]">
      <div
        class="md:grid md:grid-cols-2 md:mx-auto md:mt-[81px] md:w-[768px] xl:grid-cols-1 xl:mr-0 xl:mt-[-98px] xl:ml-[74px] xl:w-[352px]"
      >
        <picture>
          <source :srcset="driver.image_2.avif" type="image/avif" />
          <source :srcset="driver.image_2.webp" type="image/webp" />
          <source :srcset="driver.image_2.jpg" type="image/jpeg" />
          <img
            class="mx-auto mt-[32px] w-[291px] md:mr-0 md:mt-0 md:ml-[80px] md:w-[352px] xl:ml-0"
            :src="driver.image_2.jpg"
            :alt="driver.name"
            width="704"
            height="1126"
          />
        </picture>

        <div class="md:ml-[88.75px] xl:mt-[39.5px] xl:ml-0">
          <hr
            class="mx-auto mt-[66px] w-[290.5px] border-t border-black md:mx-0 md:mt-0 md:w-[246.75px] xl:w-[352px]"
          />
          <div
            class="flex justify-between mx-auto mt-[23.5px] w-[291px] md:ml-0 md:mt-[21.5px] md:w-[258px] xl:w-[352px]"
          >
            <div>
              <div
                class="text-[16.5px] leading-[20px] md:text-[14.2px] md:leading-[17px] xl:text-[20px] xl:leading-[24px]"
              >
                Website
              </div>
              <div
                class="text-[16.5px] leading-[20px] md:text-[14.2px] md:leading-[17px] xl:text-[20px] xl:leading-[24px]"
              >
                Instagram
              </div>
              <div
                class="text-[16.5px] leading-[20px] md:text-[14.2px] md:leading-[17px] xl:text-[20px] xl:leading-[24px]"
                v-if="driver.social.linkedin"
              >
                LinkedIn
              </div>
              <div
                class="text-[16.5px] leading-[20px] md:text-[14.2px] md:leading-[17px] xl:text-[20px] xl:leading-[24px]"
              >
                E-mail
              </div>
            </div>
            <div class="flex flex-col items-end">
              <a
                class="text-[16.5px] leading-[20px] underline md:text-[14.2px] md:leading-[17px] xl:text-[20px] xl:leading-[24px]"
                :href="driver.social.websiteUrl"
                target="_blank"
                rel="noreferrer noopener"
              >
                {{ driver.social.website }}
              </a>
              <a
                class="text-[16.5px] leading-[20px] underline md:text-[14.2px] md:leading-[17px] xl:text-[20px] xl:leading-[24px]"
                :href="driver.social.instagramUrl"
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                {{ driver.social.instagram }}
              </a>
              <a
                class="text-[16.5px] leading-[20px] underline md:text-[14.2px] md:leading-[17px] xl:text-[20px] xl:leading-[24px]"
                :href="driver.social.linkedinUrl"
                target="_blank"
                rel="nofollow noreferrer noopener"
                v-if="driver.social.linkedin"
              >
                {{ driver.social.linkedin }}
              </a>
              <a
                class="text-[16.5px] leading-[20px] underline md:text-[14.2px] md:leading-[17px] xl:text-[20px] xl:leading-[24px]"
                :href="`mailto:${driver.social.email}`"
              >
                {{ driver.social.email }}
              </a>
            </div>
          </div>
          <hr
            class="mx-auto mt-[23.5px] w-[290.5px] border-t border-black md:mx-0 md:mt-[21.5px] md:w-[246.75px] xl:mt-[29px] xl:w-[352px]"
          />
        </div>
      </div>
      <p
        class="mx-auto mt-[66.5px] w-[291px] text-[16px] leading-[19px] md:mt-[67px] md:w-[613px] md:text-[20px] md:leading-[24px] xl:mr-0 xl:mt-0 xl:ml-[-136px] xl:w-[655px] xl:text-[25px] xl:leading-[30px]"
      >
        {{ driver.intro }}
      </p>
    </div>
    <div
      class="xl:flex xl:overflow-x-auto xl:flex-nowrap xl:gap-x-[60px] xl:px-[62px] xl:mt-[47px]"
    >
      <img
        class="object-cover mx-auto mt-[67px] h-[214px] md:mt-[63px] md:h-[471px] xl:inline xl:flex-shrink-0 xl:mx-0 xl:mt-0"
        :src="image"
        alt=""
        width=""
        height=""
        v-for="image in driver.project_images"
        :key="image"
      />
    </div>
    <div class="xl:grid xl:grid-cols-2 xl:mx-auto xl:mt-[69px] xl:w-[1280px]">
      <div
        class="content mx-auto mt-[67px] w-[291px] md:mt-[39px] md:w-[614px] xl:mr-0 xl:mt-0 xl:ml-[88px] xl:w-[524px]"
        v-html="driver.content_1"
      ></div>
      <div
        class="content mx-auto mt-[19px] w-[291px] md:mt-[24px] md:w-[614px] xl:mr-[87px] xl:mt-0 xl:w-[524px]"
        v-html="driver.content_2"
      ></div>
    </div>
    <div
      style="padding:56.25% 0 0 0;position:relative;"
      class="mx-auto mt-[77px] mb-[67px] w-[291px] h-auto md:mt-[63px] md:mb-[58px] md:w-[614px] xl:mt-[42px] xl:mb-[73px] xl:w-[1156px]"
    >
      <iframe
        :src="
          `https://player.vimeo.com/video/${driver.vimeoId}?h=7fdd86b7ea&color=E7411C`
        "
        style="position:absolute;top:0;left:0;width:100%;height:100%;"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <script src="https://player.vimeo.com/api/player.js"></script>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: this.driver.name + ' - Driving Dutch Design 21',
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
  async asyncData({ $content, params }) {
    const driver = await $content('drivers', params.slug).fetch();
    return { driver };
  },
};
</script>

<style>
.content p {
  margin-top: 19px;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
}

.content p:first-of-type {
  margin-top: 0px;
}

@media (min-width: 768px) {
  .content p {
    margin-top: 24px;
    font-size: 20px;
    line-height: 24px;
  }
}

@media (min-width: 1280px) {
  .content p {
    margin-top: 30px;
    font-size: 25px;
    line-height: 30px;
    text-align: left;
  }
}
</style>
