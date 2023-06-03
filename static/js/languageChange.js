import langArr from '../lacales.json' assert { type: 'json' };

//смена языка 

const allLang = ['ru', 'en', 'ua'];

function changeURLLanguage(){
    let lang = this.dataset.lang;
    location.href = window.location.pathname + '#' + lang;
    changeLanguage();
    // location.reload();
};

function changeLanguage(){
    let hash = window.location.hash
    hash = hash.substring(1);
    // console.log(hash);

    if(!allLang.includes(hash)){
        location.href = window.location.pathname + '#ru';
        location.reload();
    };

    for (let key in langArr) {
        let elem = document.querySelectorAll('.lng-' + key);
        elem.forEach(el => {
            if(elem){
                el.innerHTML = langArr[key][hash];
            }
            else{
                elem.innerHTML = langArr[key]['ru'];
            };
        })
    };
};

export { changeURLLanguage, changeLanguage };
  

  