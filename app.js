import RouteHandler from "./router.js"

//a property that response to change of link on window === onhashchange() 
 window.onhashchange = () => {
    setActiveLink()
}

//func to show an active link with an underline 
 function setActiveLink() {
    const links = document.querySelectorAll('.header-link') //all header links by that class name selected
    
    links.forEach(link => {
        const linkPath = link.getAttribute('href'); //func to activate on each character with #href
        const currentPath = window.location.hash; // locates when the current link is opened
        if (currentPath === linkPath) { //conditional display of an underlined border line on each active link
          link.classList.add('active');  
        } else {
          link.classList.remove('active');         
        }
     });
    }

class App {
    constructor(){
        new RouteHandler()
        
    }
}
new App()