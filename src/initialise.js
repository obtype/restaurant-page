import { createHomeNode } from "./home.js";
import { createMenuNode } from "./menu.js";
import { createContactNode } from "./contact.js";
export {initPage};

function initHeader(){
    let header = document.createElement('div');

    header.classList.add('header');
    let headerTitle = document.createElement('div')
    headerTitle.classList.add("title");
    headerTitle.textContent = "Sip Cocoa";
    
    let headerList = document.createElement('ul');
    headerList.classList.add('pages');
    headerList.appendChild(document.createElement('li'));
    headerList.appendChild(document.createElement('li'));
    headerList.appendChild(document.createElement('li'));

    headerList.childNodes[0].textContent = "Home";
    headerList.childNodes[1].textContent = "Menu";
    headerList.childNodes[2].textContent = "Contact";

    headerList.childNodes[0].classList.add('home');
    headerList.childNodes[1].classList.add('menu');
    headerList.childNodes[2].classList.add('contact');
    

    
    
    
    header.appendChild(headerTitle);
    header.appendChild(headerList);

    return header;

}

function initMain(){
    let main = createMenuNode();
    //main.classList.add('main');
    return main;
}

function initFooter(){
    let footer= document.createElement('div');
    footer.classList.add("footer");

    footer.textContent = "An Obtype creation.";

    return footer;
}


function initPage() {
    console.log('testing import statement')
    //all the elements and stuff that I make here are going to be added as a child to the div.content tag in my index.html file.

    let content = document.querySelector("div#content");

    content.appendChild(initHeader());
    content.appendChild(initMain());
    content.appendChild(initFooter());

}

