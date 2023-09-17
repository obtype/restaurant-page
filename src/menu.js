import coffeeCup from './coffee-cup2.jpg';
import blueberryMuffin from './bluberry-muffin2.jpg';
import teaCup from './coffee-cup3.jpg';
import caramelApple from './caramel-apple2.jpg';

export {generatePage, createMenuNode};



const Item = function(name, price, comment , pic=null){
    return{
        name,
        price,
        comment,
        pic
    }
}

let items = []; 

items[0] = Item("Muffin", '14.99', "Soft and full of crumbles!", blueberryMuffin);
items[1] = Item("Black Coffee", '19.99', "Shot of love.", coffeeCup);
items[2] = Item("Caramel Apple", '5.50', "Crunchy delight that melts in\r\n your mouth.", caramelApple);
items[3] = Item("Traditional Chai", '17.50', "Travel back in time and enter\r\n a zen state.", teaCup);



function listMenuItems(){
    let menuItems = document.createElement('div');
    menuItems.classList.add('item-list');
    
    let itemCardTemplate = document.createElement('div');
    let name = document.createElement('div');
    let price = document.createElement('div');
    let comment = document.createElement('div');
    let picture = document.createElement('img');


    itemCardTemplate.classList.add('item');
    comment.classList.add('comment');
    price.classList.add('price');
    name.classList.add('name');


    itemCardTemplate.appendChild(picture);
    itemCardTemplate.appendChild(name);
    itemCardTemplate.appendChild(price);
    itemCardTemplate.appendChild(comment);
    


    for(let i = 0; i < 4; i++){
        let temp = itemCardTemplate.cloneNode(true);
        temp.childNodes[1].textContent = items[i].name;
        temp.childNodes[2].textContent = `$${items[i].price}`;
        temp.childNodes[3].textContent = items[i].comment;
        temp.childNodes[0].src = items[i].pic;

        temp.childNodes[0].width = 290;
        menuItems.appendChild(temp);
    }
    

    //create the card format.
    //itemCardTemplate.
    


    return menuItems
}

function createMenuNode(){
    let menu = document.createElement('div');
    menu.classList.add('main');

    //console.log(item1);

    let menuTitle = document.createElement('div');
    menuTitle.classList.add('title');
    menuTitle.textContent = "Menu";


    
    menu.appendChild(menuTitle);
    menu.appendChild(listMenuItems());
    return menu;
}


function generatePage(){
    let content = document.querySelector('div#content');

    content.appendChild(createMenuNode());
}

