import Image from "next/image";
import styles from "./page.module.css";
import Counter from "./Counter.js";
import Link from "next/link";

export default function Home() {
  const postIds =[1, 2, 3];

  return (
    <div className={styles.page}>
      <div>
        <h1>記事一覧</h1>
        <ul>
          {postIds.map((id) => (
            <li key={id}>
              <Link href={`/post/${id}`}>記事 {id} を読む</Link>
            </li>
          ))}
        </ul>
      </div>
      <Link href="/about">Aboutページへ移動</Link>
      <Counter />
      
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <ol>
            <li>Save and see your changes instantly.</li>
            <li>こんにちは</li>
          </ol>

          <h1>
            To get started, edit the{" "}
            <code className={styles.code}>page.js</code> file.
          </h1>
          <p>
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Deploy Now
          </a>
          <a
            className={styles.secondary}
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
