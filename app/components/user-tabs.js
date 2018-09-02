import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    this.$().find('.tabs').tabs();
  },
  // willDestroyElement: function() {
  //    //remove handlers like this.$().off(...)
  // },
});
