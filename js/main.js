
//загрузка основной страницы
$(document).ready(function(){
    $('.header').height($(window).height());
}); 

//скрол меню  
$(".navbar-nav a").click(function(){
    $("body,html").animate({
     scrollTop:$("#" + $(this).data('value')).offset().top
    },500);
    
});
//шкала просмотра страницы
function progresBar(){
  const progressTag = document.querySelector(".progresbar");
  const bodyTag = document.querySelector("body");
  const cabina = document.querySelector(".cabina");
  const corp = document.querySelector(".corpus");
  const Lwheel = document.querySelector(".L-wheel");
  const Rwheel = document.querySelector(".R-wheel");
  const clouds = document.querySelector(".clouds");

  document.addEventListener("scroll", function(){
    const pixels = window.pageYOffset;
    const pageHeight = bodyTag.getBoundingClientRect().height;
    const totalScrollableDistance = pageHeight - window.innerHeight;

    const percentage = pixels / totalScrollableDistance;

    progressTag.style.width = `${100 * percentage}%`;

    cabina.style.webkitAnimationPlayState = "running";
    corp.style.webkitAnimationPlayState = "running";
    Lwheel.style.webkitAnimationPlayState = "running";
    Rwheel.style.webkitAnimationPlayState = "running";
    clouds.style.webkitAnimationPlayState = "running";
  });

};

progresBar();

//кнопка "выбрать язык"
$(function(){
  $(".lang_btn").click(function() {
    $('.lang_menu').removeClass('hidden_men');
    $('.lang_menu').addClass('showed_men');
  });

  $(document).on('click', function(e) {
    if (!$(e.target).closest(".l_menu").length) {
      $('.lang_menu').removeClass('showed_men');
      $('.lang_menu').addClass('hidden_men');
    };
    e.stopPropagation();
  });
});

//раздел товаров
$(function(){
  let arrow = document.querySelectorAll(".arrow1");

  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
    let arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
    });
  };
});

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


// форма обратной связи
$(function($){
  $("#inputPhone").mask("+38(999) 999 99 99", {placeholder:" "});
});

$('.contact_form input').click(function(){
  $(this).prop('required', true);
});

function noDigits(event) {
  if ("1234567890-_=+*)(&^@%$#?/][}{|!' ;:.,`~№<>".indexOf(event.key) != -1) 
    event.preventDefault();
};

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

