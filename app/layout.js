import styles from '../styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import '../styles/global.css';
import Image from 'next/image';
import Link from 'next/link';

const name = "John Doe";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className={styles.container}>
          <header className={styles.header}>
          <Link href="/">
          <Image 
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt="profile picture"
          />
          </Link>
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </header>
        {children}
        </div>
      </body>
    </html>
  );
}
