import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //Get all artists from API
    return Ember.$.getJSON('http://localhost:3000/api/v1/pieces');
  }
});
