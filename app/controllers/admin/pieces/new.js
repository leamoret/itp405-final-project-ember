import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createPiece(e) {
      e.preventDefault();
      let promise = $.ajax({
        url: 'http://localhost:3000/api/v1/pieces',
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
          title: this.get('title'),
          price: this.get('price'),
          artist_name: this.get('artist_name'),
          photo_url: this.get('photo_url')
        })
      });
      promise.then((response) => {
        //send message to user
        if(response.error) {
          alert('Error: ' + response.error)
        }
        else {
          this.get('model').pushObject(response);
          alert('New piece was added.')
        }
        this.set('title', null);
        this.set('price', null);
        this.set('artist_name', null);
        this.set('photo_url', null);
      });
    }
  }
});
