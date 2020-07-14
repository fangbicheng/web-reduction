<template>
  <div>
    <div class="weui-media-box weui-media-box_small-appmsg">
      <div class="weui-cells">
        <a
          class="weui-cell weui-cell_active weui-cell_access weui-cell_example"
          v-for="item in reductionList"
          :key="item.id"
          @click="onItemClick(item)"
          href="javascript:"
          >
            <div class="weui-cell__bd weui-cell_primary title">
              <div>{{item.title}}</div>
              <div class="weui-media-box__desc company">{{item.company}}</div>
            </div>
            <span class="weui-cell__ft"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api';

export default {
  data() {
    return {
      reductionList: [],
    };
  },
  methods: {
    getReductionList() {
      this.$loading.show();
      api.reduction.getReductions()
        .then((res) => {
          if (res.status === 200 && res.data) {
            this.reductionList = res.data;
          }
        })
        .catch((err) => {
          this.$toast(err.data.msg);
        })
        .finally(() => {
          this.$loading.hide();
        });
    },
    onItemClick(item) {
      this.$router.push({
        name: 'ReductionDetail',
        params: { id: item.id },
      });
    },
  },
  mounted() {
    this.getReductionList();
  },
};
</script>

<style lang="less" scoped>
.title {
  display: flex;
  flex-direction: column;
}
.company {
  text-align: left;
}
</style>
