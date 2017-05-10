import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteArtist(id) {
      let promise = $.ajax({
        url: `http://localhost:3000/api/v1/artists/${id}`,
        type: 'DELETE',
        contentType: "application/json; charset=utf-8",
      });
      promise.then((response) => {
        //send message to user
        if(response.error) {
          alert('Error: ' + response.error)
        }
        else {
          alert('Artist was deleted along with all his/her pieces.')
          location.reload();
        }
      });
    }
  }
});
