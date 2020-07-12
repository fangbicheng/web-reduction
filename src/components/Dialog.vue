<template>
  <div class="js_dialog">
    <div class="weui-mask"></div>
    <div class="weui-dialog">
      <div v-if="title" class="weui-dialog__hd">
        <strong class="weui-dialog__title"></strong>
      </div>
      <div class="weui-dialog__bd">{{content}}</div>
      <div class="weui-dialog__ft">
        <a href="javascript:"
          class="weui-dialog__btn weui-dialog__btn_default"
          @click="$emit('onCancel')">
          取消
        </a>
        <a href="javascript:"
          class="weui-dialog__btn weui-dialog__btn_primary"
          @click="$emit('onConfirm')">
          确定
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>

</style>
