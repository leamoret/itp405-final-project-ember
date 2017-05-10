import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return $.getJSON(`http://localhost:3000/api/v1/artists/${params.id}`);
  }
});
