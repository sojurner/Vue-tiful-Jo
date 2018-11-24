window.Event = new class {
  constructor() {
    this.vue = new Vue();
  }

  fire(event, data = null) {
    this.vue.$emit(event, data);
  }

  listen(event, callback) {
    this.vue.$on(event, callback);
  }
}();

Vue.component('coupon', {
  template: `
  <input placeholder="Enter your code" @blur="onCouponApplied">
  `,
  methods: {
    onCouponApplied() {
      //------Component to component-----//
      Event.fire('applied');
      // -----Parent to child-----//
      // this.$emit('applied');
      // this.$on('applied', function() {
      // })
    }
  }
});

new Vue({
  el: '#root',
  data: {
    couponApplied: false
  },
  methods: {
    onCouponApplied() {
      this.couponApplied = true;
    }
  },
  created() {
    Event.listen('applied', () => {
      alert('Coupon has been applied');
    });
  }
});
