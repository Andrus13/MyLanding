//высота wellcome page
function headerHeight(){
    const header = document.querySelector('.header');
    const over = document.querySelector('.overlay');
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

export default headerHeight;