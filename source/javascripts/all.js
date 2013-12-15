// require_tree .

$(window).scroll(function() {
    if ($(this).scrollTop() > $(window).height()) {
      $("#navigation").addClass("sticky");
    } else {
      $("#navigation").removeClass("sticky");
    }

});
