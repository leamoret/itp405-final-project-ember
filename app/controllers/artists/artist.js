import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    endorseArtist(id, number) {
      var endorsements = number + 1;
      console.log(id)
      let promise = $.ajax({
        url: `http://localhost:3000/api/v1/artists/${id}`,
        type: 'PUT',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
          endorsement: endorsements
        })
      });
      promise.then((response) => {
        console.log('success');
        //FIND A WAY TO REFRESH THE PAGE
      });
    }
  }
});
