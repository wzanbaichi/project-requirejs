Carousel = (function () {

});


define(['jquery'],function ($) {
  function _Carousel(ct){
    this.ct = ct;
    this.init();
    this.bind();
    this.autoPlay();
  }
  _Carousel.prototype = {
    init:function () {
      this.img = this.ct.find('.content img');
      this.img.width(this.ct.width());
      this.content = this.ct.children('.content');
      this.next = this.ct.find('.play-next');
      this.pre = this.ct.find('.play-pre');
      this.btns = this.ct.find('.buttons');
      var first = this.content.find('li').eq(0).clone();
      var last = this.content.children().last().clone();
      this.content.prepend(last);
      this.content.append(first);
      this.content.css('width',this.content.children().length*this.ct.width());
      this.content.css('left',-this.ct.width());
      this.pageIndex = 0;
      this.isAnimate = false;
    },
    bind:function () {
      var _this = this;
      this.next.on('click',function (e) {
        e.preventDefault();
        this.playNext();
      }.bind(this));
      this.pre.on('click',function (e) {
        e.preventDefault();
        this.playPre();
      }.bind(this));
      this.btns.on('click','li',function () {
        _this.pageIndex = $(this).index();
        _this.play(_this.pageIndex);
      });

      this.ct.hover(function () {
        window.clearInterval(_this.interval)
      },function () {
        _this.interval = setInterval(function () {
          _this.playNext()
        }, 2000)
      });
    },
    playNext:function () {
      if(this.isAnimate)return
      this.isAnimate = true;
      this.pageIndex++;
      if(this.pageIndex ==5 ){
        this.content.css('left',-this.ct.width());
        this.play(1)
        this.pageIndex =1;
      }else{
        this.play(this.pageIndex);
      }
    },
    playPre:function () {
      if(this.isAnimate)return
      this.isAnimate = true;
      this.pageIndex--;
      if(this.pageIndex == -2){
        this.content.css('left',-this.ct.width()*4);
        this.play(2);
        this.pageIndex =2;
      }else{
        this.play(this.pageIndex);
      }
    },
    play:function (n) {
      var _this = this;
      this.content.animate({'left':-this.ct.width()*(n+1)},function(){
        _this.isAnimate = false;
      });
      this.btns.children('li').eq(n).addClass('active').siblings().removeClass('active');
      if(n==4)this.btns.children('li').eq(0).addClass('active').siblings().removeClass('active');
    },
    autoPlay(){
      var _this = this;
      this.interval = setInterval(function () {
        _this.playNext()
      },3000)
    }
  };
  return{
    init:function ($ct) {
      $ct.each(function (index,node) {
        new _Carousel($(node));
      })
    }
  }
})