import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deletePiece(id) {
      let promise = $.ajax({
        url: `http://localhost:3000/api/v1/pieces/${id}`,
        type: 'DELETE',
        contentType: "application/json; charset=utf-8",
      });
      promise.then((response) => {
        //send message to user
        if(response.error) {
          alert('Error: ' + response.error)
        }
        else {
          alert('Piece was deleted.')
          location.reload();
        }
      });
    }
  }
});
