import ReductionList from '@/pages/ReductionList';

describe('ReductionList', () => {
  it('生命周期钩子函数是否正常', () => {
    expect(typeof ReductionList.mounted).toBe('function');
  });
  it('数据选项是否正常', () => {
    expect(typeof ReductionList.data).toBe('function');
    const defaultData = ReductionList.data();
    expect(defaultData.reductionList).toEqual([]);
  });
});
