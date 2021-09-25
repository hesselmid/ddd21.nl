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
            class="mx-auto mt-[66px] w-[290.5px] md:mx-0 md:mt-0 md:w-[246.75px] xl:w-[352px]"
          />
          <p
            class="mx-auto mt-[20px] w-[291px] text-[16px] leading-[19px] md:mx-0 md:mt-[20px] md:w-[246.75px] md:text-[20px] md:leading-[24px] xl:mt-[20.5px] xl:w-[352px] xl:text-[25px] xl:leading-[30px]"
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, labore et
            anim, adipiscing consectetur officia ut et velit quis nostrud. Ea ut
            et ut id exercitation dolore aute cillum
          </p>
          <hr
            class="mx-auto mt-[30px] w-[290.5px] md:mx-0 md:mt-[20px] md:w-[246.75px] xl:mt-[29px] xl:w-[352px]"
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
        class="mx-auto mt-[67px] w-[291px] md:mt-[39px] md:w-[614px] xl:mr-0 xl:mt-0 xl:ml-[88px] xl:w-[524px]"
      >
        <p
          class="text-[16px] leading-[19px] text-center md:text-[20px] md:leading-[24px] xl:text-[25px] xl:leading-[30px] xl:text-left"
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, labore et
          anim, adipiscing consectetur officia ut et velit quis nostrud. Ea ut
          et ut id exercitation
        </p>
        <p
          class="mt-[19px] text-[16px] leading-[19px] text-center md:mt-[24px] md:text-[20px] md:leading-[24px] xl:mt-[30px] xl:text-[25px] xl:leading-[30px] xl:text-left"
        >
          dolore aute cillum aliquip veniam adipiscing sint mollit reprehenderit
          consequat labore sit labore excepteur esse consequat exercitation ut
          ex ullamco pariatur exercitation esse proident occaecat laboris
          occaecat nulla anim consectetur et dolor ad amet minim dolore amet
          excepteur dolore ullamco exercitation cillum anim. Amet
        </p>
        <p
          class="mt-[19px] text-[16px] leading-[19px] text-center md:mt-[24px md:text-[20px] md:leading-[24px] xl:mt-[30px] xl:text-[25px] xl:leading-[30px] xl:text-left"
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, labore et
          anim, adipiscing consectetur officia ut et velit quis nostrud. Ea ut
          et ut id exercitation
        </p>
        <p
          class="mt-[19px] text-[16px] leading-[19px] text-center md:mt-[24px md:text-[20px] md:leading-[24px] xl:mt-[30px] xl:text-[25px] xl:leading-[30px] xl:text-left"
        >
          dolore aute cillum aliquip veniam adipiscing sint mollit reprehenderit
          consequat labore sit labore excepteur esse consequat exercitation ut
          ex ullamco pariatur exercitation esse proident occaecat laboris
          occaecat nulla anim consectetur et dolor ad amet minim dolore amet
          excepteur dolore ullamco exercitation cillum anim. Amet
        </p>
      </div>
      <div
        class="mx-auto mt-[19px] w-[291px] md:mt-[24px] md:w-[614px] xl:mr-[87px] xl:mt-0 xl:w-[524px]"
      >
        <p
          class="text-[16px] leading-[19px] text-center md:text-[20px] md:leading-[24px] xl:text-[25px] xl:leading-[30px] xl:text-left"
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, labore et
          anim, adipiscing consectetur officia ut et velit quis nostrud. Ea ut
          et ut id exercitation
        </p>
        <p
          class="mt-[19px] text-[16px] leading-[19px] text-center md:mt-[24px] md:text-[20px] md:leading-[24px] xl:mt-[30px] xl:text-[25px] xl:leading-[30px] xl:text-left"
        >
          dolore aute cillum aliquip veniam adipiscing sint mollit reprehenderit
          consequat labore sit labore excepteur esse consequat exercitation ut
          ex ullamco pariatur exercitation esse proident occaecat laboris
          occaecat nulla anim consectetur et dolor ad amet minim dolore amet
          excepteur dolore ullamco exercitation cillum anim. Amet
        </p>
        <p
          class="mt-[19px] text-[16px] leading-[19px] text-center md:mt-[24px md:text-[20px] md:leading-[24px] xl:mt-[30px] xl:text-[25px] xl:leading-[30px] xl:text-left"
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, labore et
          anim, adipiscing consectetur officia ut et velit quis nostrud. Ea ut
          et ut id exercitation
        </p>
        <p
          class="mt-[19px] text-[16px] leading-[19px] text-center md:mt-[24px md:text-[20px] md:leading-[24px] xl:mt-[30px] xl:text-[25px] xl:leading-[30px] xl:text-left"
        >
          dolore aute cillum aliquip veniam adipiscing sint mollit reprehenderit
          consequat labore sit labore excepteur esse consequat exercitation ut
          ex ullamco pariatur exercitation esse proident occaecat laboris
          occaecat nulla anim consectetur et dolor ad amet minim dolore amet
          excepteur dolore ullamco exercitation cillum anim. Amet
        </p>
      </div>
    </div>
    <img
      class="object-cover mx-auto mt-[77px] mb-[67px] w-[291px] h-[172px] md:mt-[63px] md:mb-[58px] md:w-[614px] md:h-[317px] xl:mt-[42px] xl:mb-[73px] xl:w-[1156px] xl:h-[596px]"
      src="https://source.unsplash.com/random"
      alt=""
      width=""
      height=""
    />
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
