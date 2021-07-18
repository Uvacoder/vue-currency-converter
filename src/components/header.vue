<template>
  <header class="bg-white shadow">
    <nav class="lg:container lg:mx-auto px-3 py-3">
      <div class="flex flex-col md:flex-row md:items-center">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <h1 class="text-gray-900 text-lg font-bold py-2">
              Currency Converter
            </h1>
          </div>
          <div class="flex md:hidden">
            <button
              @click.prevent="isOpen = !isOpen"
              type="button"
              class="
                text-gray-500
                hover:text-gray-600
                focus:outline-none focus:text-gray-600
              "
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="md:flex items-center" :class="isOpen ? 'block' : 'hidden'">
          <div
            class="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1 items-start"
          >
            <router-link
              v-for="router in routerLinks"
              :key="router.to"
              class="
                text-gray-500
                hover:text-gray-900
                md:px-3
                py-2
                text-sm
                font-medium
              "
              :to="router.to"
              >{{ router.name }}</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  isOpen = false;
  routerLinks = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "/about",
    },
  ];
}
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  @apply text-blue-700;
}
</style>
