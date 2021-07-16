import { shallowMount, Wrapper } from "@vue/test-utils";
import CurrencySelector from "@/components/currency-selector.vue";
import { allSymbolsMock } from "@/domain";

describe("currency-selector.vue", () => {
  const selectedSymbol = "BRL";
  const amount = 10;
  let wrapper: Wrapper<CurrencySelector>;

  beforeEach(() => {
    wrapper = shallowMount(CurrencySelector, {
      propsData: {
        symbols: allSymbolsMock,
        selectedSymbol,
        amount,
      },
    });
  });

  it("should create a currency selector", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should validate selectedSymbol prop", () => {
    const selectElement = wrapper.find("select").element as HTMLSelectElement;
    expect(selectElement.value).toEqual(selectedSymbol);
  });

  it("should validate amount prop", () => {
    const inputElement = wrapper.find('input[type="number"]')
      .element as HTMLInputElement;
    expect(inputElement.value).toEqual(amount.toString());
  });

  it("should validate amount emit", async () => {
    const numberInput = wrapper.find('input[type="number"]');
    await numberInput.setValue(20);
    expect(wrapper.emitted()).toEqual({ "update:amount": [["20"]] });
  });

  it("should validate selectedSymbol emit", async () => {
    const textInput = wrapper.find("select");
    await textInput.setValue("USD");
    expect(wrapper.emitted()).toEqual({ "update:selectedSymbol": [["USD"]] });
  });
});
