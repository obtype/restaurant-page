import './style.css';
import { initPage } from './initialise';
import { generatePage as generateHomePage} from './home';
import { generatePage as generateMenuPage} from './menu';
import { generatePage as generateContactPage} from './contact';
//import { container } from 'webpack'; fuck you you piece of shit ass line. u wasted 2 hours of my life,


console.log("The thing compiled properly.");
 

function clearPage(){
    let content = document.querySelector('div#content');
    let main;
    //content.classList.contains()
   content.childNodes.forEach((item)=>{
        if(item.classList.contains('main')){
            main = item;
        }
    }) 

    /* for(let i = 0; i < content.classList.length; i++){
        if( content.childNodes[i].classList.contains('main')){
            main = content.childNodes[i];
        }
    } */

    //console.log(main);
    content.removeChild(main);
}


function changePage(page){
    clearPage();
    if(page ==='home'){
        generateHomePage();
    }
    else if(page === 'menu'){
        generateMenuPage();
    }
    else if(page === 'contact'){
        generateContactPage();
    }
}



function changePageEvent(a){
    console.log(a.target.classList.contains('home'));
    let page = a.target.classList.contains('home') ? 'home' : 
        a.target.classList.contains('menu') ? 'menu' :
        a.target.classList.contains('contact') ? 'contact' : null;

    console.log(page);

    changePage(page);
}


initPage();
//clearPage();



let home = document.querySelector('ul li.home');
let menu = document.querySelector('ul li.menu');
let contact = document.querySelector('ul li.contact');
console.log(home,  menu, contact);

home.addEventListener('click',changePageEvent);
menu.addEventListener('click',changePageEvent);
contact.addEventListener('click',changePageEvent);



