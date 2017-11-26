import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.attr('string'),
  createdAt: DS.attr('date'),// {defaultValue: new Date()}), // this doesn't seem to set a default date..
  sightedAt: DS.attr('date'),//, {defaultValue: new Date()}), // this doesn't seem to set a default date..
  cryptid: DS.belongsTo('cryptid'), // .belongsTo() introduced here..
  witnesses: DS.hasMany('witness')
});
