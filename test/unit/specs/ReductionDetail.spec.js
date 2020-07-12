import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import ReductionDetail from '@/pages/ReductionDetail';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();
const wrapper = shallowMount(ReductionDetail, {
  localVue,
  router,
});

describe('ReductionDetail', () => {
  it('生命周期钩子函数是否正常', () => {
    expect(typeof ReductionDetail.mounted).toBe('function');
  });
  it('数据选项是否正常', () => {
    expect(typeof ReductionDetail.data).toBe('function');
    const defaultData = ReductionDetail.data();
    expect(defaultData.detail).toEqual({});
    expect(defaultData.isShow).toBe(false);
    expect(defaultData.dialogContent).toBe('');
  });
  it('弹窗是否正常', async () => {
    wrapper.find('div.open').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.isShow).toBe(true);
  });
});
