import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: (DS.attr('string'), {defaultValue: 'Sir'}),
  fName: DS.attr('string'),
  lName: DS.attr('string'),
  email: DS.attr('string'),
  sightings: DS.hasMany('sighting'),
  fullName: Ember.computed('fName', 'lName', function() { // fairly new shit
    return this.get('fName') + ' ' + this.get('lName');
  })
});
