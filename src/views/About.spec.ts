import { shallowMount } from "@vue/test-utils";
import About from "@/views/About.vue";

describe("About.vue", () => {
  it("should create about", () => {
    const wrapper = shallowMount(About);
    expect(wrapper).toBeTruthy();
  });
});
