Vue.component('message', {
  props: ['body', 'title'],
  data() {
    return {
      isVisible: true
    };
  },
  template: `
  <article class="message" v-show="isVisible">
    <div class="message-header">
      {{title}}
      <button class="delete" @click="isVisible=!isVisible" aria-label="delete"></button>
    </div>
    <div class="message-body">
      {{body}}
    </div>
  </article>
  `
});

new Vue({
  el: '#root'
});
