//Configuration du defilement fluide ...
const smoothScroll = (anchor, duration) =>{
    const time = duration || 1000
    const ancre = anchor || '#'
    const scrollPosit = ancre !== '#' ? parseInt($( ancre ).offset().top) - 90 : 0
    $('html, body').animate({scrollTop:scrollPosit, time})
}

$('a[href^="#"]').on('click', function(event){
    event.preventDefault()
    const target = $(this).attr('href')
    smoothScroll(target)
})

//Activation de Aos init
AOS.init();

//sidenav init
document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems);
})