export default class Likes {
  constructor() {
    this.likes = [];
  }

	addLikes = (id, count) => {
	  const likes = { id, count };

	  this.likes.push(likes);

	  return likes;
	};

	deleteLikes(id) {
	  const index = this.likes.findIndex((el) => el.id === id);
	  this.likes.splice(index, 1);
	}

	isLiked(id) {
	  console.log(id);
	  this.likes.find((el) => el.id === id) !== -1;
	}

	getNumLikes() {
	  return this.likes.length;
	}
}
