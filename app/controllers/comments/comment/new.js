import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    // addComment(id, e) {
    //   e.preventDefault();
    //   let promise = $.ajax({
    //     url: 'http://localhost:3000/api/v1/comments',
    //     type: 'POST',
    //     contentType: "application/json; charset=utf-8",
    //     data: JSON.stringify({
    //       content: this.get('comment'),
    //       piece_id: id
    //     })
    //   });
    //   promise.then((response) => {
    //     //send message to user
    //     if(response.error) {
    //       alert('Error: ' + response.error)
    //     }
    //     else {
    //       //this.get('model').pushObject(response);
    //       alert('Thank you for your comment!')
    //     }
    //     this.set('comment', null);
    //   }).catch((error) => {
    //     console.log(error)
    //     alert('what the fuck is going on')
    //   });
    // }
  }
});
