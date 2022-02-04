const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/l1wyQq7Jrf2t34Tkma8G/comments';

export const sendComment = async (newData) => {
  const response = await fetch(`${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newData),
  });
  return response.text();
};

const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/l1wyQq7Jrf2t34Tkma8G/comments?item_id=';
export const getComments = async (id) => {
  const res = await fetch(`${URL}${id}`);
  const comments = await res.text();
  return comments;
};
