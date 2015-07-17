/*====================================
=            ON DOM READY            =
====================================*/
$(function() {
  $('.toggle-nav').click(function() {
    // Calling a function in case you want to expand upon this.
    toggleNav();
  });
});


/*========================================
=            CUSTOM FUNCTIONS            =
========================================*/
function toggleNav() {
  if ($('#site-wrapper').hasClass('show-nav')) {
    // Do things on Nav Close
    $('#site-wrapper').removeClass('show-nav');
  } else {
    // Do things on Nav Open
    $('#site-wrapper').addClass('show-nav');
  }

  //$('#site-wrapper').toggleClass('show-nav');
}

/*Change text in slide nav*/
var home = $(".default").html();
var work = $(".work").html();
var about_me = $(".about-me").html();
var resume = $(".resume").html();
var contact = $(".contact").html();


$("a.nav2").hover(function(){
  $(".default").html(work);
}, function(){
  $(".default").html(home);
});

$("a.nav3").hover(function(){
  $(".default").html(about_me);
}, function(){
  $(".default").html(home);
});

$("a.nav4").hover(function(){
  $(".default").html(resume);
}, function(){
  $(".default").html(home);
});

$("a.nav5").hover(function(){
  $(".default").html(contact);
}, function(){
  $(".default").html(home);
});

/* Adding random things to Fun section */
var save = $(".start").html();
var revenge = $(".revenge").html();
var chevy = $(".chevy").html();
var fourth = $(".fourth").html();
var contact = $(".contact").html();


$("a.nav7").hover(function(){
  $(".start").html(revenge);
}, function(){
  $(".start").html(revenge);
});

$("a.nav6").hover(function(){
  $(".start").html(save);
}, function(){
  $(".start").html(save);
});

$("a.nav8").hover(function(){
  $(".start").html(chevy);
}, function(){
  $(".start").html(chevy);
});

$("a.nav9").hover(function(){
  $(".start").html(fourth);
}, function(){
  $(".start").html(fourth);
});
