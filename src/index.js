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





initPage();
//clearPage();



let home = document.querySelector('ul li.home');
let menu = document.querySelector('ul li.menu');
let contact = document.querySelector('ul li.contact');
console.log(home,  menu, contact);

/* home.addEventListener('click', () => {

}) */


