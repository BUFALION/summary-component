

class CategoryItem{
    constructor(item, container) {
        this.item = item;
        this.container = container;
        this._createHTML();
    }

    _createHTML(){
        const {category, score} = this.item;
        const iconId =  category.toLowerCase();

        this.container.insertAdjacentHTML('beforeend',`
              <li class="category ${iconId}">

              <p class="category-description"><img src="assets/images/icon-${iconId}.svg" alt=""> Reaction</p>
              <p class="category-points"><span class="bold-text">${score} </span> /100</p>
            </li>
        
        `)
    }

}

function getData(url = '/data.json'){
    return fetch(url)
        .then(res => res.json())

}
document.addEventListener('DOMContentLoaded',()=>{
    const container = document.querySelector('.category-list')

    const categoryItems = []
    getData()
        .then(data =>{
            data.forEach((el)=>{
              const item = new CategoryItem(el, container);
                categoryItems.push(item)
            })
        })
})