window.onload = function () {
  $('body').addClass('loaded', function () {
    //this happens after the preloader goes bye bye

  });
  $('.collapsible').collapsible({
    accordion: true
  });
  NProgress.done();
  $('.modal-trigger').leanModal();

  $('.flexslider').flexslider({
    animation: "swing",
    useCSS: false,
    easing: "easeOutQuad",
    smoothHeight: true,
    controlNav: true,
    slideshowSpeed: 6000,
    directionNav: true,
    animationLoop: true

  });
};
