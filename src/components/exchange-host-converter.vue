<template>
  <CurrencyConverter
    v-if="symbols && currencyValue"
    apiOriginName="ExchangeRate Host"
    :symbols="symbols"
    :currencyValue="currencyValue"
  />
</template>

<script lang="ts">
import { ExchangeRateHostAPI } from "@/data";
import { Latest, SymbolType } from "@/domain";
import { Component, Vue } from "vue-property-decorator";

import CurrencyConverter from "@/components/currency-converter.vue";

@Component({
  components: {
    CurrencyConverter,
  },
})
export default class ExchangeHostConverter extends Vue {
  symbols: SymbolType | null = null;
  currencyValue: Latest | null = null;

  created(): void {
    ExchangeRateHostAPI.getSymbols().then((r) => {
      this.symbols = r.data.symbols;
    });

    ExchangeRateHostAPI.getLatest().then((r) => {
      this.currencyValue = r.data;
    });
  }
}
</script>
