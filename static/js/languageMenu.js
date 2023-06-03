// language menu
function languageMenu(){
    const pixels = document.documentElement.clientWidth;
  
    function langMenuSm(){
        const modal = document.querySelector('.modal');
        const trigger = document.querySelector('.lang_btn');
        const closeButton = document.querySelector('.close_btn');

        function toggleModal() {
            modal.classList.toggle('show-modal');
        };

        function windowOnClick(event) {
            if (event.target === modal) {
                toggleModal();
            };
        };

        trigger.addEventListener('click', toggleModal);
        closeButton.addEventListener('click', toggleModal);
        window.addEventListener('click', windowOnClick);
    };
    
    function langMenuLg(){
        const modal = document.querySelector('.lng_for_md');
        const trigger = document.querySelector('.lang_btn');

        function toggleModal() {
            modal.classList.toggle('showed_men');
        };

        trigger.addEventListener('click', toggleModal);
        trigger.addEventListener('blur', toggleModal);

    };

    if(pixels > 992){
        // > 992px
        langMenuLg();
    }else{
        // <= 992px
        langMenuSm();
    }
};

export default languageMenu;