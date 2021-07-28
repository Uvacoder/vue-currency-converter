import { mount } from "@vue/test-utils";
import SwopGraphqlConverter from "@/components/swop-graphql-converter.vue";
import { allSymbolsMock, latestMock } from "@/domain";

describe("swop-graphql-converter.vue", () => {
  it("should create", () => {
    const wrapper = mount(SwopGraphqlConverter);
    wrapper.setData({
      currencyValue: latestMock,
      symbols: allSymbolsMock,
    });
    expect(wrapper).toBeTruthy();
  });
});
