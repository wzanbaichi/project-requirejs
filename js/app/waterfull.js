//
// Waterfull = function () {
//   function waterfull(ct,node){
//     this.$ct = ct;
//     this.$node = node;
//     this.init();
//     this.main();
//   }
//   waterfull.prototype = {
//     init:function(){
//       this.boxNum = parseInt(this.$ct.width()/this.$node.outerWidth(true));
//       this.heightArr = [];
//     },
//     main:function(){
//       var _this = this;
//       for(var i = 0;i<this.boxNum;i++){
//         this.heightArr[i] = 0;
//       }
//       this.$node.each(function () {
//         var minHeight = Math.min.apply(null,_this.heightArr);
//         var minIndex = _this.heightArr.indexOf(minHeight);
//         $(this).css({
//           top:_this.heightArr[minIndex],
//           left:$(this).outerWidth(true)*minIndex
//         })
//         _this.heightArr[minIndex] += $(this).outerHeight(true)
//       })
//     }
//   }
//   return {
//     init:new waterfull($('#portfolio ul'),$('#portfolio ul li'))
//   }
// }

define(['jquery'],function ($) {
  function waterfull(ct,node){
    this.$ct = ct;
    this.$node = node;
    this.init();
    this.main();
  }
  waterfull.prototype = {
    init:function(){
      this.boxNum = parseInt(this.$ct.width()/this.$node.outerWidth(true));
      this.heightArr = [];
    },
    main:function(){
      var _this = this;
      for(var i = 0;i<this.boxNum;i++){
        this.heightArr[i] = 0;
      }
      this.$node.each(function () {
        var minHeight = Math.min.apply(null,_this.heightArr);
        var minIndex = _this.heightArr.indexOf(minHeight);
        $(this).css({
          top:_this.heightArr[minIndex],
          left:$(this).outerWidth(true)*minIndex
        })
        _this.heightArr[minIndex] += $(this).outerHeight(true)
      })
    }
  }
  return {
    init:new waterfull($('#portfolio ul'),$('#portfolio ul li'))
  }
})
