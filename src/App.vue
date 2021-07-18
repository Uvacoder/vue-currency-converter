<template>
  <div id="app">
    <Header />
    <main>
      <div class="lg:container lg:mx-auto py-16 px-3">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/header.vue";

@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>
