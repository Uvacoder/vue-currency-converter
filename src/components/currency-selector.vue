<template>
  <div>
    <select v-model="syncedSelectedSymbol">
      <option v-for="item in symbols" :key="item.code" :value="item.code">
        {{ item.description }}
      </option>
    </select>
    <input type="number" v-model="syncedAmount" />
  </div>
</template>

<script lang="ts">
import "reflect-metadata";
import { SymbolType } from "@/domain";
import { Component, Prop, PropSync, Vue } from "vue-property-decorator";

@Component
export default class CurrencySelector extends Vue {
  @Prop() symbols!: SymbolType;
  @PropSync("amount") syncedAmount!: number;
  @PropSync("selectedSymbol") syncedSelectedSymbol!: string;
}
</script>
