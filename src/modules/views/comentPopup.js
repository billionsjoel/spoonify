import commentCounter from '../models/commentCounter.js';
import { getComments } from '../models/involvementApi.js';

const showPop = async (recipe) => {
  const response = await getComments(recipe.idCategory);
  const comments = JSON.parse(response);
  const commentNum = commentCounter(comments);
  const commentPopup = document.querySelector('#popup');
  commentPopup.className = 'comments-popup';
  commentPopup.innerHTML = `<div class="recipe">
                           <button type="button" class="close-btn clickable">&times;</button>
                           <div class="recipe__image">
                             <img src="${recipe.strCategoryThumb}" alt="recipe image">
                           </div>
                           <div class="recipe__text">
                             <div class="recipe-title">
                               <h2>${recipe.strCategory}</h2>
                             </div>
                             <div class="details">
                              <p>${recipe.strCategoryDescription}</p>
                             </div>
                           </div>
                           <div class="comments">
                             <div class="comments__title">
                               <h2>Comments <span>(${commentNum || 0})</span></h2>
                             </div>
                             <ul class="comments-list">${comments
    .map((comment) => `<li class="comment-item">
    <span class="creation-date">${comment.creation_date}</span>
    <span class="username"> ${comment.username}:</span>
    <span  class="comment-msg"> ${comment.comment}</span></li>`)
    .join('')
}
                             </ul> 
                           </div>
                           <div class="add-comment">
                             <h2 class="title">Add a comment</h2>
                             <div class="new-comment">
                               <form class="form">
                                 <input class="input-name" type="text" placeholder="Your Name" required>
                                 <textarea name="add-comment" id="new-comment" class="comment-textarea" cols="30" rows="4" placeholder="Your Comment" required></textarea>
                                 <button type="submit" class="add-comment-btn clickable">Add Comment</button>
                               </form>
                             </div>
                           </div>
                         </div>`;
};

export default showPop;
