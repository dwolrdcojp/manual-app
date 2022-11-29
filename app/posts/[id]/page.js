import posts from '../../../data/posts';

export async function generateStaticParams() {
		const data = posts;

  const ids = data.result.map((post) => ({
    id: post.id.toString()
  }));

  return ids;
}



function getPost(postId) {
  const selectedPost = posts.result.find(x => x.id === postId )

		return selectedPost;
}

export default async function Post({ params, searchParams }) {
  const { id } = params; 
  const post =  getPost(id);

  console.log(`Params: ${JSON.stringify(params)}`);

  console.log(`Search Params: ${JSON.stringify(searchParams)}`);

  console.log(` Fetch: ${JSON.stringify(post)}`);

  return (
    <>
      <h1> Blog Post Page </h1>
      ========================================================
      <h1> Params: {params.id}</h1>
      <h1> Search Params: {searchParams.search}</h1>
      =========================================================
      <h1> Id: {post.id} </h1> 
      <h1> Title: {post.title} </h1>
      <h1> Date: {post.date} </h1>
    </>
  );
}
