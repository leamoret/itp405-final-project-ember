import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    endorseArtist(id, number, e) {
      e.preventDefault();
      var endorsements = number + 1;

      let promise = Ember.$.ajax({
        url: `http://localhost:3000/api/v1/artists/${id}`,
        type: 'PUT',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
          endorsement: endorsements
        })
      });
      promise.then((response) => {
        alert('Thank you for endorsing this artist.')
        location.reload();
      });
    }
  }
});
