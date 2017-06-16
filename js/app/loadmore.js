

define(['jquery'],function ($) {

    function loadmore(ct) {
      this.$ct = ct;
      this.page = 1;
      this.bind();
    }
    loadmore.prototype = {
      json:function (num) {
        var script = '<script id=\'script\'src=\'https://platform.sina.com.cn/slide/album_tech?jsoncallback=func&app_key=1271687855&num=' + num + '+&page=' + this.page + '\'>' + '<' + '/script>';
        $('body').append(script);
        $('body #script').remove();
        this.page++;
      },
      bind:function () {
        var _this = this;
        this.$ct.on('click',function () {
          _this.json(6)
        })
      }
    }
    return{
      init:new loadmore($('#loadmore'))
    }
})