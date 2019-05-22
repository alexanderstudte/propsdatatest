import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe(`HelloWorld`, () => {
  it(`tests props of Panel`, () => {
    const wrapper = shallowMount(HelloWorld);

    expect(wrapper.find(`panel-stub`).props().title).toBe(`Marc-Uwe`);
  });
});

