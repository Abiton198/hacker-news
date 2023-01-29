import view from "../utils/view.js"

export default async function Stories(path) { //path refers to each route
    //call the func
   const stories =  await getStories(path)
   const hasStory = stories.length > 0 //to check if there is any story(should be > 0)
   console.log(stories)
   //use map to iterate over the data given from API // use JSON.stringify to get object data ===.map()
    view.innerHTML =  `<div>${hasStory ? stories.map((story, i) => ({...story, index: i + 1})).join(' ') : 'no story'}</div>`
} //displaying the stories on the page using innerHTML
//index: i+ 1 === to get number run down of stories from 1...
//.join() === to join items of an array into one string 

//function to get story from the API
async function getStories(path){
const isHomeRoute = path === '/'
const isNewestRoute = path === '/new'
                                        //condition to display news from an API
if(isHomeRoute){
   path === '/news'
}else if(isNewestRoute){
    path = '/newest'
}
const response = await fetch(`https://node-hnapi.herokuapp.com${path}`)
const stories = await response.json()
return stories
}