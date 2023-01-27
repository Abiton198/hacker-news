const router = new Navigo(null, true, '#')
import Stories from "./pages/stories"

export default class RouteHandler {
    constructor(){
        this.createRoutes()
    }

    createRoutes(){
        const routes = [
            {path: '/', page: Stories}
        ]
        //on() = iliterates on every router and declares what should be displayed on page (has 2 para one callback func)
        routes.forEach(route => {
            router.on(route.path, () =>{
               route.page()
            }).resolve() //chain a method resolve() so that it work
        })
    }
}
