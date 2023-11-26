$('.owl-carousel').owlCarousel({
        items:1,
        loop:false,
        center:true,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash'
    });


var item=document.getElementById("variant")
function white_scooty(){
    item.src="assets/images/scooty-3.jpg"
}
function red_scooty(){
    item.src="assets/images/scooty-4.jpg"
}
function blue_scooty(){
    item.src="assets/images/scooty-6.jpg"
}