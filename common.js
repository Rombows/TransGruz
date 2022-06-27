$(document).ready(function(){
  $('.slide-one').owlCarousel({
    margin:10,
    responsiveClass:true,
    center: true,
    smartSpeed: 600,
    /*autoplay:true,
    autoplaySpeed:1000,
    smartSpeed:1500,
    autoplayHoverPause: true,*/
    /*navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"],*/
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
});
$('.slide-two').owlCarousel({
  loop:true,
  items: 1,
  margin:10,
  onTranslated: animateImgFunc,
  onChanged: animateImgClear,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});
function animateImgFunc() {
  $(".owl-carousel .active .inner-testimonial img").addClass("animated fadeIn full-opacity");
}

function animateImgClear() {
  $(".owl-carousel .active .inner-testimonial img").removeClass("animated fadeIn full-opacity");
}


});

// Блок коротка інформація про компанію //
$(document).ready(function(){

  var show = true;
  $(window).on("scroll", function(){

    if(!show) return false;

    var w_top = $(window).scrollTop();
    var e_top = $("#counts").offset().top;

    var w_height = $(window).height();
    var d_height = $(document).height();

    //console.log(w_top + 800 + " " + e_top);

    if(w_top + 800 >= e_top || w_height + w_top == d_height){
      $(".spincrement").spincrement({
        thousandSeparator: "",
        duration: 3500
      });

      show = false;
    }

  });
});

// Анімація при скролі
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0){
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(){
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if(animItemHeight > window.innerHeight){
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if((pageYOffset > animItemOffset - animItemPoint ) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      }else {
        if (!animItem.classList.contains('_anim-no-hide')) {
           animItem.classList.remove('_active');
        }
      }
    }
  }
  function offset(el){
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  setTimeout(() =>{
    animOnScroll();
  }, 200);

}

$(function() {

$('.sendform').click('click', function(e) {

    //var name = $("#name").val().trim();
    //var phone = $("#phone").val().trim();
    //var adress = $("#adress").val().trim();
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $('form.tagForm').serialize(),
        success: function(response) {
          $("#ModalFeedback").modal('hide');
          $("#ModalOrderTruck").modal('hide');
          $("#succsesModal").modal('show');
        },
        error: function() {
          $("#exampleModal3").modal('show');
        }
    });
    return false;
});
});

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#navbar_menu").cloneNode(1);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e){
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}
function renderPopup(){
  popup.appendChild(menu);
}

// Заміна текста в підсказці
$('#form input[type=text]').on('change invalid', function() {
    var textfield = $(this).get(0);
    textfield.setCustomValidity('');

    if (!textfield.validity.valid) {
        textfield.setCustomValidity('Заповніть це поле');
    }
});



$(document).ready(function(){
  $("#phonefeedback").mask("+380 (99) 999-9999");
  $("#phoneordertruck").mask("+380 (99) 999-9999");
});
