Vue.component('message', {
  props: ['body', 'title'],
  template: `
  <article class="message">
    <div class="message-header">
      {{title}}
      <button class="delete" aria-label="delete"></button>
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
