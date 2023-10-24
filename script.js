$(".bi-list").click(()=>{
    $("#mobile-nav").css("width", "100%")
})

$(".bi-x").click(()=>{
    $("#mobile-nav").css("width", "0%")
})

$('.color').click(function(){
    $(".color").css("border", "1px solid #A6A6A6")
    $(this).css("border", "2px solid rgb(0,70,70)")
    let parent = $(this).parent()
    let url = $(this).attr("data-url")
    $(parent).children('a').first().children('img').first().attr('src', url )
})

$("#side-images-wrapper img").click(function(){
    let src = $(this).attr('src')
    $("#product-img-wrapper .main").attr("src", src)
})
$(".butt.fit").click(function(){
    $(".butt.fit").css("border" ,"none")
    $(this).css("border", "2px solid rgb(110, 110, 110)")
})
$(".butt.waist").click(function(){
    $(".butt.waist").css("border" ,"none")
    $(this).css("border", "2px solid rgb(110, 110, 110)")
})