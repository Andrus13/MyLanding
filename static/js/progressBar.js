// progress bar
function progressBar(){
    const progressTag = document.querySelector('.progresbar');
    const bodyTag = document.querySelector('body');
    const pixels = window.pageYOffset;
    const pageHeight = bodyTag.getBoundingClientRect().height;
    const totalScrollableDistance = pageHeight - window.innerHeight;
    const percentage = pixels / totalScrollableDistance;

    progressTag.style.width = `${100 * percentage}%`;
}

// animate progress bar
function animateProgressBar() {
    let scrollTimer = -1;
    const cabina = document.querySelector('.cabina');
    const corp = document.querySelector('.corpus');
    const Lwheel = document.querySelector('.L-wheel');
    const Rwheel = document.querySelector('.R-wheel');
    const clouds = document.querySelector('.clouds');
    
    cabina.style.webkitAnimationPlayState = 'running';
    corp.style.webkitAnimationPlayState = 'running';
    Lwheel.style.webkitAnimationPlayState = 'running';
    Rwheel.style.webkitAnimationPlayState = 'running';
    clouds.style.webkitAnimationPlayState = 'running';

    if (scrollTimer != -1) 
        clearTimeout(scrollTimer);
    
    scrollTimer = window.setTimeout(function scrollFinished() {
        cabina.style.webkitAnimationPlayState = 'paused';
        corp.style.webkitAnimationPlayState = 'paused';
        Lwheel.style.webkitAnimationPlayState = 'paused';
        Rwheel.style.webkitAnimationPlayState = 'paused';
        clouds.style.webkitAnimationPlayState = 'paused';
    }, 500);
};

export { progressBar, animateProgressBar };

