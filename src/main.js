// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// @ts-ignore
import App from './App';

Vue.config.productionTip = false;

// @ts-ignore
// eslint-disable-next-line import/prefer-default-export
export const eventBus = new Vue({
  methods: {
    increaseAge(age) {
      this.$emit('increaseAge', age);
    },
    decreaseAge(age) {
      this.$emit('decreaseAge', age);
    },
  },
});

// @ts-ignore
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
