import Stories from "./pages/stories.js"
import Item from "./pages/item.js"
import store from "./store.js"


const router = new Navigo(null, true, '#')

export default class RouteHandler{
    constructor(){
        this.createRoutes()
    }

    //function to create routes for the app
    createRoutes(){
        //routes for the app
        const routes = [
            { path: '/', page: Stories },
            { path: '/new', page: Stories },
            { path: '/ask', page: Stories },
            { path: '/show', page: Stories },
            { path: '/item', page: Item} 
        ]
        //on() = iliterates on every router and declares what should be displayed on page (has 2 para one callback func)
        routes.forEach(({path, page}) => { //object destructuring or  route.page/ route.path
            router.on(path, () => {
               page(path)
            }).resolve() //chain a method resolve() so that it work
        })
    }
}

