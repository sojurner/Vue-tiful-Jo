Vue.component('task-list', {
  template: `
    <div>
      <task v-for="task in tasks">
        {{task.description}}
      </task>
    </div>`,

  data() {
    return {
      tasks: [
        { description: 'Study PHP', completed: false },
        { description: 'Study Vue', completed: true },
        { description: 'Do coding challenges', completed: true }
      ]
    };
  }
});

Vue.component('task', {
  template: '<li><slot/></li>'
});

new Vue({
  el: '#root'
});
