import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createArtist(e) {
      e.preventDefault();
      let promise = $.ajax({
        url: 'http://localhost:3000/api/v1/artists',
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
          name: this.get('name'),
          age: this.get('age'),
          biography: this.get('biography'),
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
          alert('Artist was added.')
        }
        this.set('name', null);
        this.set('age', null);
        this.set('biography', null);
        this.set('photo_url', null);
      });
    }
  }
});
