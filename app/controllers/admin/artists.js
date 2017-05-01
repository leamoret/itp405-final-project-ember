import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteArtist(id) {
      let promise = $.ajax({
        url: `http://localhost:3000/api/v1/artist/${id}`,
        type: 'DELETE',
        contentType: "application/json; charset=utf-8",
      });
      promise.then((response) => {
        console.log('Artist deleted');
      });
    }
  }
});
