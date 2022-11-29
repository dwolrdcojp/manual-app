import posts from '../../data/posts';

export default async function handler(req, res) {
  res.status(200).json({ posts: posts.result });
}
