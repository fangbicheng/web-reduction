<template>
  <div v-show="visible">
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast toast-wrap">
      <p class="weui-toast__content">{{message}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      message: '',
    };
  },
};
</script>

<style lang="less" scoped>
.toast-wrap {
  width: auto;
  height: auto;
  padding: 10px 20px;
}
</style>
