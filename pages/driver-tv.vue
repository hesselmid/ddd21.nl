<template>
  <main class="bg-[#007190]">
    <div class="px-[42px] mx-auto max-w-[375px]">
      <h1 class="mt-[28.4px] text-[45px] leading-[54px]">Driver TV</h1>
      <p class="mt-[14px] text-[16px] leading-[19px]">
        Meet the Drivers in these portrait videos, aired on DDW TV during Dutch
        Design Week 2012. [Language: Dutch]
      </p>
      <div class="mt-[20px]">
        <h2 class="text-[11px] leading-[13px]">Share this artikel</h2>
        <div class="flex flex-col mt-[13px]">
          <a class="text-[11px] leading-[13px] underline" href="#">Facebook</a>
          <a class="text-[11px] leading-[13px] underline" href="#">LinkedIn</a>
        </div>
      </div>
      <div class="pb-[81.8px]">
        <article class="mt-[30px]" v-for="n in 3" :key="n">
          <h2 class="text-[40px] leading-[48px]">Asja</h2>
          <div class="mt-[13px] w-[291px] h-[172px] bg-white"></div>
        </article>
      </div>
    </div>
  </main>
</template>
