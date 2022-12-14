import Link from 'next/link';


async function getPosts() {

				const resp = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/posts`, { cache: 'no-store' });
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
