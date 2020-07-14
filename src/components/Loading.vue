<template>
  <div v-show="visible">
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast toast-wrap">
      <i class="weui-loading weui-icon_toast"></i>
      <p class="weui-toast__content">{{message}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      message: '数据加载中',
    };
  },
};
</script>

<style lang="less" scoped>

</style>
