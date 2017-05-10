import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    doSomething() {
      var myHeading = document.querySelector('h3');
      myHeading.textContent = 'Hello world!';
      alert('Yay, I love chocolate ice cream!');
    }
  }
});
