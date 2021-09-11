<template>
  <header>
    <nav
      class="pt-[20px] mx-auto max-w-[375px] md:pt-[54px] md:w-[768px] md:max-w-none"
    >
      <ul
        class="flex justify-between mr-[23px] ml-[13px] md:mr-[48px] md:ml-[35px]"
      >
        <li>
          <nuxt-link to="/">
            <img
              class="w-[103px] md:w-[152px]"
              src="/images/logos/logo-ddd21.png"
              alt="Logo DDD21"
              width="304"
              height="234"
            />
          </nuxt-link>
        </li>
        <li
          class="hidden md:list-item md:pt-[14px] md:text-[24px] md:leading-[29px]"
        >
          <nuxt-link to="">
            The
            <br />
            Drivers
          </nuxt-link>
        </li>
        <li
          class="hidden md:list-item md:pt-[14px] md:text-[24px] md:leading-[29px]"
        >
          <nuxt-link to="">
            DDW
            <br />
            Expo
          </nuxt-link>
        </li>
        <li
          class="hidden md:list-item md:pt-[14px] md:text-[24px] md:leading-[29px]"
        >
          <nuxt-link to="">
            Driver
            <br />
            TV
          </nuxt-link>
        </li>
        <li
          class="hidden md:list-item md:pt-[14px] md:text-[24px] md:leading-[29px]"
        >
          <nuxt-link to="">Contact</nuxt-link>
        </li>
        <li class="md:hidden">
          <button type="button">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>
