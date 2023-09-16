import myImage from './coffee-image1.png';

export {generatePage, createHomeNode};


function aboutNode(){
    let container = document.createElement('div');


    return container;

}


function reviewNode(){
    let container = document.createElement('div');


    return container;
}


function createHomeNode(){
    let home = document.createElement('div');

    let image_coffee = document.createElement('img');
    image_coffee.src = myImage;
    image_coffee.width = 100;
    console.log(myImage);
    
    home.appendChild(image_coffee);
    home.appendChild(reviewNode());
    home.appendChild(aboutNode());
    return home;
}

function generatePage(){
    
    let content = document.querySelector('div#content');

    content.appendChild(createHomeNode());
}

