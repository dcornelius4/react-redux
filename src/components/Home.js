import React from 'react';
import AllPosts from '../containers/posts/AllPosts';
import CreatePost from '../containers/posts/CreatePost';

export default function Home() {
  return (
    <>
    <h1>Posts</h1>
    <section>
      <h2>Create Post</h2>
      <CreatePost />
    </section>
    <section>
      <AllPosts />
    </section>
    </>
  );
}
