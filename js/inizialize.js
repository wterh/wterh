document.body.onload = function(){
    var l = document.querySelector('.loader');
    fadeOut(l);
};

function fadeOut(o) {
    for(var i = 0;i < 40;i++) {
        sleep(25);
        o.style.opacity = o.style.opacity-0.025;
        //console.log(o.style.opacity);
    }
    o.style.display = 'none';
}
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}
var swiperH = new Swiper('.swiper-container-h', {
    spaceBetween: 50,
    mousewheel: true,
    hashNavigation: {
        watchState: true,
    },
    pagination: {
        el: '.swiper-pagination-h',
        clickable: true,
    },
});
var swiperV = new Swiper('.swiper-container-v', {
    direction: 'vertical',
    spaceBetween: 50,
    pagination: {
        el: '.swiper-pagination-v',
        clickable: true,
    },
});