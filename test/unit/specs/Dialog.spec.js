import { shallowMount } from '@vue/test-utils';
import MyDialog from '@/components/Dialog';

const wrapper = shallowMount(MyDialog, {
  propsData: {
    title: 'Hello',
    content: 'World',
  },
});

describe('MyDialog', async () => {
  it('输入是否正常', () => {
    expect(wrapper.props().title).toBe('Hello');
    expect(wrapper.props().content).toBe('World');
  });
  it('事件触发是否正常', async () => {
    wrapper.vm.$emit('onCancel');
    wrapper.vm.$emit('onConfirm');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted('onCancel')).toBeTruthy();
    expect(wrapper.emitted('onConfirm')).toBeTruthy();
    expect(wrapper.emitted('onCancel').length).toBe(1);
    expect(wrapper.emitted('onConfirm').length).toBe(1);
  });
});

