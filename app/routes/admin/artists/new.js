import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('admin/artists');
  }
});
