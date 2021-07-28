<template>
  <CurrencyConverter
    v-if="symbols && currencyValue"
    apiOriginName="Swop.cx"
    :symbols="symbols"
    :currencyValue="currencyValue"
  />
</template>

<script lang="ts">
import {
  Latest,
  LatestGraphqlResult,
  SymbolGraphqlResponse,
  SymbolType,
} from "@/domain";
import { Component, Vue } from "vue-property-decorator";

import CurrencyConverter from "@/components/currency-converter.vue";
import gql from "graphql-tag";

const latestQuery = gql`
  query latest {
    latest {
      baseCurrency
      quoteCurrency
      quote
    }
  }
`;

const currenciesQuery = gql`
  query currencies {
    currencies {
      code
      name
    }
  }
`;

@Component({
  components: {
    CurrencyConverter,
  },
  apollo: {
    currencyValue: {
      query: latestQuery,
      update: (data: LatestGraphqlResult) => {
        const latest: Latest = {
          base: "EUR",
          rates: {},
        };
        data.latest.forEach((item) => {
          latest.rates[item.quoteCurrency] = item.quote;
        });
        return latest;
      },
    },
    symbols: {
      query: currenciesQuery,
      update: (data: SymbolGraphqlResponse) => {
        const symbols: SymbolType = {};
        data.currencies.forEach((item) => {
          symbols[item.code] = {
            code: item.code,
            description: item.name,
          };
        });
        return symbols;
      },
    },
  },
})
export default class SwopGraphqlConverter extends Vue {
  symbols: SymbolType | null = null;
  currencyValue: Latest | null = null;
}
</script>
