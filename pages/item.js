import Story from '../Components/story.js' // Story funct 
import view from '../utils/view.js'
import baseUrl from '../utils/baseUrl.js'
import Comment from '../Components/comments.js'

export default async function Item(){
    let story = null  //story wil retain an object
    let  hasComment = false // default value
    //try and catch in the event there is an error in fetching data from API
    let hasError = false //default value
    try {
         story = await getItem()
         hasComment = story.comments.length > 0

    } catch(error) {
       hasError = true

    }
    if(hasError){
      view.innerHTML =  `<div class='error'>
            Something went wrong coudn't fetch story
                </div>`
    }
    
    view.innerHTML = `
    <div>
        ${Story(story)}
    </div>
        <hr/>
        ${hasComment ? story.comments.map(comment => Comment(comment)).join('') : 'No comment'}
    ` //item should display story based on fetched ID
    //JSON.stringify === making the array contents readable
    //.join('') makes returned array items into a string 
    //JSON.stringfy replaced by Comments imported from Comments component
}

async function getItem(){
    const storyId = window.location.hash.split('?id=')[1] // window is the local location where ID is stored for each item....hash --where a query start from the API where fetch data is done ...split() --make each item in an array a string...[]
   const response = await fetch(`${baseUrl}/item/${storyId}`)
   const story =  await response.json()
   return story
}

//make all func async in order to call the func getItem()