<template>
  <div class="flex flex-col">
    <ExchangeHostConverter class="mb-6" />
    <SwopGraphqlConverter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ExchangeHostConverter from "@/components/exchange-host-converter.vue";
import SwopGraphqlConverter from "@/components/swop-graphql-converter.vue";

@Component({
  components: {
    ExchangeHostConverter,
    SwopGraphqlConverter,
  },
})
export default class Home extends Vue {}
</script>
