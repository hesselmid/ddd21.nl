<template>
  <main>
    <div class="flex justify-center md:mt-[42px]">
      <vue-blotter
        class="inline-block h-[54px] md:hidden"
        :size="45"
        material-type="LiquidDistortMaterial"
        text="Asja Keepman"
        :uniforms="{
          uSpeed: 0.25,
        }"
      >
        <h1></h1>
      </vue-blotter>
      <vue-blotter
        class="hidden md:inline-block md:h-[61px]"
        :size="50"
        material-type="LiquidDistortMaterial"
        text="Asja Keepman"
        :uniforms="{
          uSpeed: 0.25,
        }"
      >
        <h1></h1>
      </vue-blotter>
    </div>
    <div class="md:grid md:grid-cols-2 md:mx-auto md:mt-[81px] md:w-[768px]">
      <img
        class="mx-auto mt-[32px] w-[291px] md:mx-0 md:mt-0 md:ml-[80px] md:w-[352px]"
        src="/images/fotografie/asja-keepman-2.jpg"
        alt="Asja Keepman"
        width=""
        height=""
      />
      <div class="md:ml-[88.75px]">
        <hr
          class="mx-auto mt-[66px] w-[290.5px] md:mx-0 md:mt-0 md:w-[246.75px]"
        />
        <p
          class="mx-auto mt-[20px] w-[291px] leading-[19px] md:mx-0 md:mt-[20px] md:w-[246.75px] md:text-[20px] md:leading-[24px]"
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, labore et
          anim, adipiscing consectetur officia ut et velit quis nostrud. Ea ut
          et ut id exercitation dolore aute cillum
        </p>
        <hr
          class="mx-auto mt-[30px] w-[290.5px] md:mx-0 md:mt-[20px] md:w-[246.75px]"
        />
      </div>
    </div>
    <p
      class="mx-auto mt-[66.5px] w-[291px] leading-[19px] md:mt-[67px] md:w-[613px] md:text-[20px] md:leading-[24px]"
    >
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, labore et anim,
      adipiscing consectetur officia ut et velit quis nostrud. Ea ut et ut id
      exercitation dolore aute cillum aliquip veniam adipiscing sint mollit
      reprehenderit ullamco proident esse sint esse dolore exercitation do
      commodo labore magna minim occaecat.
    </p>
    <img
      class="object-cover mx-auto mt-[67px] w-[291px] h-[214px] md:mt-[63px] md:w-[614px] md:h-[471px]"
      src="https://source.unsplash.com/random"
      alt=""
      width=""
      height=""
    />
    <div class="mx-auto mt-[67px] w-[291px] md:mt-[39px] md:w-[614px]">
      <p class="leading-[19px] text-center md:text-[20px] md:leading-[24px]">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, labore et
        anim, adipiscing consectetur officia ut et velit quis nostrud. Ea ut et
        ut id exercitation
      </p>
      <p
        class="mt-[19px] leading-[19px] text-center md:mt-[24px] md:text-[20px] md:leading-[24px]"
      >
        dolore aute cillum aliquip veniam adipiscing sint mollit reprehenderit
        consequat labore sit labore excepteur esse consequat exercitation ut ex
        ullamco pariatur exercitation esse proident occaecat laboris occaecat
        nulla anim consectetur et dolor ad amet minim dolore amet excepteur
        dolore ullamco exercitation cillum anim. Amet
      </p>
      <p
        class="mt-[19px] leading-[19px] text-center md:mt-[24px md:text-[20px] md:leading-[24px]"
      >
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, labore et
        anim, adipiscing consectetur officia ut et velit quis nostrud. Ea ut et
        ut id exercitation
      </p>
      <p
        class="mt-[19px] leading-[19px] text-center md:mt-[24px md:text-[20px] md:leading-[24px]"
      >
        dolore aute cillum aliquip veniam adipiscing sint mollit reprehenderit
        consequat labore sit labore excepteur esse consequat exercitation ut ex
        ullamco pariatur exercitation esse proident occaecat laboris occaecat
        nulla anim consectetur et dolor ad amet minim dolore amet excepteur
        dolore ullamco exercitation cillum anim. Amet
      </p>
    </div>
    <img
      class="object-cover mx-auto mt-[77px] mb-[67px] w-[291px] h-[172px] md:mt-[63px] md:mb-[58px] md:w-[614px] md:h-[317px]"
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
