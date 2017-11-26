import DS from 'ember-data';
//import JSONAPIAdapter from 'ember-data/adapters/json-api';
// the line above was requested by the text, but apparently unused..

export default DS.JSONAPIAdapter.extend({
  host: 'https://bnr-tracker-api.herokuapp.com',
  namespace: 'api'
});
