import $ from 'jquery';
import Component from '@ember/component';
import { scheduleOnce } from '@ember/runloop';

export default Component.extend({
  tagName: 'header',
  classNames: ['header'],
  didInsertElement() {
    // let self = this;
    // this.$().find('a').on('click', function() {
    //     if ($(this).hasClass('ember-view')) {
    //         self.$().find('.t_menu').sideNav('hide');
    //     }
    // });
    // side nav
    //this.$().find('.sidenav').sidenav();
    //() => {
    //     this.hideParentForACL();
    // }
    // console.log(this.$().find("body").hasClass("sidenav-open"));
    /*****************/

    // top nav dropdown
    scheduleOnce('afterRender', this, function() {
      // nav collapsible
      $('.collapsible').collapsible();
      this.$().find('.dropdown-trigger').dropdown();
      this.$().find('.sidenav-trigger').on('click', () => {
        //e.preventDefault;
        if($('body').hasClass("sidenav-open")) {
          this.$().find('.sidenav').css("transform","translateX(-105%)");
          $('body').removeClass("sidenav-open");
        } else {
          this.$().find(".sidenav").css("transform","translateX(0%)");
          $("body").addClass("sidenav-open");
        }
      });
    });
    /*****************/
  },
  willDestroyElement: function() {
     //remove handlers like this.$().off(...)
     this.$().find('.sidenav-trigger').off('click');
  },
});
