<template>
  <main>
    <div class="mx-auto max-w-[375px] md:w-[768px] md:max-w-none xl:w-[1280px]">
      <h1
        class="
          mt-[27px]
          ml-[44px]
          text-[40px]
          leading-[48px]
          md:mt-[69px] md:ml-[77px] md:text-[45px] md:leading-[54px]
          xl:mt-[129px] xl:ml-[101px] xl:text-[50px] xl:leading-[61px]
        "
      >
        Contact
      </h1>
      <div
        class="
          mt-[27px]
          mr-[50px]
          ml-[34px]
          md:mt-[48px] md:mr-[48px] md:ml-[77px]
          xl:mt-[42px] xl:mr-auto xl:ml-[101px] xl:w-[1078px]
        "
      >
        <h2
          class="
            text-[24px]
            leading-[29px]
            md:text-[30px] md:leading-[37px]
            xl:text-[35px] xl:leading-[42px]
          "
        >
          Want to get in touch?
        </h2>
        <p
          class="
            mt-[19px]
            text-[16x]
            leading-[19px]
            md:text-[22px] md:leading-[27px]
            xl:text-[25px] xl:leading-[30px]
          "
        >
          For press, partner or sponsorship enquires please contact us at
          <a class="underline" href="mailto:info@ddd21.nl">info@ddd21.nl</a>
        </p>
        <p
          class="
            mt-[19px]
            text-[16x]
            leading-[19px]
            md:mt-[29px] md:text-[22px] md:leading-[27px]
            xl;mt-[30px]
            xl:text-[25px] xl:leading-[30px]
          "
        >
          connect with us on
          <a
            class="underline"
            href="https://www.linkedin.com/in/driving-dutch-design-2a9b141b1/"
            target="_blank"
            rel="nofollow noreferrer noopener"
          >
            LinkedIn
          </a>
          ,
          <a
            class="underline"
            href="https://www.instagram.com/drivingdutchdesign/"
            target="_blank"
            rel="nofollow noreferrer noopener"
          >
            Instagram
          </a>
          or
          <a
            class="underline"
            href="https://www.facebook.com/DrivingDutchDesign"
            target="_blank"
            rel="nofollow noreferrer noopener"
          >
            Facebook
          </a>
        </p>
        <p
          class="
            mt-[19px]
            text-[16x]
            leading-[19px]
            md:text-[22px] md:leading-[27px]
            xl:mt-[30px] xl:text-[25px] xl:leading-[30px]
          "
        >
          Or get in touch with a driver directly:
          <a
            class="
              block
              text-[24px]
              leading-[29px]
              underline
              md:text-[30px] md:leading-[37px]
              xl:text-[35px] xl:leading-[42px]
            "
            href="/the-drivers"
          >
            Meet the Drivers
          </a>
        </p>
        <p
          class="
            mt-[19px]
            text-[16x]
            leading-[19px]
            md:text-[22px] md:leading-[27px]
            xl:text-[25px] xl:leading-[30px]
          "
        >
          Feeling inspired and want to know more about the program?
        </p>
        <p
          class="
            text-[13px]
            leading-[15px]
            md:text-[18px] md:leading-[22px]
            xl:text-[21px] xl:leading-[25px]
          "
        >
          Driving Dutch Design (DDD) is a professionalization and networking
          program of ABN AMRO, the Association of Dutch Designers (BNO) and the
          Dutch Design Foundation (DDF) that helps passionate designers on their
          way in the world of creative entrepreneurship.
        </p>
        <a
          class="
            block
            text-[24px]
            leading-[29px]
            underline
            md:text-[30px] md:leading-[37px]
            xl:text-[35px] xl:leading-[42px]
          "
          href="https://drivingdutchdesign.nl/"
          target="_blank"
          rel="nofollow noreferrer noopener"
        >
          drivingdutchdesign.nl
        </a>
        <a
          class="
            inline-block
            mt-[29px]
            text-[24px]
            leading-[29px
            underline
            md:text-[30px] md:leading-[37px]
            xl:text-[35px] xl:leading-[42px]
          "
          href="https://drive.google.com/drive/folders/1Ry5IT0vcsEr_horXjMDsKXfBPsglOQ34?usp=sharing"
        >
          Pressfolder
        </a>
        <h2
          class="
            mt-[29px]
            text-[24px]
            leading-[29px]
            md:text-[30px] md:leading-[37px]
            xl:text-[35px] xl:leading-[42px]
          "
        >
          Colophon
        </h2>
        <p
          class="
            text-[13px]
            leading-[15px]
            md:text-[16px] md:leading-[19px]
            xl:text-[21px] xl:leading-[25px]
          "
        >
          Photography Michele Bergsma, Films by Studio New West, Website design
          Lola van Praag, Website development Hessel Middendorp
        </p>
      </div>
    </div>
    <div
      id="grey-stroke"
      class="
        mt-[47px]
        h-[47px]
        bg-center bg-no-repeat bg-cover
        md:mt-[58px] md:h-[97px]
        xl:mt-[39px] xl:h-[159px]
      "
    ></div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Contact - Driving Dutch Design 21',
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
};
</script>

<style scoped>
#grey-stroke {
  background-image: url('/images/backgrounds/grey-stroke.png');
}
</style>
