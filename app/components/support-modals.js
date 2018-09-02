import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    this.$().find('.smodal').modal({
      dismissible: false
    });
    // this.$().find('select').formSelect();
    // console.log(this.$().find('textarea#textarea2'));
  },
  didRender() {
    this.$().find('textarea#textarea2').characterCounter();
  },
  actions: {
    onTextFiledChange: function(value) {
      if(value.length) {
        this.$().find('.btn-send').removeClass('disabled');
      } else {
        this.$().find('.btn-send').addClass('disabled');
      }
    }
  },
});
