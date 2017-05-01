import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createArtist(e) {
      e.preventDefault();
      console.log(this.get('name'));
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
        this.set('name', null);
        this.set('age', null);
        this.set('biography', null);
        this.set('photo_url', null);
        //this.get('model').pushObject(response);
      });
    }
  }
});
