
//func to determine if story is a favorite 
//some() checks through an array to match the id of each item then return match
export default function checkFavorite(favorites, story) {
   return  favorites.some(favorite => favorite.id === story.id)
    }
