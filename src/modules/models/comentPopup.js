// eslint-disable-next-line import/prefer-default-export
export const comentPopup = document.createElement('div');
comentPopup.className = 'comments-popup';
comentPopup.innerHTML = `<div class="recipe">
                           <button type="button" class="close-btn clickable">&times;</button>
                           <div class="recipe__image">
                             <img src="https://www.themealdb.com/images/category/chicken.png" alt="recipe image">
                           </div>
                           <div class="recipe__text">
                             <div class="recipe-title">
                               <h2>Pizza</h2>
                             </div>
                             <div class="details">
                               <div class="block-1">
                                 <p><span>Lorem:</span><span> Ipsum</span></p>
                                 <p><span>Lorem:</span><span> Ipsum</span></p>
                               </div>
                               <div class="block-2">
                                 <p><span>Lorem:</span><span> Ipsum</span></p>
                                 <p><span>Lorem:</span><span> Ipsum</span></p>
                               </div>
                             </div>
                           </div>
                           <div class="comments">
                             <div class="comments__title">
                               <h2>Comments <span>(3)</span></h2>
                             </div>
                             <ul class="comments-list">
                               <li class="comment-item"><span>01/02/2022</span><span> John:</span><span> I will buy</span></li>
                               <li class="comment-item"><span>01/02/2022</span><span> John:</span><span> I will buy</span></li>
                             </ul>
                           </div>
                           <div class="add-comment">
                             <h2 class="title">Add a comment</h2>
                             <div class="new-comment">
                               <form class="form">
                                 <input class="input-name" type="text" placeholder="Your Name">
                                 <textarea name="add-comment" id="new-comment" cols="30" rows="4" placeholder="Your Comment"></textarea>
                               </form>
                               <button type="submit" class="add-comment-btn clickable">Comments</button>
                             </div>
                           </div>
                         </div>`;