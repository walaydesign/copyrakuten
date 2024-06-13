$(".topNav_arrow").click(function() {
    $(this).parents(".topNav").find(".topNav_menu").fadeToggle(300);
    $(this).parents(".topNav").toggleClass("active");
})

$(".hot-topic_title").click(function(){
    $(this).parents(".hot-topic_item").find(".hot-topic_content").slideToggle(300);
    $(this).toggleClass("active");
})

$(".fix-ad_close").click(function(){
    $(this).parents(".fix-ad").hide();
})

$(".popup_close").click(function(){
    $(this).parents(".popup").hide();
})

$(".product-2nd_link_head").click(function(){
    $(this).parents(".product-2nd_link_item").find("ul").slideToggle(300);
    $(this).toggleClass("active");
})
