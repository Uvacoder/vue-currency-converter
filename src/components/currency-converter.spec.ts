import { mount, Wrapper } from "@vue/test-utils";
import CurrencyConverter from "@/components/currency-converter.vue";
import { allSymbolsMock, latestMock } from "@/domain";

describe("currency-converter.vue", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let wrapper: Wrapper<CurrencyConverter & { [key: string]: any }>;

  beforeEach(() => {
    wrapper = mount(CurrencyConverter, {
      propsData: {
        symbols: allSymbolsMock,
        currencyValue: latestMock,
      },
    });
  });

  it("should create currency converter", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should ensure the default values on created", () => {
    expect(wrapper.vm.$data.originAmount).toEqual(1);
    expect(wrapper.vm.$data.originSymbolCode).toEqual("EUR");
    expect(wrapper.vm.$data.destinationSymbolCode).toEqual("USD");
    expect(wrapper.vm.$data.destinationAmount).toEqual(1.17);
  });

  it("should update origin amount and convert to destination", () => {
    wrapper.vm.updateAmountAndConvert(10, "origin");
    expect(wrapper.vm.$data.originAmount).toEqual(10);
    expect(wrapper.vm.$data.destinationAmount).toEqual(11.7);
  });

  it("should update destination amount and convert to origin", () => {
    wrapper.vm.updateAmountAndConvert(10, "destination");
    expect(wrapper.vm.$data.destinationAmount).toEqual(10);
    expect(wrapper.vm.$data.originAmount).toEqual(8.55);
  });

  it("should update origin symbol and convert to destination", () => {
    wrapper.vm.updateSymbolCodeAndConvert("KWD", "origin");
    expect(wrapper.vm.$data.originAmount).toEqual(1);
    expect(wrapper.vm.$data.destinationAmount).toEqual(3.55);
  });

  it("should update destination symbol and convert to origin", () => {
    wrapper.vm.updateSymbolCodeAndConvert("KWD", "destination");
    expect(wrapper.vm.$data.originAmount).toEqual(1);
    expect(wrapper.vm.$data.destinationAmount).toEqual(0.33);
  });

  it("should update destination symbol and amount and then convert to origin", () => {
    wrapper.vm.updateSymbolCodeAndConvert("KWD", "destination");
    expect(wrapper.vm.$data.originAmount).toEqual(1);
    expect(wrapper.vm.$data.destinationAmount).toEqual(0.33);
    wrapper.vm.updateAmountAndConvert(1, "destination");
    expect(wrapper.vm.$data.destinationAmount).toEqual(1);
    expect(wrapper.vm.$data.originAmount).toEqual(3.03);
  });
});
