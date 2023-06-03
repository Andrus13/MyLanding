import { exportSelectedCheckbox } from './catalog.js';

class Chips {
    constructor({
        name,
    })  {
        this.name = name;
    }
  
    getTemplate() {
        return `<div class="chip ${this.name} d-flex align-items-center px-2 mx-2">
                    ${this.name}
                    <span class="closebtn" value="${this.name}">&times;</span>
                </div>`;
    }
}

// adding chips
function addChips(data){
    const container = document.querySelector('.catalog .chips');
    container.innerHTML = '';

    data.forEach((data) => {
        const newChips = new Chips({
            name : data,
        });
        container.innerHTML += newChips.getTemplate();
        closeBtnChips();
    });
}

// close button for chips
function closeBtnChips() {
    const closeBtn = document.querySelectorAll('.catalog .chips .closebtn');
    
    closeBtn.forEach( e => {
        e.addEventListener('click', closeChips);
    })
}

// unchecking checkbox
function closeChips(element) {
    const checkboxs = document.querySelectorAll('input[type="checkbox"]');
    const current = element.target.attributes.value.value;

    checkboxs.forEach( e => {
        if(e.checked == true && e.value == current){
            e.checked = false;
            exportSelectedCheckbox();
        }
    })
}

export default addChips;