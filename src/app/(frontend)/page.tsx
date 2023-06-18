import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
// export default async function Page() {
//   const posts = await getPosts();
//   console.log("component--", posts);
//
//   return posts?.map((post: any) => (
//       <Posts data={}/>
//   ));
// }

export default async function Posts() {
  const posts = await getPosts();
  return (
    <div className={styles.mainContainer}>
      {posts?.map((item: any) => (
        <Link href={`/${item.id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={`https://picsum.photos/seed/${
                Math.ceil(Math.random() * 100) + 10
              }/400/250`}
              alt="posts-image"
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            {/*<p className={styles.desc}>{item.desc}</p>*/}
          </div>
        </Link>
      ))}
    </div>
  );
}

async function getPosts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_page=0&_limit=10"
  );
  return await response.json();
}
