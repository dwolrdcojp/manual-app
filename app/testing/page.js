import Link from 'next/link';

const url = 'https://manual-j0tspeegz-dwolrdcojp.vercel.app/api/posts';

async function getPosts() {
	const resp = await fetch(url, { cache: 'no-store' });
	const data = resp.json();

				return data;
}

export default async function Page() {
		const posts = await getPosts();
		console.log(posts);

  return ( <div>
      <h1>Testing API Routes</h1>
      <br />
      <h1> Posts </h1>
      {posts.posts.map(({ id, title, date}) => (
        <li key={id}>
          <Link href={`/posts/${id}`}> {title} </Link>
          <p> {date} </p>
        </li>
      ))}
    
    </div>
  );
}
