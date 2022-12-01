import Link from 'next/link';

const url = process.env.NEXT_PUBLIC_VERCEL_URL + '/api/posts';

async function getPosts() {
				const resp = await fetch(url, { cache: 'no-store' });

				// Recommendation: handle errors
				if (!resp.ok) {
								// This will activate the closest `error.js` Error Boundary
								throw new Error('Failed to fetch data');
				}

				const data = resp.json();

				return data;
}

export default async function Page() {
		const posts = await getPosts();

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
