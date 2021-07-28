import { mount } from "@vue/test-utils";
import ExchangeHostConverter from "@/components/exchange-host-converter.vue";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { ExchangeRateHostAPI } from "@/data";
import { sucessSymbolsResponseMock, latestMock } from "@/domain";

describe("exchange-host-converter.vue", () => {
  beforeEach(() => {
    const mock = new MockAdapter(axios);
    mock
      .onGet(ExchangeRateHostAPI.SYMBOLS_API_URL)
      .reply(200, sucessSymbolsResponseMock);
    mock.onGet(ExchangeRateHostAPI.LATEST_API_URL).reply(200, latestMock);
  });
  it("should create", () => {
    const wrapper = mount(ExchangeHostConverter);
    expect(wrapper).toBeTruthy();
  });
});
