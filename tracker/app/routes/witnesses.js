import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    /*
    let witnessRecord = this.store.createRecord('witness', {
      fName: "Todd",
      lName: "Gandee",
      email: "tgandee@bignerdranch.com"
    });
    return [witnessRecord]; */
    return this.store.findAll('witness');
  }
});
