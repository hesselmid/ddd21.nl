<template>
  <div class="fixed inset-0 z-50 bg-white md:hidden">
    <nav class="pt-[20px] mx-auto max-w-[375px]">
      <div class="flex justify-between mr-[23px] ml-[13px]">
        <nuxt-link to="/">
          <img
            class="w-[103px] md:w-[152px]"
            src="/images/logos/logo-ddd21.png"
            alt="Logo DDD21"
            width="304"
            height="234"
          />
        </nuxt-link>
        <button type="button" @click="toggleMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-[68px] h-[67px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <ul class="flex flex-col items-center mt-[37px]">
        <li @click="toggleMenu">
          <nuxt-link class="text-[45px] leading-[54px]" to="/the-drivers">
            The Drivers
          </nuxt-link>
        </li>
        <li @click="toggleMenu">
          <nuxt-link class="text-[45px] leading-[54px]" to="/driver-tv">
            Driver TV
          </nuxt-link>
        </li>
        <li @click="toggleMenu">
          <nuxt-link class="text-[45px] leading-[54px]" to="/ddw-expo">
            DDW Expo
          </nuxt-link>
        </li>
        <li @click="toggleMenu">
          <nuxt-link class="text-[45px] leading-[54px]" to="/contact">
            Contact
          </nuxt-link>
        </li>
        <li @click="toggleMenu">
          <nuxt-link class="text-[45px] leading-[54px]" to="/">Home</nuxt-link>
        </li>
      </ul>
      <div class="mx-auto mt-[84px] w-[258px] text-[13px] leading-[15px]">
        Driving Dutch Design is an initiated by ABN AMRO, BNO & Dutch Design
        Foundation.
      </div>
      <div
        class="flex justify-between items-center mx-auto mt-[16px] w-[324px]"
      >
        <a href="https://www.abnamro.nl/nl/zakelijk/home.html">
          <img
            class="w-[113px]"
            src="/images/logos/logo-abn-amro.png"
            alt="Logo ABN Amro"
            width="352"
            height="159"
          />
        </a>
        <a href="https://www.bno.nl">
          <img
            class="w-[62px]"
            src="/images/logos/logo-bno.png"
            alt="Logo BNO"
            width="198"
            height="105"
          />
        </a>
        <a href="https://www.dutchdesignfoundation.com">
          <img
            class="w-[113px]"
            src="/images/logos/logo-ddf.png"
            alt="Logo Dutch Design Foundation"
            width="348"
            height="82"
          />
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu');
      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('overflow-hidden');
    },
  },
};
</script>
