
//высота wellcome page
// $(document).ready(function(){
//     $('.header').height($(window).height());
// }); 
function headerHeight(){
  const header = document.querySelector(".header");
  const over = document.querySelector(".overlay");
  const h = window.outerHeight;
  const w = window.outerWidth;
  console.log(w);
  if(w < 992){
    if(h > w) {  
      header.style.height = `${h}px`;
      over.style.height = `${h}px`;
    } else {  
      header.style.height = `${h * 1.5}px`;
      over.style.height = `${h * 1.5}px`;
    }
  }else{
    header.style.height = `${window.innerHeight}px`;
    over.style.height = `${window.innerHeight}px`;
  }
}

headerHeight();

// смена ориентации экрана
window.addEventListener("resize", function()  {
  headerHeight();
}, false);

// скрол меню  
$(".navbar-nav a").click(function(){
    $("body,html").animate({
     scrollTop:$("#" + $(this).data('value')).offset().top
    },500);
});

//progres bar
function progresBar(){
  const progressTag = document.querySelector(".progresbar");
  const bodyTag = document.querySelector("body");

  document.addEventListener("scroll", function(){
    const pixels = window.pageYOffset;
    const pageHeight = bodyTag.getBoundingClientRect().height;
    const totalScrollableDistance = pageHeight - window.innerHeight;
    const percentage = pixels / totalScrollableDistance;

    progressTag.style.width = `${100 * percentage}%`;
  });

};

progresBar();

// Stoped and running animation
function bodyScroll() {
  let scrollTimer = -1;
  const cabina = document.querySelector(".cabina");
  const corp = document.querySelector(".corpus");
  const Lwheel = document.querySelector(".L-wheel");
  const Rwheel = document.querySelector(".R-wheel");
  const clouds = document.querySelector(".clouds");

  cabina.style.webkitAnimationPlayState = "running";
  corp.style.webkitAnimationPlayState = "running";
  Lwheel.style.webkitAnimationPlayState = "running";
  Rwheel.style.webkitAnimationPlayState = "running";
  clouds.style.webkitAnimationPlayState = "running";

  if (scrollTimer != -1)
    clearTimeout(scrollTimer);

  scrollTimer = window.setTimeout(function scrollFinished() {
    cabina.style.webkitAnimationPlayState = "paused";
    corp.style.webkitAnimationPlayState = "paused";
    Lwheel.style.webkitAnimationPlayState = "paused";
    Rwheel.style.webkitAnimationPlayState = "paused";
    clouds.style.webkitAnimationPlayState = "paused";
  }, 500);
};
//"выбрать язык"
function LanguageMenu(){
  const pixels = document.documentElement.clientWidth;
  
  //кнопка "выбрать язык" <992px
  function langForSm(){
    var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".lang_btn");
    var closeButton = document.querySelector(".close_btn");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    };

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        };
    };

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
  };

  if(pixels > 992){
    //кнопка "выбрать язык" >=992px
    $(function(){
      $(".lang_btn").click(function() {
        $('.lng_for_md').removeClass('hidden_men');
        $('.lng_for_md').addClass('showed_men');
      });

      $(document).on('click', function(e) {
        if (!$(e.target).closest(".l_menu").length) {
          $('.lng_for_md').removeClass('showed_men');
          $('.lng_for_md').addClass('hidden_men');
        };
      });
    });
  }else{
    langForSm();
  }
};

LanguageMenu();

//filter bar 
$(function(){
  const arrow = document.querySelectorAll(".arrow1");

  for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
    const arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
    });
  };
});

// close button for chip
$(".closebtn").click(function() {
  let inputChipValue = [];
  let inputValue = [];
  let che = $('input[type="checkbox"]:checked').length - 1;
  let lnth = 0;

  inputChipValue.push($(this).attr("value"));
  $("." + inputChipValue).hide().removeClass("d-flex");
  $('input[value="' + inputChipValue + '"]').prop("checked", false);

  $('input[type="checkbox"]:checked').each(function() {
    inputValue.push($(this).attr("value"));
    showValue(this);
  });

  for (let i = 0; i < inputValue.length; i ++){
    lnth += $('.' + inputValue[i]).length;
  };

  if (che >= 1 && lnth == che ){
    $('.alert').removeClass('hide');
  }else{
    $('.alert').addClass('hide');
  };

  if(che == 0){
    $(".VV").slice(0, 3).show();
  };
});

// кнопка Load More ????
$("#loadMore").on('click', function (e) {
  let val = [];
  let a = 0;
  if($('input[type="checkbox"]:checked').length == 0){
    $(".VV:hidden").slice(0, 3).slideDown();
    
    if ($(".VV:hidden").length == 0) {
      $("#loadMore").fadeOut('slow');
    }
  }else{
    $('input[type="checkbox"]:checked').each(function(){
      val.push($(this).attr("value"));
    });
    
    console.log(val);
    for(let i = 0; i < val.length; i++){
      
      $("." + val[i] + ":hidden").slice(0, 3).slideDown();
    }
    console.log($('.traktor').length);
    for(let i = 0; i < val.length; i++){
      a += $("." + val[i] + ":hidden").length;
    }
    if (a == 0){
      $("#loadMore").fadeOut('slow'); 
    }
  }
});

//работа cataloge
$(function () {
  
  $(".VV").slice(0, 3).show();
  $(".chip").hide('fast').removeClass('d-flex');
  $("#loadMore").fadeIn('fast');

  $('input[type="checkbox"]').click(function() {
    let che = $('input[type="checkbox"]:checked').length;
    let lnth = 0;
    let inputValue = [];
    
    $(".VV").hide();
    $(".chip").hide().removeClass('d-flex');    
    $('.alert').addClass('hide');
    
    $('input[type="checkbox"]:checked').each(function() {
      inputValue.push($(this).attr("value"));
      showValue(this);
    });
    
    for (let i = 0; i < inputValue.length; i ++){
      lnth += $('.VV' + '.' + inputValue[i]).length;
    };

    if (che >= 1 && lnth < che ){
      $('.alert').removeClass('hide');
    }else{
      $('.alert').addClass('hide');
    };

    if(che == 0){
      $(".VV").slice(0, 3).show();
    };
    
    if(lnth > 3 || lnth < 1){
      $("#loadMore").fadeIn('fast');
    }else{
      $("#loadMore").fadeOut('slow');
    };
  }); 
});

function showValue(el){
  $(".VV" + "." + $(el).attr("value")).slice(0, 3).slideDown();
  $(".chip" + "." + $(el).attr("value")).show().addClass('d-flex');
};

// Подробнее для товара 
function DitailsForGoods(){
  var trigger = document.querySelectorAll(".models .card .btn");
  var modal = document.querySelector(".modal_for_goods");
  var closeButton = document.querySelector(".close_btn_goods");

  function toggleModal() {
      modal.classList.toggle("show-modal");
  };

  function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    };
  };

  trigger.forEach(e =>{
    e.addEventListener("click", toggleModal)
  });
  closeButton.addEventListener("click", toggleModal);
  window.addEventListener("click", windowOnClick);
};
DitailsForGoods();

// форма обратной связи
$(function($){
  $("#inputPhone").mask("+38(999) 999 99 99", {placeholder:" "});
});

$('.contact_form input').click(function(){
  $(this).prop('required', true);
});

// ограничения для Имя 
function justWords(event) {
  let charCode = (event.which) ? event.which : event.keyCode;

  if (charCode == 39 || (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode == 137 || charCode == 139 || charCode == 1025 || charCode == 1028 || (charCode >= 1030 && charCode <= 1131) || (charCode >= 1040 && charCode <= 1103) || charCode == 1105 || charCode == 1108 || (charCode >= 1110 && charCode <= 1111) || (charCode >= 1168 && charCode <= 1169)){
    
  }else {
    event.preventDefault();
  };
};

// ограничения для Email 
function noSpcialCharForEmail(event){
  let charCode = (event.which) ? event.which : event.keyCode;

  if ((charCode >= 45 && charCode <= 46) || (charCode >= 48 && charCode <= 57) || (charCode >= 64 && charCode <= 90) || charCode == 95 || (charCode >= 97 && charCode <= 123)){
    
  }else {
    event.preventDefault();
  };
};

// ограничения для текстового поля 
function noSpcialChar(event) {
  let charCode = (event.which) ? event.which : event.keyCode;
  
  if ((charCode >= 32 && charCode <= 34) || charCode == 37 || (charCode >= 39 && charCode <= 41) || (charCode >= 43 && charCode <= 46) || (charCode >= 48 && charCode <= 58) || charCode == 61 || (charCode >= 63 && charCode <= 90) || charCode == 95 || (charCode >= 97 && charCode <= 122) || charCode == 137 || charCode == 139 ||  charCode == 147 || charCode == 154 || (charCode >= 160 && charCode <= 165) || (charCode >= 174 && charCode <= 175) || charCode == 1025 || charCode == 1028 || (charCode >= 1030 && charCode <= 1131) || (charCode >= 1040 && charCode <= 1103) || charCode == 1105 || charCode == 1108 || (charCode >= 1110 && charCode <= 1111) || (charCode >= 1168 && charCode <= 1169)){
 
  }else {
    event.preventDefault();
  };
};

// получение данных с формы
function getFormValues(){
  const {form} = document.forms;

  function formValues (event){
    event.preventDefault();

    const dataForm = new FormData(form);
    const values = Object.fromEntries(dataForm.entries());

    console.log(values);
  };

  form.addEventListener('submit', formValues);
};

getFormValues();

