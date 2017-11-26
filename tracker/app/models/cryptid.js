import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  cryptidType: DS.attr('string'),
  profileImg: DS.attr('string'),
  sightings: DS.hasMany('sighting') // default config obj 'async: true '
  // i.e. sightings: DS.hasMany('sighting', {async: true})

});
