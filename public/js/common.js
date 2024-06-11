$(".topNav_arrow").click(function() {
    $(this).parents(".topNav").find(".topNav_menu").fadeToggle(300);
    $(this).parents(".topNav").toggleClass("active");
})