import Link from 'next/link';
import posts from '../data/posts';

export default function Page() {
  return ( <div>
      <h1>Hello, Next.js!</h1>
      <br />
      <h1> Posts </h1>
      {posts.result.map(({ id, title, date}) => (
        <li key={id}>
          <Link href={`/posts/${id}`}> {title} </Link>
          <p> {date} </p>
        </li>
      ))}
    
    </div>
  );
}
