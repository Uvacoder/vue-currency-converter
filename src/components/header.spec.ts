import { shallowMount } from "@vue/test-utils";
import Header from "@/components/header.vue";

describe("header.vue", () => {
  it("should create header", () => {
    const wrapper = shallowMount(Header, {
      stubs: ["router-link"],
    });
    expect(wrapper).toBeTruthy();
  });
});
