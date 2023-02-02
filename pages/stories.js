import view from "../utils/view.js"
import Story from "../Components/story.js"
import baseUrl from "../utils/baseUrl.js"
import store from "../store.js"
// import checkFavorite from '../utils/checkFavorite.js'

export default async function Stories(path) { //path refers to each route
    const { favorites } = store.getState() //bring state of favorites to stories page
    //call the func
   const stories =  await getStories(path)
   const hasStories = stories.length > 0 //to check if there is any story(should be > 0)
//    console.log(stories)

   //use map to iterate over the data given from API // use JSON.stringify to get object data ===.map()
    view.innerHTML =  `<div>
        ${hasStories ? stories.map((story, i) => Story ({ ...story, index: i + 1})).join('') : 'no story'}
    </div>`
 //displaying the stories on the page using innerHTML
//index: i+ 1 === to get number run down of stories from 1...
//.join() === to join items of an array into one string 
//isFavorite -- story updated accordingly

//adding eventListener to a story so that when clicked can be added to favorites
//conditional set of the click event to add or remove into favorites
//for favorites page ==== , isFavorite: checkFavorite(favorites, story)
/*
document.querySelectorAll('.favorite').forEach(favoriteButton =>{
favoriteButton.addEventListener('click', async function(){
const story = JSON.parse(this.dataset.story) //returning it to an object
const isFavorited = checkFavorite(favorites, story)
    store.dispatch({type: isFavorited? "REMOVE_FAVORITE" : "ADD_FAVORITE", payload: { favorite: story } })  
await Stories(path)

})
})*/

}

//function to get story from the API
async function getStories(path){
const isHomeRoute = path === '/'
const isNewRoute = path === '/new'
                                        //condition to display news from an API
if(isHomeRoute){
   path === '/news'
}else if(isNewRoute){
    path = '/newest'
}
const response = await fetch(`${baseUrl}${path}`)
const stories = await response.json()
return stories
}