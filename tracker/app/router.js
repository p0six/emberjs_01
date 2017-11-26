import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sightings', function() {
    this.route('new');
  });
  this.route('sighting', function() {
    this.route('index', {path: '/:sighting_id/'});
    this.route('edit', {path: "/:sighting_id/edit"});
    // the route below is was what specified in the text, but the one above
    // makes more sense....
    //this.route('edit', {path: "sightings/:sighting_id/edit"});
  });
  this.route('cryptids');
  this.route('cryptid', {path: 'cryptids/:cryptid_id'});
  this.route('witnesses');
});

export default Router;
