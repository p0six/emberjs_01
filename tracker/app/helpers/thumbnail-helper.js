import Ember from 'ember';

export function thumbnailHelper(params/*, hash*/) {
  if (params[0] === undefined) {
    return 'assets/images/cryptids/blank_th.png';
  }
  return params[0];
}

export default Ember.Helper.helper(thumbnailHelper);
