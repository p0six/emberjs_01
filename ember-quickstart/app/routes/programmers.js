import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['Michael Romero', 'Mark Zuckerberg', 'In That Order']
  }
});
