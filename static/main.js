import { progressBar, animateProgressBar } from './js/progressBar.js';
import scrollNav from './js/scrollNav.js';
import { changeURLLanguage } from './js/languageChange.js';
import languageMenu from './js/languageMenu.js';
import headerHeight from './js/headerHeight.js';
import { acordionSideBar, exportSelectedCheckbox } from './js/catalog.js';
import { justWords, noSpcialCharForEmail, noSpcialChar, submitForm } from './js/form.js';
import footerYear from './js/footr.js';

// scroll menu  
document.querySelectorAll('.navbar-nav a').forEach(e => e.addEventListener('click', scrollNav));

// progress bar
document.addEventListener('scroll', progressBar);

// animate progress bar
document.addEventListener('scroll', animateProgressBar);

// laguage menu
document.addEventListener('DOMContentLoaded', languageMenu);

// language change
document.querySelectorAll('.lang_menu li').forEach(el => el.addEventListener('click', changeURLLanguage));

// screen size for header
document.addEventListener('DOMContentLoaded', headerHeight);

// screen resize for header
window.addEventListener('resize', headerHeight(), false);

//filter bar 
// acordion
document.querySelectorAll('.arrow1').forEach(el => el.addEventListener('click', acordionSideBar));

// 1st goods load
document.addEventListener('DOMContentLoaded', exportSelectedCheckbox);

// faceted search + adding cards
document.querySelectorAll('input[type="checkbox"]').forEach( e =>{
  e.addEventListener('click', exportSelectedCheckbox);
});

// call back form 
// jQuery phone mask
$(function($){
  $('#inputPhone').mask('+38(999) 999 99 99', {placeholder:' '});
});

// input negative focus
document.querySelectorAll('.contact_form input').forEach( el => el.addEventListener('click', function(){this.required = true}));

// input rule for Name
document.getElementById('inputName').addEventListener('keypress', justWords);

// input rule for Email 
document.getElementById('inputEmail').addEventListener('keypress', noSpcialCharForEmail);

// input rule for text area
document.getElementById('inputComment').addEventListener('keypress', noSpcialChar);

// form submit
document.querySelector('form').addEventListener('submit', submitForm);

// footer full year
document.addEventListener('DOMContentLoaded', footerYear);

