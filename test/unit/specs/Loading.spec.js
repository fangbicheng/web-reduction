import { shallowMount } from '@vue/test-utils';
import Loading from '@/components/Loading';

const wrapper = shallowMount(Loading);

describe('Loading', async () => {
  it('数据响应是否正常', () => {
    wrapper.setData({
      visible: true,
      message: 'test',
    });
    expect(wrapper.vm.visible).toBe(true);
    expect(wrapper.vm.message).toBe('test');
  });
});

