import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('artists', function() {
    this.route('new');
    this.route('artist', {path: ':id'});
  });
  this.route('home');
  this.route('admin', function() {
    this.route('artists', function() {
      this.route('new');
      this.route('artist', {path: ':id'}, function() {
        this.route('new');
        this.route('update');
      });
    });
    this.route('pieces', function() {
      this.route('new');
      this.route('piece', {path: ':id'});
    });
  });
  this.route('pieces', function() {
    this.route('piece', {path: ':id'});
  });
  this.route('comments', function() {
    this.route('comment', {path: ':id'}, function() {
      this.route('new');
    });
  });
});

export default Router;
