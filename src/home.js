import coffeeCup from './coffee-cup2.jpg';




export {generatePage, createHomeNode};


function aboutusNode(){
    let container = document.createElement('div');
    container.classList.add('aboutus');

    let containerTitle = document.createElement('div');
    containerTitle.classList.add('title');

    let containerContent = document.createElement('div');
    containerContent.classList.add('content');

    containerContent.textContent = "Sip Cocoa is a cozy and welcoming coffee shop dedicated to providing a delightful coffee experience for our customers. Located in the heart of the city, our passion for quality coffee drives us to source the finest beans from around the world. \n At Sip Cocoa, we believe that coffee is an art form. Our skilled baristas are passionate about their craft and take pride in creating beautifully crafted beverages. ";
    containerTitle.textContent = "About us!"

    container.appendChild(containerTitle);
    container.appendChild(containerContent);
    return container;

}


function reviewsNode(){
    let container = document.createElement('div');
    container.classList.add('reviews');

    let containerTitle = document.createElement('div');
    containerTitle.classList.add('title');

    let containerContent = document.createElement('div');
    containerContent.classList.add('content');

    containerContent.textContent = "Sip Cocoa exceeded my expectations! The smooth and aromatic flavors of their coffee left me craving for more. A must-visit for coffee enthusiasts! \nI love the cozy atmosphere of Sip Cocoa. It's the perfect spot to relax and enjoy a delicious cup of coffee. The friendly staff and attention to detail make every visit memorable."
    containerTitle.textContent = "Read our reviews!"


    container.appendChild(containerTitle);
    container.appendChild(containerContent);
    return container;
}


function createHomeNode(){
    let home = document.createElement('div');

    let image_coffee = document.createElement('img');
    image_coffee.src = coffeeCup;
    image_coffee.width = 100;
    console.log(coffeeCup);
    
    home.appendChild(image_coffee);
    home.appendChild(aboutusNode());
    home.appendChild(reviewsNode());

    home.classList.add('main');
    
    return home;
}

function generatePage(){
    
    let content = document.querySelector('div#content');

    content.appendChild(createHomeNode());
}

