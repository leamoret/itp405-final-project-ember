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
  this.route('about');
  this.route('admin', function() {
    this.route('artists', function() {
      this.route('new');
    });
    this.route('pieces');
  });
  this.route('pieces', function() {
    this.route('piece');
  });
});

export default Router;
