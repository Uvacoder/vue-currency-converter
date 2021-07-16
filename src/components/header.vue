<template>
  <header class="bg-white shadow">
    <nav class="container mx-auto px-3 py-3">
      <router-link class="mx-2" to="/">Home</router-link>
      <router-link class="mx-2" to="/about">About</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>
