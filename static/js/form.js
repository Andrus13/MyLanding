function justWords(event) {
    let charCode = (event.which) ? event.which : event.keyCode;

    if (charCode == 39 || (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode == 137 || charCode == 139 || charCode == 1025 || charCode == 1028 || (charCode >= 1030 && charCode <= 1131) || (charCode >= 1040 && charCode <= 1103) || charCode == 1105 || charCode == 1108 || (charCode >= 1110 && charCode <= 1111) || (charCode >= 1168 && charCode <= 1169)) {
      
    }else {
        event.preventDefault();
    };
};
  
  // ограничения для Email 
function noSpcialCharForEmail(event){
    let charCode = (event.which) ? event.which : event.keyCode;
  
    if ((charCode >= 45 && charCode <= 46) || (charCode >= 48 && charCode <= 57) || (charCode >= 64 && charCode <= 90) || charCode == 95 || (charCode >= 97 && charCode <= 123)) {
      
    }else {
        event.preventDefault();
    };
};
  
  // ограничения для текстового поля 
function noSpcialChar(event) {
    let charCode = (event.which) ? event.which : event.keyCode;

    if (charCode <= 13 || (charCode >= 32 && charCode <= 34) || charCode == 37 || (charCode >= 39 && charCode <= 41) || (charCode >= 43 && charCode <= 46) || (charCode >= 48 && charCode <= 58) || charCode == 61 || (charCode >= 63 && charCode <= 90) || charCode == 95 || (charCode >= 97 && charCode <= 122) || charCode == 137 || charCode == 139 ||  charCode == 147 || charCode == 154 || (charCode >= 160 && charCode <= 165) || (charCode >= 174 && charCode <= 175) || charCode == 1025 || charCode == 1028 || (charCode >= 1030 && charCode <= 1131) || (charCode >= 1040 && charCode <= 1103) || charCode == 1105 || charCode == 1108 || (charCode >= 1110 && charCode <= 1111) || (charCode >= 1168 && charCode <= 1169)) {
        
    }else {
        event.preventDefault();
    };
};
  
  // получение данных с формы
  
function submitForm(event){
    event.preventDefault();
    let form = document.querySelector('form').elements;
    let inputs = document.querySelectorAll('.contact_form input');
  
    if( form[0].value == 'Выбор...' || form[1].value == '' || form[2].value == '' || form[3].value == ''){
        // console.log(inputs)
        inputs.forEach(e => {
            e.required = true;
        });
    }else{
        fetch('/save-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
                'input-0': form[0].value,
                'input-1': form[1].value,
                'input-2': form[2].value,
                'input-3': form[3].value,
                'input-4': form[4].value,
            })
        })
            .then(res => res.text())
            .then(res => console.log(res));
        document.querySelector('form').reset();
        document.querySelectorAll('.contact_form input').forEach( e =>{
            e.required = false;
        });
    };
    
};

export { justWords, noSpcialCharForEmail, noSpcialChar, submitForm };