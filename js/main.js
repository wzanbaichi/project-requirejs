requirejs.config({
  baseUrl: 'js',
  paths: {
    app: 'app',
  }
});

requirejs(['jquery','app/carousel','app/lazyload','app/waterfull','app/loadmore'],function ($,carousel,lazyload,waterfull,loadmore) {
  carousel.init($('.banner'));
  lazyload.init($('#portfolio .container ul li img'));
  loadmore.init;
})