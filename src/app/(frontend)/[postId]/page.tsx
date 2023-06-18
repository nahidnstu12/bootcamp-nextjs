import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-cache",
  });
  const postData = await res.json();
  const userId = postData?.userId;
  let userData;
  let result;
  if (userId) {
    userData = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      { cache: "no-cache" }
    );

    userData = await userData?.json();

    result = {
      ...postData,
      username: userData?.name,
    };
  }

  if (!res.ok) {
    return notFound();
  }

  return result;
}

export async function generateMetadata({ params }) {
  const post = await getData(params.postId);
  return {
    title: post?.title,
    description: post?.body,
  };
}

const SinglePost = async ({ params }) => {
  const data = await getData(params.postId);
  console.log("postdata--", data);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data?.title}</h1>
          <p className={styles.desc}>{data?.body}</p>
          <div className={styles.author}>
            <Image
              src={"https://picsum.photos/40"}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data?.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={"https://picsum.photos/400/250"}
            alt="post-image"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      {/*<div className={styles.content}>*/}
      {/*  <p className={styles.text}>{data.body}</p>*/}
      {/*</div>*/}
    </div>
  );
};

export default SinglePost;
