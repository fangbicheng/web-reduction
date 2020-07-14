import Loading from '@/components/Loading';

export default {
  install(Vue) {
    const VueLoading = Vue.extend(Loading);
    const loading = new VueLoading();
    loading.$mount(document.createElement('div'));
    document.body.appendChild(loading.$el);

    const innerLoading = {
      show(msg) {
        if (msg) loading.message = msg;
        loading.visible = true;
      },
      hide() {
        loading.visible = false;
      },
    };
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$loading = innerLoading;
  },
};
