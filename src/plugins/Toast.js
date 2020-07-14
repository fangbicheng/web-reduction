import Toast from '@/components/Toast';

export default {
  install(Vue) {
    const VueToast = Vue.extend(Toast);
    const toast = new VueToast();
    toast.$mount(document.createElement('div'));
    document.body.appendChild(toast.$el);
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$toast = (msg, duration = 3000) => {
      toast.message = msg;
      toast.visible = true;
      setTimeout(() => {
        toast.visible = false;
      }, duration);
    };
  },
};
