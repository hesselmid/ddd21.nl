<template>
  <main class="bg-[#007190]">
    <div
      class="px-[42px] mx-auto max-w-[375px] md:px-[87px] md:w-[768px] md:max-w-none"
    >
      <h1
        class="mt-[28.4px] text-[45px] leading-[54px] md:text-[50px] md:leading-[61px] md:text-center"
      >
        Driver TV
      </h1>
      <div class="md:flex md:justify-between md:mt-[45px]">
        <p
          class="mt-[14px] text-[16px] leading-[19px] md:mt-0 md:w-[378px] md:text-[20px] md:leading-[24px]"
        >
          Meet the Drivers in these portrait videos, aired on DDW TV during
          Dutch Design Week 2012. [Language: Dutch]
        </p>
        <div class="mt-[20px] md:mt-0">
          <h2
            class="text-[11px] leading-[13px] md:text-[15px] md:leading-[18px]"
          >
            Share this artikel
          </h2>
          <div class="flex flex-col mt-[13px] md:mt-[18px]">
            <a
              class="text-[11px] leading-[13px] underline md:text-[15px] md:leading-[18px]"
              href="#"
            >
              Facebook
            </a>
            <a
              class="text-[11px] leading-[13px] underline md:text-[15px] md:leading-[18px]"
              href="#"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div class="pb-[81.8px] md:pb-[154.6px]">
        <article class="mt-[30px] md:mt-[62px]" v-for="n in 3" :key="n">
          <h2
            class="text-[40px] leading-[48px] md:text-[45px] md:leading-[54px]"
          >
            Asja
          </h2>
          <div
            class="mt-[13px] w-[291px] h-[172px] bg-white md:mt-[69px] md:w-[594px] md:h-[352px]"
          ></div>
        </article>
      </div>
    </div>
  </main>
</template>
