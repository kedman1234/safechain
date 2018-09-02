import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    let _this = this;
    this.$().find('.smodal').modal({
      dismissible: false,
      onOpenEnd: function() {
        console.log('modal open');
        _this.$().find('textarea#textarea2').on('onkeyup', 'change', 'keyup', () => {
          console.log(this);
        });
      }
    });


    this.$().find('input#input_text, textarea#textarea2').characterCounter();
    // this.$().find('select').formSelect();


  },
});
