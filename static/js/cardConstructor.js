class Card {
    constructor({
        id,
        name,
        model,
        photo,
        weight,
        volume,
        power,
        info,
    })  {
        this.id = id;
        this.name = name;
        this.model = model;
        this.photo = photo;
        this.weight = weight;
        this.volume = volume;
        this.power = power;
        this.info = info;
    }
  
    getTemplate() {
        return `<div class="card tractor zeleniy_tractor my-4 mx-4 col-md-3">
                    <div class="card-header px-2 w-100">
                        <h5 class="card-title ">${this.name}</h5>
                        <h6 class="">${this.model}</h6>
                    </div>
                    <img src="${this.photo}" class="card-img mt-2" alt="photo" >
                    <div class="card-body px-2 w-100 ">
                        
                        <div class="card-text">
                            <dl>
                                <dt class="small text-muted">Base machine weight</dt>
                                <dd>${this.weight}</dd>
                                <dt class="small text-muted">Engine displacement</dt>
                                <dd>${this.volume}</dd>
                                <dt class="small text-muted">Rated power</dt>
                                <dd>${this.power}</dd>
                            </dl>
                        </div>
                        
                    </div>
                    <div class="card-footer px-2 w-100 ">
                        <button class="btn btn-outline-warning btn-block lng-more" value="${this.id}">Подробнее</button>
                    </div>
                </div>`;
    }
}

//  adding goods cards
function addGoods(data){
    const container = document.querySelector('.catalog .models');
    container.innerHTML = '';

    data.forEach((data) => {
        const newCard = new Card({
            id : data['goodsLists.goods_id'],
            name : data['goodsLists.name'],
            model : data['goodsLists.model'],
            photo : data['goodsLists.img_href'],
            weight : data['goodsLists.weight'],
            volume : data['goodsLists.volume'],
            power : data['goodsLists.power'],
            info : data['goodsLists.info'],
        });
        container.innerHTML += newCard.getTemplate();
    });
}

// goods info
class Description {
    constructor({
        name,
        model,
        photo,
        weight,
        volume,
        power,
        info,
    })  {
        this.name = name;
        this.model = model;
        this.photo = photo;
        this.weight = weight;
        this.volume = volume;
        this.power = power;
        this.info = info;
    }
  
    getTemplate() {
        return `<div class="container-fluid d-md-flex d-none flex-column col-md-6">
                    <div class="row col-12">
                        <img src="${this.photo}" alt="">
                    </div>
                    <div class="row flex-column col-12">
                        <h4>Description</h4>
                        <p>...</p>
                    </div>
                </div>
                <div class="container-fluid d-flex flex-column col-md-6">
                    <div class="row flex-column col-12">
                        <h1>${this.name}</h1>
                        <h2>${this.model}</h2>
                        <table class="table table-bordered my-3">
                            <tbody>
                            <tr>
                                <td>Base machine weight</td>
                                <td>${this.weight}</td>
                            </tr>
                            <tr>
                                <td>Engine displacement</td>
                                <td>${this.volume}</td>
                            </tr>
                            <tr>
                                <td>Rated power</td>
                                <td>${this.power}</td>
                            </tr>
                            <tr>
                                <td>...</td>
                                <td>...</td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="d-md-none d-block">
                            <h4>Description</h4>
                            <p>...</p>
                        </div>
                    </div>
                </div>`;
    }
}

// adding cards description 
function descriptionData(data){
    const container = document.querySelector('.catalog .modal_for_goods .cont');
    container.innerHTML = '';

    data.forEach((data) => {
        const newDescription = new Description({
            name : data['name'],
            model : data['model'],
            photo : data['img_href'],
            weight : data['weight'],
            volume : data['volume'],
            power : data['power'],
            info : data['info'],
        });
        container.innerHTML = newDescription.getTemplate();
    });
}

// goods info 
function ditailsForGoods(){
    const trigger = document.querySelectorAll('.models .card .btn');
    const modal = document.querySelector('.modal_for_goods');
    const closeButton = document.querySelector('.close_btn_goods');

    function toggleModal(e) {
        const goodsId = e.target.value;
        
        fetch('/?info' + goodsId, {
            method: 'GET',
        })
            .then(res => res.text())
            .then(res => {
                res = JSON.parse(res);
                descriptionData(res);
            })
            
        modal.classList.add('show-modal');
    };

    function windowOnClick(event) {
        if (event.target === modal) {
            modal.classList.remove('show-modal');
        };
    };

    function closeBtnOnClick(event) {
        if (event.target === closeButton) {
            modal.classList.remove('show-modal');
        };
    };

    trigger.forEach(el => el.addEventListener('click', toggleModal));
    closeButton.addEventListener('click', closeBtnOnClick);
    window.addEventListener('click', windowOnClick);
};

// loading goods of three
function loadMoreGoods(data) {
    const container = document.querySelector('.catalog .models');

    data.forEach((data) => {
        const newCard = new Card({
            id : data['goodsLists.goods_id'],
            name : data['goodsLists.name'],
            model : data['goodsLists.model'],
            photo : data['goodsLists.img_href'],
            weight : data['goodsLists.weight'],
            volume : data['goodsLists.volume'],
            power : data['goodsLists.power'],
            info : data['goodsLists.info'],
        });
        container.innerHTML += newCard.getTemplate();
    });
}

export { addGoods, ditailsForGoods, loadMoreGoods };