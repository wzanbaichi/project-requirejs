  // Exposure = (function(){
  // function _Exposure($target, callback) {
  //   this.$target = $target;
  //   this.callback = callback
  //   this.bind();
  //   this.checkShow();
  // }
  // _Exposure.prototype = {
  //   bind: function () {
  //     var _this = this;
  //     $(window).on('scroll', function () {
  //       _this.checkShow();
  //     })
  //   },
  //   isShow: function () {
  //     if ($(window).height() + $(window).scrollTop() > this.$target.offset().top + this.$target.outerHeight(true) && $(window).scrollTop() < this.$target.offset().top) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   },
  //   checkShow: function () {
  //     if (this.isShow()) {
  //       this.callback();
  //     }
  //   }
  // };

//   return{
//     init:function ($nodes) {
//       $nodes.each(function (index,node) {
//         new _Exposure($(node), function () {
//           setTimeout(function () {
//             this.$target.attr('src', this.$target.attr('data-src'))
//           }.bind(this), 300)
//         })
//       })
//     }
//   };
// });

define(['jquery'],function ($) {
  function _Exposure($target, callback) {
    this.$target = $target;
    this.callback = callback
    this.bind();
    this.checkShow();
  }
  _Exposure.prototype = {
    bind: function () {
      var _this = this;
      $(window).on('scroll', function () {
        _this.checkShow();
      })
    },
    isShow: function () {
      if ($(window).height() + $(window).scrollTop() > this.$target.offset().top + this.$target.outerHeight(true) && $(window).scrollTop() < this.$target.offset().top) {
        return true
      } else {
        return false
      }
    },
    checkShow: function () {
      if (this.isShow()) {
        this.callback();
      }
    }
  };

  return{
    init:function ($nodes) {
      $nodes.each(function (index,node) {
        new _Exposure($(node), function () {
          setTimeout(function () {
            this.$target.attr('src', this.$target.attr('data-src'))
          }.bind(this), 300)
        })
      })
    }
  };
})


// (new Exposure).init($('#portfolio .container ul li img'))

