// owl carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})


// script video
$(document).ready(function(){

    $(".js-video-button").modalVideo({
        youtube:{
            controls:0,
            nocookie: true
        }
    });

    $('.PageOverlay').hide();
    $('.responsiveMenu').hide();


    $('.shopDiv').hide();
    $('.shopDivWithContent').css('visibility','hidden')

    $('.BasketPopUp').hide();

    $('.ItemInscription').click(function () {
        $('.BasketPopUp').fadeIn(500);
        $('.shopDivWithContent').css('visibility','visible');
        $('.shopDivWithContent').hide()
    })
    $('.BasketPopUp').click(function () {
        $('.BasketPopUp').fadeOut(500);
    })

    $(".menu4").on('mouseover',function(){
        $('.shopDiv').show()
    })

    $(".menu4").on('mouseout',function(){
        $('.shopDiv').hide()
    })

    $(".menu4").on('mouseover',function(){
        $('.shopDivWithContent').show()
    })

    $(".menu4").on('mouseout',function(){
        $('.shopDivWithContent').hide()
    })

    $('.responsiveMenuClick').click(function () {
        $('.PageOverlay').fadeIn(500, function () {
            $('.responsiveMenu').toggle('slide', 'right',300)
        })
    })
    $('.PageOverlay').click(function () {
        $(this).fadeOut(10)
        $('.responsiveMenu').toggle('slide', 'left',500)
    })
});


// tabs lecture cours
function Tabs() {
    var bindAll = function() {
      var menuElements = document.querySelectorAll('[data-tab]');
      for(var i = 0; i < menuElements.length ; i++) {
        menuElements[i].addEventListener('click', change, false);
      }
    }
  
    var clear = function() {
      var menuElements = document.querySelectorAll('[data-tab]');
      for(var i = 0; i < menuElements.length ; i++) {
        menuElements[i].classList.remove('active');
        var id = menuElements[i].getAttribute('data-tab');
        document.getElementById(id).classList.remove('active');
      }
    }
  
    var change = function(e) {
      clear();
      e.target.classList.add('active');
      var id = e.currentTarget.getAttribute('data-tab');
      document.getElementById(id).classList.add('active');
    }
  
    bindAll();
  }
  
  var connectTabs = new Tabs();


// form input custom
document.querySelector("html").classList.add('js');

var fileInput  = document.querySelector( ".input-file" ),  
    button     = document.querySelector( ".input-file-trigger" ),
    the_return = document.querySelector(".file-return");
    
button.addEventListener( "keydown", function( event ) {  
    if ( event.keyCode == 13 || event.keyCode == 32 ) {  
        fileInput.focus();  
    }  
});
button.addEventListener( "click", function( event ) {
    fileInput.focus();
    return false;
});  
fileInput.addEventListener( "change", function( event ) {  
    the_return.innerHTML = this.value;  
});  


// tabs lecture cours
function Tabs() {
var bindAll = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
    menuElements[i].addEventListener('click', change, false);
    }
}
  
var clear = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
        menuElements[i].classList.remove('active');
        var id = menuElements[i].getAttribute('data-tab');
        document.getElementById(id).classList.remove('active');
    }
}
  
var change = function(e) {
    clear();
    e.target.classList.add('active');
    var id = e.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('active');
}
  
    bindAll();
}
  
var connectTabs = new Tabs();


// accordeon
$(document).ready(function(){
    $('.collapse').on('shown.bs.collapse', function(){
      $(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
    }).on('hidden.bs.collapse', function(){
      $(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
    });
});

// tab profil

  