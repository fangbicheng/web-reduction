<template>
  <div class="detail-wrap">
    <div class="header">
      <div>{{detail.title}}</div>
      <div class="company">{{detail.company}}</div>
    </div>

    <div class="content">
      <div class="item">
        <label class="item-title">当前状态</label>
        <span class="item-value">{{status}}</span>
      </div>
      <div class="item">
        <label class="item-title">签约时间</label>
        <span class="item-value">{{detail.signTime | date}}</span>
      </div>
      <div class="item">
        <label class="item-title">开通账号</label>
        <span class="item-value">{{detail.openNumber}}</span>
      </div>
      <div class="item">
        <label class="item-title">扣款方式</label>
        <span class="item-value">{{detail.payWay}}</span>
      </div>
      <div class="item">
        <label class="item-title">详情</label>
        <span class="item-value">{{detail.detail}}</span>
      </div>
    </div>

    <div v-if="!isOpen" class="open" @click="operate">开通服务</div>
    <div v-else class="close" @click="operate">关闭服务</div>

    <my-dialog
      v-if="isShowDialog"
      :content="dialogContent"
      @onCancel="onCancel"
      @onConfirm="onConfirm">
    </my-dialog>
  </div>
</template>

<script>
import moment from 'moment';
import api from '@/api';
import MyDialog from '@/components/Dialog';

const statusMap = {
  0: '已停用',
  1: '生效中',
};

export default {
  components: {
    MyDialog,
  },
  data() {
    return {
      detail: {},
      isShow: false,
      dialogContent: '',
    };
  },
  computed: {
    status() {
      return statusMap[this.detail.status];
    },
    isOpen() {
      // 0-已停用，1-生效中
      if (this.detail.status === 1) {
        return true;
      }
      return false;
    },
    isShowDialog() {
      return this.isShow;
    },
  },
  filters: {
    date(val) {
      return moment(val).format('YYYY-MM-DD HH:mm');
    },
  },
  methods: {
    getReductionDetail() {
      api.reduction.getReductionDetail(this.$route.params.id)
        .then((res) => {
          if (res.status === 200 && res.data) {
            this.detail = res.data;
          }
        })
        .catch();
    },
    operate() {
      this.isShow = true;
      const status = this.isOpen ? '关闭' : '开通';
      this.dialogContent = `是否确认${status}${this.detail.title}`;
    },
    onConfirm() {
      const id = this.$route.params.id;
      this.isShow = false;
      if (this.isOpen) {
        api.reduction.close(id)
          .then((res) => {
            if (res.status === 200) {
              this.getReductionDetail(id);
            }
          })
          .catch();
      } else {
        api.reduction.open(id)
          .then((res) => {
            if (res.status === 200) {
              this.getReductionDetail(id);
            }
          })
          .catch();
      }
    },
    onCancel() {
      this.isShow = false;
    },
  },
  mounted() {
    this.getReductionDetail();
  },
};
</script>

<style lang="less" scoped>
.detail-wrap {
  height: 100%;
}
.header {
  padding: 12px 0;
  background-color: white;
  .company {
    font-size: 12px;
  }
}
.content {
  padding: 10px;
  position: relative;
  background-color: white;
  text-align: left;
  font-size: 13px;
  &::before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    transform-origin: 0 0;
    transform: scaleY(0.5);
  }
}
.item {
  display: flex;
  padding: 2px;
  .item-title {
    width: 16%;
    margin-right: 18px;
    color: rgba(0, 0, 0, 0.3);
  }
  .item-value {
    display: block;
    flex: 1;
  }
}
.open {
  padding: 10px;
  margin-top: 20px;
  background-color: white;
  font-size: 14px;
  color: #07c160;
}
.close {
  padding: 10px;
  margin-top: 20px;
  background-color: white;
  font-size: 14px;
  color: #fa5151;
}
</style>
