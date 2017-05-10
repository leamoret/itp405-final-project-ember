import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updatePiece(id, e) {
      e.preventDefault();
      let promise = $.ajax({
        url: `http://localhost:3000/api/v1/pieces/${id}`,
        type: 'PUT',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
          title: this.get('title'),
          price: this.get('price'),
          photo_url: this.get('photo_url')
        })
      });
      promise.then((response) => {
        //send message to user
        if(response.error) {
          alert('Error: ' + response.error)
        }
        else {
          alert('Piece was updated.')
          location.reload();
        }

        this.set('title', null);
        this.set('price', null);
        this.set('photo_url', null);

      }).catch(function(error) {
        console.log(error);
      });
    }
  }
});
