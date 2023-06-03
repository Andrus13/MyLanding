import { addGoods, ditailsForGoods, loadMoreGoods} from './cardConstructor.js';
import addChips from './chips.js';
import { changeLanguage } from './languageChange.js';

// acordion
function acordionSideBar(e) {
    const arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle('showMenu');
}

// faceted search + adding cards
function exportSelectedCheckbox(){
    const loadMoreBtn = document.getElementById('loadMore');
    const boxes = document.querySelectorAll('input[type="checkbox"]');
    let checkedBoxes = [];
    let listOfGoods;

    boxes.forEach( e => {
        if(e.checked == true){
            checkedBoxes.push(e.value);
        }
    });
    
    addChips(checkedBoxes);
    
    checkedBoxes.length == 0 ? boxes.forEach( e => checkedBoxes.push(e.value)) : true;

    fetch('/?' + checkedBoxes, {
        method: 'GET',
    })
        .then(res => res.text())
        .then(res => {
            res = JSON.parse(res);
            listOfGoods = Object.values(res);
            listOfGoods.length == 0 ? document.querySelector('.alert').classList.remove('hide') : document.querySelector('.alert').classList.add('hide');
            listOfGoods.length > 3 ? loadMoreBtn.style.display = 'block' : loadMoreBtn.style.display = 'none';
            addGoods(listOfGoods.slice(0, 3));
            listOfGoods = listOfGoods.slice(3);
            ditailsForGoods();
        })
    
    function loadMore() {
        if (listOfGoods.length > 3) {
            loadMoreGoods(listOfGoods.slice(0, 3));
            ditailsForGoods();
            changeLanguage();
            listOfGoods = listOfGoods.slice(3);
        }else {
            loadMoreGoods(listOfGoods.slice(0, 3));
            ditailsForGoods();
            changeLanguage();
            loadMoreBtn.style.display = 'none';
        }
    }

    loadMoreBtn.addEventListener('click', loadMore);
};




export { acordionSideBar, exportSelectedCheckbox };