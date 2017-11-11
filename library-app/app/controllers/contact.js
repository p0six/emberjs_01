import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  message: '',

  // validate form values before we enable submit button
  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isValidText: Ember.computed.gte('message.length', 5),
  isValid: Ember.computed.and('isValidEmail', 'isValidText'),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    sendMessage() {
      alert(`Message received from: ${this.get('emailAddress')}`);
      this.set('responseMessage', 'We got your message and we’ll get in touch soon');
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
