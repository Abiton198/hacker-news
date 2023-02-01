
//func to retrive nested function === recursion 
export default function Comment(comment){
const hasNestedComment = comment.comments.length > 0

return `
<div class='nested-comment-${comment.level}'>
    <p class='comment-header'> 
        ${comment.user} | ${comment.time_ago}
            </p>
            ${comment.content}
            ${ hasNestedComment ? comment.comments.map(comment => Comment(comment)).join('') : ''}
</div>`
}
//comment.level === display comments in their nested order of response 1-2-3
//conditional rendering of comments if there are nested comments to be displayed