import posts from '../../../../data/posts';

export default async function handler(req, res) {
  const { postId } = req.query;
  const selectedPost = posts.result.find(x => x.id === postId )
  const { id, title, date } = selectedPost;
  res.status(200).json({ id, title, date });
}
