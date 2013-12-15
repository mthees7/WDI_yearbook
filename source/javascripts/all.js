// require_tree .

$(window).scroll(function() {
    if ($(this).scrollTop() > $(window).height()) {
      $("#navigation").addClass("sticky");
    } else {
      $("#navigation").removeClass("sticky");
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= $(".corinne").offset().top) {
      $("#corinne-pic").addClass("hover");
    } else {
      $("#corinne-pic").removeClass("hover");
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= $(".albert").offset().top) {
      $("#albert-pic").addClass("hover");
      $("#corinne-pic").removeClass("hover");
    } else {
      $("#albert-pic").removeClass("hover");
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= $(".angie").offset().top) {
      $("#angie-pic").addClass("hover");
      $("#albert-pic").removeClass("hover");
    } else {
      $("#angie-pic").removeClass("hover");
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= $(".matt").offset().top) {
      $("#matt-pic").addClass("hover");
      $("#angie-pic").removeClass("hover");
    } else {
      $("#matt-pic").removeClass("hover");
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= $(".nick").offset().top) {
      $("#nick-pic").addClass("hover");
      $("#matt-pic").removeClass("hover");
    } else {
      $("#nick-pic").removeClass("hover");
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= ($(".riana").offset().top) + ($(".riana").height())) {
      $("#riana-pic").removeClass("hover");
      $("#nick-pic").removeClass("hover");
    } else if ($(this).scrollTop() >= $(".riana").offset().top) {
      $("#riana-pic").addClass("hover");
      $("#nick-pic").removeClass("hover");
    } else {
      $("#riana-pic").removeClass("hover");
    }
});

$(document).ready(function() {
  $("#ga-logo").on('click', function() {
    $('html, body').animate({scrollTop:$(window).height()}, 1000);
    //window.scrollTo(0, $(window).height())
  });
  $("#corinne").on('click', function() {
    $('html, body').animate({scrollTop:$(".corinne").offset().top}, 1000);
  });
  $("#albert").on('click', function() {
    $('html, body').animate({scrollTop:$(".albert").offset().top}, 1000)
  });
  $("#angie").on('click', function() {
    $('html, body').animate({scrollTop:$(".angie").offset().top}, 1000)
  });
  $("#matt").on('click', function() {
    $('html, body').animate({scrollTop:$(".matt").offset().top}, 1000)
  });
  $("#nick").on('click', function() {
    $('html, body').animate({scrollTop:$(".nick").offset().top}, 1000)
  });
  $("#riana").on('click', function() {
    $('html, body').animate({scrollTop:$(".riana").offset().top}, 1000)
  });
});