import Head from "next/head";
import styles from "/styles/index.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Colnago</title>
        <meta name="description" content="write-hub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/">Colango!</Link>
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>Let&apos;s go right now</code>
        </p>

        <div className={styles.grid}>
          <Link href="/" className={styles.card}>
            <h2>个人信息 &rarr;</h2>
            <p>配置您的个人相关信息</p>
          </Link>

          <Link href="/" className={styles.card}>
            <h2>我的发布 &rarr;</h2>
            <p>查看您以往发布的内容</p>
          </Link>

          <Link href="/" className={styles.card}>
            <h2>探索发现 &rarr;</h2>
            <p>探索和你一样有趣的人</p>
          </Link>

          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>关于我们 &rarr;</h2>
            <p>欢迎加入我们</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Powered by @crust-hub
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </a>
      </footer>
    </div>
  );
}
