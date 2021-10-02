<template>
  <main class="bg-[#B5DECB]">
    <img
      class="w-full pointer-events-none"
      src="/images/backgrounds/white-stroke-top.svg"
    />
    <div class="mt-[19.8px] md:mt-[66.1px] xl:mt-[59px]">
      <div class="flex justify-center h-[68px] md:h-[75px]">
        <vue-blotter
          class="inline-block h-[45px] md:hidden"
          family="Haarlem-Regular"
          :size="45"
          material-type="LiquidDistortMaterial"
          text="The Drivers"
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
          text="The Drivers"
          :uniforms="{
            uSpeed: 0.25,
          }"
          :padding-right="60"
          :padding-left="60"
        >
          <h1></h1>
        </vue-blotter>
      </div>
      <ul
        class="hidden md:flex md:justify-between md:mx-auto md:mt-[51.1px] md:w-[587px] "
      >
        <li>
          <button
            class="text-[24px] leading-[29px] underline"
            type="button"
            @click="selectCategory('systems')"
          >
            I see systems
          </button>
        </li>
        <li>
          <button
            class="text-[24px] leading-[29px] underline"
            type="button"
            @click="selectCategory('stories')"
          >
            I hear stories
          </button>
        </li>
        <li>
          <button
            class="text-[24px] leading-[29px] underline"
            type="button"
            @click="selectCategory('objects')"
          >
            I feel objects
          </button>
        </li>
      </ul>
      <div
        id="grid"
        class="mt-[38.5px] md:grid md:grid-cols-12 md:gap-x-[51.2px] md:gap-y-[41.4px] md:px-[66.5px] md:pt-[47.3px] md:pb-[47.2px] md:mx-auto md:mt-[46.3px] md:w-[662.95px] md:h-[1479.02px] xl:grid-cols-10 xl:gap-x-[58.2px] xl:gap-y-[52.3px] xl:pt-[69.5px] xl:pr-[53.2px] xl:pb-[85.4px] xl:pl-[69.9px] xl:mt-[66px] xl:w-[1150.89px] xl:h-[1204.04px]"
      >
        <!-- START 1 -->

        <nuxt-link
          class="group block mx-auto w-[298.87px] md:relative md:col-span-4 md:mx-0 md:w-[140.38px] xl:col-span-2 xl:w-[159.58px]"
          to="/the-drivers/asja-keeman"
        >
          <div class="text-[24px] leading-[29px] text-center md:hidden">
            I hear stories
          </div>
          <div
            style="background-image:url(/images/backgrounds/white-bg-sm-1.svg)"
            class="flex justify-center items-center w-[298.87px] h-[383.81px] md:w-full md:h-auto md!bg-none"
          >
            <picture>
              <source
                srcset="/images/fotografie/asja-keeman-1.avif"
                type="image/avif"
              />
              <source
                srcset="/images/fotografie/asja-keeman-1.webp"
                type="image/webp"
              />
              <source
                srcset="/images/fotografie/asja-keeman-1.jpg"
                type="image/jpeg"
              />
              <img
                class="w-[243px] md:w-full md:group-hover:grayscale"
                :class="{ 'md:grayscale': selectedCategory === 'stories' }"
                src="/images/fotografie/asja-keeman-1.jpg"
                alt="Asja Keeman"
                width="486"
                height="680"
              />
            </picture>
          </div>
          <div
            class="text-[24px] leading-[29px] text-center md:hidden md:absolute md:inset-0 md:group-hover:flex md:group-hover:justify-center md:group-hover:items-center md:group-hover:text-[#FBDC00]"
            :class="{
              'md:!flex md:justify-center md:items-center md:text-[#FBDC00]':
                selectedCategory === 'stories',
            }"
          >
            Asja Keeman
          </div>
        </nuxt-link>

        <!-- END 1 -->

        <!-- START 10 -->

        <nuxt-link
          class="group block mx-auto mt-[108px] w-[302.39px] md:relative md:col-span-4 md:mx-0 md:mt-0 md:w-[140.38px] xl:col-span-2 xl:w-[159.58px]"
          to="/the-drivers/jwve"
        >
          <div class="text-[24px] leading-[29px] text-center md:hidden">
            I feel objects
          </div>
          <div
            style="background-image:url(/images/backgrounds/white-bg-sm-2.svg)"
            class="flex justify-center items-center w-[302.39px] h-[386.45px] md:w-full md:h-auto md!bg-none"
          >
            <picture>
              <source
                srcset="/images/fotografie/jwve-1.avif"
                type="image/avif"
              />
              <source
                srcset="/images/fotografie/jwve-1.webp"
                type="image/webp"
              />
              <source
                srcset="/images/fotografie/jwve-1.jpg"
                type="image/jpeg"
              />
              <img
                class="w-[243px] md:w-full md:group-hover:grayscale"
                :class="{ 'md:grayscale': selectedCategory === 'objects' }"
                src="/images/fotografie/jwve-1.jpg"
                alt="JWvE"
                width="486"
                height="680"
              />
            </picture>
          </div>
          <div
            class="text-[24px] leading-[29px] text-center md:hidden md:absolute md:inset-0 md:group-hover:flex md:group-hover:justify-center md:group-hover:items-center md:group-hover:text-[#B5DECB]"
            :class="{
              'md:!flex md:justify-center md:items-center md:text-[#B5DECB]':
                selectedCategory === 'objects',
            }"
          >
            Jan Willem van Elten
          </div>
        </nuxt-link>

        <!-- END 10 -->

        <!-- START 11 -->

        <nuxt-link
          class="group block mx-auto mt-[108px] w-[298.87px] md:relative md:col-span-4 md:mx-0 md:mt-0 md:w-[140.38px] xl:col-span-2 xl:w-[159.58px]"
          to="/the-drivers/lisa-mandemaker"
        >
          <div class="text-[24px] leading-[29px] text-center md:hidden">
            I see systems
          </div>
          <div
            style="background-image:url(/images/backgrounds/white-bg-sm-3.svg)"
            class="flex justify-center items-center w-[298.87px] h-[383.81px] md:w-full md:h-auto md!bg-none"
          >
            <picture>
              <source
                srcset="/images/fotografie/lisa-mandemaker-1.avif"
                type="image/avif"
              />
              <source
                srcset="/images/fotografie/lisa-mandemaker-1.webp"
                type="image/webp"
              />
              <source
                srcset="/images/fotografie/lisa-mandemaker-1.jpg"
                type="image/jpeg"
              />
              <img
                class="w-[243px] md:w-full md:group-hover:grayscale"
                :class="{ 'md:grayscale': selectedCategory === 'systems' }"
                src="/images/fotografie/lisa-mandemaker-1.jpg"
                alt="Lisa Mandemaker"
                width="486"
                height="680"
              />
            </picture>
          </div>
          <div
            class="text-[24px] leading-[29px] text-center md:hidden md:absolute md:inset-0 md:group-hover:flex md:group-hover:justify-center md:group-hover:items-center md:group-hover:text-[#00addd]"
            :class="{
              'md:!flex md:justify-center md:items-center md:text-[#00addd]':
                selectedCategory === 'systems',
            }"
          >
            Lisa Mandemaker
          </div>
        </nuxt-link>

        <!-- END 11 -->

        <!-- START 4 -->

        <nuxt-link
          class="group block mx-auto mt-[108px] w-[302.39px] md:relative md:col-span-4 md:mx-0 md:mt-0 md:w-[140.38px] xl:col-span-2 xl:w-[159.58px]"
          to="/the-drivers/djenne-fila"
        >
          <div class="text-[24px] leading-[29px] text-center md:hidden">
            I hear stories
          </div>
          <div
            style="background-image:url(/images/backgrounds/white-bg-sm-4.svg)"
            class="flex justify-center items-center w-[302.39px] h-[386.45px] md:w-full md:h-auto md!bg-none"
          >
            <picture>
              <source
                srcset="/images/fotografie/djenne-fila-1.avif"
                type="image/avif"
              />
              <source
                srcset="/images/fotografie/djenne-fila-1.webp"
                type="image/webp"
              />
              <source
                srcset="/images/fotografie/djenne-fila-1.jpg"
                type="image/jpeg"
              />
              <img
                class="w-[243px] md:w-full md:group-hover:grayscale"
                :class="{ 'md:grayscale': selectedCategory === 'stories' }"
                src="/images/fotografie/djenne-fila-1.jpg"
                alt="Djenné Fila"
                width="486"
                height="680"
              />
            </picture>
          </div>
          <div
            class="text-[24px] leading-[29px] text-center md:hidden md:absolute md:inset-0 md:group-hover:flex md:group-hover:justify-center md:group-hover:items-center md:group-hover:text-[#FBDC00]"
            :class="{
              'md:!flex md:justify-center md:items-center md:text-[#FBDC00]':
                selectedCategory === 'stories',
            }"
          >
            Djenné Fila
          </div>
        </nuxt-link>

        <!-- END 4 -->

        <!-- START 5 -->

        <nuxt-link
          class="group block mx-auto mt-[108px] w-[298.87px] md:relative md:col-span-4 md:mx-0 md:mt-0 md:w-[140.38px] xl:col-span-2 xl:w-[159.58px]"
          to="/the-drivers/fides-lapidaire"
        >
          <div class="text-[24px] leading-[29px] text-center md:hidden">
            I see systems
          </div>
          <div
            style="background-image:url(/images/backgrounds/white-bg-sm-1.svg)"
            class="flex justify-center items-center w-[298.87px] h-[383.81px] md:w-full md:h-auto md!bg-none"
          >
            <picture>
              <source
                srcset="/images/fotografie/fides-lapidaire-1.avif"
                type="image/avif"
              />
              <source
                srcset="/images/fotografie/fides-lapidaire-1.webp"
                type="image/webp"
              />
              <source
                srcset="/images/fotografie/fides-lapidaire-1.jpg"
                type="image/jpeg"
              />
              <img
                class="w-[243px] md:w-full md:group-hover:grayscale"
                :class="{ 'md:grayscale': selectedCategory === 'systems' }"
                src="/images/fotografie/fides-lapidaire-1.jpg"
                alt="Fides Lapidaire"
                width="486"
                height="680"
              />
            </picture>
          </div>
          <div
            class="text-[24px] leading-[29px] text-center md:hidden md:absolute md:inset-0 md:group-hover:flex md:group-hover:justify-center md:group-hover:items-center md:group-hover:text-[#00addd]"
            :class="{
              'md:!flex md:justify-center md:items-center md:text-[#00addd]':
                selectedCategory === 'systems',
            }"
          >
            Fides Lapidaire
          </div>
        </nuxt-link>

        <!-- END 5 -->

        <!-- START 6 -->

        <nuxt-link
          class="group block mx-auto mt-[108px] w-[302.39px] md:relative md:col-span-4 md:mx-0 md:mt-0 md:w-[140.38px] xl:col-span-2 xl:col-start-2 xl:w-[159.58px]"
          to="/the-drivers/geert-snijders"
        >
          <div class="text-[24px] leading-[29px] text-center md:hidden">
            I hear stories
          </div>
          <div
            style="background-image:url(/images/backgrounds/white-bg-sm-2.svg)"
            class="flex justify-center items-center w-[302.39px] h-[386.45px] md:w-full md:h-auto md!bg-none"
          >
            <picture>
              <source
                srcset="/images/fotografie/geert-snijders-1.avif"
                type="image/avif"
              />
              <source
                srcset="/images/fotografie/geert-snijders-1.webp"
                type="image/webp"
              />
              <source
                srcset="/images/fotografie/geert-snijders-1.jpg"
                type="image/jpeg"
              />
              <img
                class="w-[243px] md:w-full md:group-hover:grayscale"
                :class="{ 'md:grayscale': selectedCategory === 'stories' }"
                src="/images/fotografie/geert-snijders-1.jpg"
                alt="Geert Snijders"
                width="486"
                height="680"
              />
            </picture>
          </div>
          <div
            class="text-[24px] leading-[29px] text-center md:hidden md:absolute md:inset-0 md:group-hover:flex md:group-hover:justify-center md:group-hover:items-center md:group-hover:text-[#FBDC00]"
            :class="{
              'md:!flex md:justify-center md:items-center md:text-[#FBDC00]':
                selectedCategory === 'stories',
            }"
          >
            Geert Snijders
          </div>
        </nuxt-link>

        <!-- END 6 -->

        <!-- START 7 -->

        <nuxt-link
          class="group block mx-auto mt-[108px] w-[298.87px] md:relative md:col-span-4 md:mx-0 md:mt-0 md:w-[140.38px] xl:col-span-2 xl:w-[159.58px]"
          to="/the-drivers/inderjeet-sandhu"
        >
          <div class="text-[24px] leading-[29px] text-center md:hidden">
            I feel objects
          </div>
          <div
            style="background-image:url(/images/backgrounds/white-bg-sm-3.svg)"
            class="flex justify-center items-center w-[298.87px] h-[383.81px] md:w-full md:h-auto md!bg-none"
          >
            <picture>
              <source
                srcset="/images/fotografie/inderjeet-sandhu-1.avif"
                type="image/avif"
              />
              <source
                srcset="/images/fotografie/inderjeet-sandhu-1.webp"
                type="image/webp"
              />
              <source
                srcset="/images/fotografie/inderjeet-sandhu-1.jpg"
                type="image/jpeg"
              />
              <img
                class="w-[243px] md:w-full md:group-hover:grayscale"
                :class="{ 'md:grayscale': selectedCategory === 'objects' }"
                src="/images/fotografie/inderjeet-sandhu-1.jpg"
                alt="Inderjeet Sandhu"
                width="486"
                height="680"
              />
            </picture>
          </div>
          <div
            class="text-[24px] leading-[29px] text-center md:hidden md:absolute md:inset-0 md:group-hover:flex md:group-hover:justify-center md:group-hover:items-center md:group-hover:text-[#B5DECB]"
            :class="{
              'md:!flex md:justify-center md:items-center md:text-[#B5DECB]':
                selectedCategory === 'objects',
            }"
          >
            Inderjeet Sandhu
          </div>
        </nuxt-link>

        <!-- END 7 -->

        <!-- START 8 -->

        <nuxt-link
          class="group block mx-auto mt-[108px] w-[302.39px] md:relative md:col-span-4 md:mx-0 md:mt-0 md:w-[140.38px] xl:col-span-2 xl:w-[159.58px]"
          to="/the-drivers/josephine-de-fijter"
        >
          <div class="text-[24px] leading-[29px] text-center md:hidden">
            I see systems
          </div>
          <div
            style="background-image:url(/images/backgrounds/white-bg-sm-4.svg)"
            class="flex justify-center items-center w-[302.39px] h-[386.45px] md:w-full md:h-auto md!bg-none"
          >
            <picture>
              <source
                srcset="/images/fotografie/josephine-de-fijter-1.avif"
                type="image/avif"
              />
              <source
                srcset="/images/fotografie/josephine-de-fijter-1.webp"
                type="image/webp"
              />
              <source
                srcset="/images/fotografie/josephine-de-fijter-1.jpg"
                type="image/jpeg"
              />
              <img
                class="w-[243px] md:w-full md:group-hover:grayscale"
                :class="{ 'md:grayscale': selectedCategory === 'systems' }"
                src="/images/fotografie/josephine-de-fijter-1.jpg"
                alt="Josephine de Fijter"
                width="486"
                height="680"
              />
            </picture>
          </div>
          <div
            class="text-[24px] leading-[29px] text-center md:hidden md:absolute md:inset-0 md:group-hover:flex md:group-hover:justify-center md:group-hover:items-center md:group-hover:text-[#00addd]"
            :class="{
              'md:!flex md:justify-center md:items-center md:text-[#00addd]':
                selectedCategory === 'systems',
            }"
          >
            Studio Uncoated
          </div>
        </nuxt-link>

        <!-- END 8 -->

        <!-- START 9 -->

        <nuxt-link
          class="group block mx-auto mt-[108px] w-[298.87px] md:relative md:col-span-4 md:mx-0 md:mt-0 md:w-[140.38px] xl:col-span-2 xl:w-[159.58px]"
          to="/the-drivers/jule-cats"
        >
          <div class="text-[24px] leading-[29px] text-center md:hidden">
            I feel objects
          </div>
          <div
            style="background-image:url(/images/backgrounds/white-bg-sm-1.svg)"
            class="flex justify-center items-center w-[298.87px] h-[383.81px] md:w-full md:h-auto md!bg-none"
          >
            <picture>
              <source
                srcset="/images/fotografie/jule-cats-1.avif"
                type="image/avif"
              />
              <source
                srcset="/images/fotografie/jule-cats-1.webp"
                type="image/webp"
              />
              <source
                srcset="/images/fotografie/jule-cats-1.jpg"
                type="image/jpeg"
              />
              <img
                class="w-[243px] md:w-full md:group-hover:grayscale"
                :class="{ 'md:grayscale': selectedCategory === 'objects' }"
                src="/images/fotografie/jule-cats-1.jpg"
                alt="Jule Cats"
                width="486"
                height="680"
              />
            </picture>
          </div>
          <div
            class="text-[24px] leading-[29px] text-center md:hidden md:absolute md:inset-0 md:group-hover:flex md:group-hover:justify-center md:group-hover:items-center md:group-hover:text-[#B5DECB]"
            :class="{
              'md:!flex md:justify-center md:items-center md:text-[#B5DECB]':
                selectedCategory === 'objects',
            }"
          >
            Studio Jule Cats
          </div>
        </nuxt-link>

        <!-- END 9 -->

        <!-- START 2 -->

        <nuxt-link
          class="group block mx-auto mt-[108px] w-[302.39px] md:relative md:col-span-4 md:mx-0 md:mt-0 md:w-[140.38px] xl:col-start-3 xl:col-span-2 xl:w-[159.58px]"
          to="/the-drivers/bram-de-vos"
        >
          <div class="text-[24px] leading-[29px] text-center md:hidden">
            I see systems
          </div>
          <div
            style="background-image:url(/images/backgrounds/white-bg-sm-2.svg)"
            class="flex justify-center items-center w-[302.39px] h-[386.45px] md:w-full md:h-auto md!bg-none"
          >
            <picture>
              <source
                srcset="/images/fotografie/bram-de-vos-1.avif"
                type="image/avif"
              />
              <source
                srcset="/images/fotografie/bram-de-vos-1.webp"
                type="image/webp"
              />
              <source
                srcset="/images/fotografie/bram-de-vos-1.jpg"
                type="image/jpeg"
              />
              <img
                class="w-[243px] md:w-full md:group-hover:grayscale"
                :class="{ 'md:grayscale': selectedCategory === 'systems' }"
                src="/images/fotografie/bram-de-vos-1.jpg"
                alt="Bram de Vos"
                width="486"
                height="680"
              />
            </picture>
          </div>
          <div
            class="text-[24px] leading-[29px] text-center md:hidden md:absolute md:inset-0 md:group-hover:flex md:group-hover:justify-center md:group-hover:items-center md:group-hover:text-[#00addd]"
            :class="{
              'md:!flex md:justify-center md:items-center md:text-[#00addd]':
                selectedCategory === 'systems',
            }"
          >
            Bram de Vos
          </div>
        </nuxt-link>

        <!-- END 2 -->

        <!-- START 3 -->

        <nuxt-link
          class="group block mx-auto mt-[108px] w-[298.87px] md:relative md:col-span-4 md:mx-0 md:mt-0 md:w-[140.38px] xl:col-span-2 xl:w-[159.58px]"
          to="/the-drivers/daisy-van-loenhout"
        >
          <div class="text-[24px] leading-[29px] text-center md:hidden">
            I hear stories
          </div>
          <div
            style="background-image:url(/images/backgrounds/white-bg-sm-3.svg)"
            class="flex justify-center items-center w-[298.87px] h-[383.81px] md:w-full md:h-auto md!bg-none"
          >
            <picture>
              <source
                srcset="/images/fotografie/daisy-van-loenhout-1.avif"
                type="image/avif"
              />
              <source
                srcset="/images/fotografie/daisy-van-loenhout-1.webp"
                type="image/webp"
              />
              <source
                srcset="/images/fotografie/daisy-van-loenhout-1.jpg"
                type="image/jpeg"
              />
              <img
                class="w-[243px] md:w-full md:group-hover:grayscale"
                :class="{ 'md:grayscale': selectedCategory === 'stories' }"
                src="/images/fotografie/daisy-van-loenhout-1.jpg"
                alt="Daisy van Loenhout"
                width="486"
                height="680"
              />
            </picture>
          </div>
          <div
            class="text-[24px] leading-[29px] text-center md:hidden md:absolute md:inset-0 md:group-hover:flex md:group-hover:justify-center md:group-hover:items-center md:group-hover:text-[#FBDC00]"
            :class="{
              'md:!flex md:justify-center md:items-center md:text-[#FBDC00]':
                selectedCategory === 'stories',
            }"
          >
            Daisy van Loenhout
          </div>
        </nuxt-link>

        <!-- END 3 -->

        <!-- START 12 -->

        <nuxt-link
          class="group block mx-auto mt-[108px] w-[302.39px] md:relative md:col-span-4 md:mx-0 md:mt-0 md:w-[140.38px] xl:col-span-2 xl:w-[159.58px]"
          to="/the-drivers/lola-van-praag"
        >
          <div class="text-[24px] leading-[29px] text-center md:hidden">
            I feel objects
          </div>
          <div
            style="background-image:url(/images/backgrounds/white-bg-sm-4.svg)"
            class="flex justify-center items-center w-[302.39px] h-[386.45px] md:w-full md:h-auto md!bg-none"
          >
            <picture>
              <source
                srcset="/images/fotografie/lola-van-praag-1.avif"
                type="image/avif"
              />
              <source
                srcset="/images/fotografie/lola-van-praag-1.webp"
                type="image/webp"
              />
              <source
                srcset="/images/fotografie/lola-van-praag-1.jpg"
                type="image/jpeg"
              />
              <img
                class="w-[243px] md:w-full md:group-hover:grayscale"
                :class="{ 'md:grayscale': selectedCategory === 'objects' }"
                src="/images/fotografie/lola-van-praag-1.jpg"
                alt="Lola van Praag"
                width="486"
                height="680"
              />
            </picture>
          </div>
          <div
            class="text-[24px] leading-[29px] text-center md:hidden md:absolute md:inset-0 md:group-hover:flex md:group-hover:justify-center md:group-hover:items-center md:group-hover:text-[#B5DECB]"
            :class="{
              'md:!flex md:justify-center md:items-center md:text-[#B5DECB]':
                selectedCategory === 'objects',
            }"
          >
            Lola van Praag
          </div>
        </nuxt-link>

        <!-- END 12 -->

        <!-- START 17 -->

        <nuxt-link
          class="group block mx-auto mt-[108px] w-[298.87px] md:relative md:col-span-4 md:mx-0 md:mt-0 md:w-[140.38px] xl:col-start-1 xl:col-span-2 xl:w-[159.58px]"
          to="/the-drivers/thom-bindels"
        >
          <div class="text-[24px] leading-[29px] text-center md:hidden">
            I see systems
          </div>
          <div
            style="background-image:url(/images/backgrounds/white-bg-sm-1.svg)"
            class="flex justify-center items-center w-[298.87px] h-[383.81px] md:w-full md:h-auto md!bg-none"
          >
            <picture>
              <source
                srcset="/images/fotografie/thom-bindels-1.avif"
                type="image/avif"
              />
              <source
                srcset="/images/fotografie/thom-bindels-1.webp"
                type="image/webp"
              />
              <source
                srcset="/images/fotografie/thom-bindels-1.jpg"
                type="image/jpeg"
              />
              <img
                class="w-[243px] md:w-full md:group-hover:grayscale"
                :class="{ 'md:grayscale': selectedCategory === 'systems' }"
                src="/images/fotografie/thom-bindels-1.jpg"
                alt="Thom Bindels"
                width="486"
                height="680"
              />
            </picture>
          </div>
          <div
            class="text-[24px] leading-[29px] text-center md:hidden md:absolute md:inset-0 md:group-hover:flex md:group-hover:justify-center md:group-hover:items-center md:group-hover:text-[#00addd]"
            :class="{
              'md:!flex md:justify-center md:items-center md:text-[#00addd]':
                selectedCategory === 'systems',
            }"
          >
            Thom Bindels
          </div>
        </nuxt-link>

        <!-- END 17 -->

        <!-- START 14 -->

        <nuxt-link
          class="group block mx-auto mt-[108px] w-[302.39px] md:relative md:col-span-4 md:mx-0 md:mt-0 md:w-[140.38px] xl:col-span-2 xl:w-[159.58px]"
          to="/the-drivers/rein-reitsma"
        >
          <div class="text-[24px] leading-[29px] text-center md:hidden">
            I feel objects
          </div>
          <div
            style="background-image:url(/images/backgrounds/white-bg-sm-2.svg)"
            class="flex justify-center items-center w-[302.39px] h-[386.45px] md:w-full md:h-auto md!bg-none"
          >
            <picture>
              <source
                srcset="/images/fotografie/rein-reitsma-1.avif"
                type="image/avif"
              />
              <source
                srcset="/images/fotografie/rein-reitsma-1.webp"
                type="image/webp"
              />
              <source
                srcset="/images/fotografie/rein-reitsma-1.jpg"
                type="image/jpeg"
              />
              <img
                class="w-[243px] md:w-full md:group-hover:grayscale"
                :class="{ 'md:grayscale': selectedCategory === 'objects' }"
                src="/images/fotografie/rein-reitsma-1.jpg"
                alt="Rein Reitsma"
                width="486"
                height="680"
              />
            </picture>
          </div>
          <div
            class="text-[24px] leading-[29px] text-center md:hidden md:absolute md:inset-0 md:group-hover:flex md:group-hover:justify-center md:group-hover:items-center md:group-hover:text-[#B5DECB]"
            :class="{
              'md:!flex md:justify-center md:items-center md:text-[#B5DECB]':
                selectedCategory === 'objects',
            }"
          >
            Rein Reitsma
          </div>
        </nuxt-link>

        <!-- END 14 -->

        <!-- START 15 -->

        <nuxt-link
          class="group block mx-auto mt-[108px] w-[298.87px] md:relative md:col-span-4 md:mx-0 md:mt-0 md:w-[140.38px] xl:col-span-2 xl:w-[159.58px]"
          to="/the-drivers/studio-new-west"
        >
          <div class="text-[24px] leading-[29px] text-center md:hidden">
            I hear stories
          </div>
          <div
            style="background-image:url(/images/backgrounds/white-bg-sm-3.svg)"
            class="flex justify-center items-center w-[298.87px] h-[383.81px] md:w-full md:h-auto md!bg-none"
          >
            <picture>
              <source
                srcset="/images/fotografie/studio-new-west-1.avif"
                type="image/avif"
              />
              <source
                srcset="/images/fotografie/studio-new-west-1.webp"
                type="image/webp"
              />
              <source
                srcset="/images/fotografie/studio-new-west-1.jpg"
                type="image/jpeg"
              />
              <img
                class="w-[243px] md:w-full md:group-hover:grayscale"
                :class="{ 'md:grayscale': selectedCategory === 'stories' }"
                src="/images/fotografie/studio-new-west-1.jpg"
                alt="Studio New West"
                width="486"
                height="680"
              />
            </picture>
          </div>
          <div
            class="text-[24px] leading-[29px] text-center md:hidden md:absolute md:inset-0 md:group-hover:flex md:group-hover:justify-center md:group-hover:items-center md:group-hover:text-[#FBDC00]"
            :class="{
              'md:!flex md:justify-center md:items-center md:text-[#FBDC00]':
                selectedCategory === 'stories',
            }"
          >
            Studio New West
          </div>
        </nuxt-link>

        <!-- END 15 -->

        <!-- START 16 -->

        <nuxt-link
          class="group block mx-auto mt-[108px] w-[302.39px] md:relative md:col-span-4 md:col-start-3 md:mx-0 md:mt-0 md:w-[140.38px] xl:col-span-2 xl:w-[159.58px]"
          to="/the-drivers/tessa-petrusa"
        >
          <div class="text-[24px] leading-[29px] text-center md:hidden">
            I see systems
          </div>
          <div
            style="background-image:url(/images/backgrounds/white-bg-sm-4.svg)"
            class="flex justify-center items-center w-[302.39px] h-[386.45px] md:w-full md:h-auto md!bg-none"
          >
            <picture>
              <source
                srcset="/images/fotografie/tessa-petrusa-1.avif"
                type="image/avif"
              />
              <source
                srcset="/images/fotografie/tessa-petrusa-1.webp"
                type="image/webp"
              />
              <source
                srcset="/images/fotografie/tessa-petrusa-1.jpg"
                type="image/jpeg"
              />
              <img
                class="w-[243px] md:w-full md:group-hover:grayscale"
                :class="{ 'md:grayscale': selectedCategory === 'systems' }"
                src="/images/fotografie/tessa-petrusa-1.jpg"
                alt="Tessa Petrusa"
                width="486"
                height="680"
              />
            </picture>
          </div>
          <div
            class="text-[24px] leading-[29px] text-center md:hidden md:absolute md:inset-0 md:group-hover:flex md:group-hover:justify-center md:group-hover:items-center md:group-hover:text-[#00addd]"
            :class="{
              'md:!flex md:justify-center md:items-center md:text-[#00addd]':
                selectedCategory === 'systems',
            }"
          >
            Studio Tessa Petrusa
          </div>
        </nuxt-link>

        <!-- END 16 -->

        <!-- START 13 -->

        <nuxt-link
          class="group block mx-auto mt-[108px] w-[298.87px] md:relative md:col-span-4 md:mx-0 md:mt-0 md:w-[140.38px] xl:col-span-2 xl:w-[159.58px]"
          to="/the-drivers/ralf-de-bruin"
        >
          <div class="text-[24px] leading-[29px] text-center md:hidden">
            I feel objects
          </div>
          <div
            style="background-image:url(/images/backgrounds/white-bg-sm-1.svg)"
            class="flex justify-center items-center w-[298.87px] h-[383.81px] md:w-full md:h-auto md!bg-none"
          >
            <picture>
              <source
                srcset="/images/fotografie/ralf-de-bruin-1.avif"
                type="image/avif"
              />
              <source
                srcset="/images/fotografie/ralf-de-bruin-1.webp"
                type="image/webp"
              />
              <source
                srcset="/images/fotografie/ralf-de-bruin-1.jpg"
                type="image/jpeg"
              />
              <img
                class="w-[243px] md:w-full md:group-hover:grayscale"
                :class="{ 'md:grayscale': selectedCategory === 'objects' }"
                src="/images/fotografie/ralf-de-bruin-1.jpg"
                alt="Ralf de Bruin"
                width="486"
                height="680"
              />
            </picture>
          </div>
          <div
            class="text-[24px] leading-[29px] text-center md:hidden md:absolute md:inset-0 md:group-hover:flex md:group-hover:justify-center md:group-hover:items-center md:group-hover:text-[#B5DECB]"
            :class="{
              'md:!flex md:justify-center md:items-center md:text-[#B5DECB]':
                selectedCategory === 'objects',
            }"
          >
            Studio Brundal
          </div>
        </nuxt-link>

        <!-- END 13 -->
      </div>
    </div>
    <img
      class="mt-[65.6px] w-full pointer-events-none md:mt-[46.6px] xl:mt-[59.6px]"
      src="/images/backgrounds/white-stroke-bottom.svg"
    />
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'The Drivers - Driving Dutch Design 2021',
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
      selectedCategory: null,
    };
  },
  methods: {
    selectCategory(cat) {
      return (this.selectedCategory = cat);
    },
  },
};
</script>

<style scoped>
#mint-stroke-top {
  background-image: url(/images/backgrounds/mint-stroke-top.png);
}

#mint-stroke-bottom {
  background-image: url(/images/backgrounds/mint-stroke-bottom.png);
}

@media (min-width: 768px) {
  #grid {
    background-image: url(/images/backgrounds/white-bg-md.svg);
  }
}

@media (min-width: 1280px) {
  #grid {
    background-image: url(/images/backgrounds/white-bg-xl.svg);
  }
}
</style>
