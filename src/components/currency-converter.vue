<template>
  <div>
    <CurrencySelector
      class="my-2"
      :amount="originAmount"
      :selectedSymbol="originSymbolCode"
      :symbols="symbols"
      @update:amount="updateAmountAndConvert($event, 'origin')"
      @update:selectedSymbol="updateSymbolCodeAndConvert($event, 'origin')"
    />
    <CurrencySelector
      class="my-2"
      :amount="destinationAmount"
      :selectedSymbol="destinationSymbolCode"
      :symbols="symbols"
      @update:amount="updateAmountAndConvert($event, 'destination')"
      @update:selectedSymbol="updateSymbolCodeAndConvert($event, 'destination')"
    />
  </div>
</template>

<script lang="ts">
import "reflect-metadata";
import { Component, Prop, Vue } from "vue-property-decorator";
import CurrencySelector from "@/components/currency-selector.vue";
import { Latest, SymbolType, ChangePlace } from "@/domain";
import { RateService } from "@/services";

@Component({
  components: {
    CurrencySelector,
  },
})
export default class CurrencyConverter extends Vue {
  @Prop() symbols!: SymbolType;
  @Prop() currencyValue!: Latest;

  originAmount = 0;
  destinationAmount = 0;
  originSymbolCode = "";
  destinationSymbolCode = "";

  created(): void {
    this.originSymbolCode = this.symbols["EUR"].code;
    this.destinationSymbolCode = this.symbols["USD"].code;
    this.originAmount = 1;
    this.convert("origin");
  }

  updateAmountAndConvert(amount: number, changePlace: ChangePlace): void {
    if (changePlace === "origin") {
      this.originAmount = amount;
    } else {
      this.destinationAmount = amount;
    }

    this.convert(changePlace);
  }

  updateSymbolCodeAndConvert(
    symbolCode: string,
    changePlace: ChangePlace
  ): void {
    if (changePlace === "origin") {
      this.originSymbolCode = symbolCode;
    } else {
      this.destinationSymbolCode = symbolCode;
    }
    // ensure that only amount should be bidirectional
    this.convert("origin");
  }

  private convert(changePlace: ChangePlace): void {
    if (changePlace === "origin") {
      this.destinationAmount = RateService.convert(
        this.currencyValue,
        this.originSymbolCode,
        this.destinationSymbolCode,
        this.originAmount
      );
    } else {
      this.originAmount = RateService.convert(
        this.currencyValue,
        this.destinationSymbolCode,
        this.originSymbolCode,
        this.destinationAmount
      );
    }
  }
}
</script>
