//create a higher order function that accepts the reducer
function createStore(reducer){
let currentState =    reducer(undefined, {}) //undefined if the initial state / {} = action called at first its an empty object
return {
    getState: ()=> currentState ,//default call of initial state
    dispatch: action =>{ //takes action from our reducer and pass it on
        currentState =  reducer(currentState, action)    // action to update the state             
        }
}}


//set initial state where action is stored { [] }
const initialState = {
    favorites: []
}

//reducer - ordinary func that takes 2 parameters state & action(what we want to do)
function favoriteReducer(state = [initialState], action){
    switch(action.type){ //what we want to do add/remove favorites
    case 'ADD_FAVORITES':{
       const addedFavorite = action.payload.favorite //where favorites added are found
       const favorites = [...state.favorites, addedFavorite]//updating favorites array including the state
       return { favorites }
    }
    case 'REMOVE_FAVORITES':{
        const removedFavorite = action.payload.favorite //the action done to the array = remove favorite
        const favorites = state.favorites.filter(favorite => favorite.id !== removedFavorite.id)
        return { favorites } //property and value
    }
    default:
         return state
    }
}
const action = {type:'ADD_FAVORITES' , payload: {favorite: {title:'story 1', id : 1}}} //payload provides the data into the[]

const store = createStore(favoriteReducer)
store.dispatch(action) //the call to dispatch action and update function
console.log(store.getState())

export default store // export the whole action and state to the rest of our app

