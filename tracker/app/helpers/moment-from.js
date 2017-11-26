import Ember from 'ember';

export function momentFrom(params/*, hash*/) {
  var time = window.moment(...params);
  //var formatted = time.fromNow();
  //var formatted = time.format('dddd MMMM Do, YYYY'); // Sunday March 20th, 2016
  var formatted = time.format('dddd MMMM D, YYYY'); // Sunday March 20, 2016
  return new Ember.Handlebars.SafeString(
    '<span class="text-primary">' + formatted + '</span>'
  );
}

export default Ember.Helper.helper(momentFrom);
