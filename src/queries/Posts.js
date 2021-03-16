import { useState } from 'react';
import { fetchPosts } from '../data/posts';
import SinglePost from './SinglePost';
import cls from './Posts.module.css';

console.log(cls);
function Posts() {
  const [posts, setPosts] = useState([]);

  function onLoadBtnClick() {
    // console.log('fetchPosts [Posts]', fetchPosts);
    fetchPosts().then((newPosts) => {
      // fetchPosts().then((res) => console.log('[data]', res));
      setPosts(newPosts);
    });
  }

  return (
    <div className={cls.wrapper}>
      <button
        className={cls.loadBtn}
        type="button"
        onClick={onLoadBtnClick}
        data-testid="loadBtn"
      >
        Load Posts
      </button>
      {posts && (
        <section role="feed" className={cls.postsContainer}>
          {posts.map((p) => (
            <SinglePost key={p.id} {...p} aria-setsize={posts.length} />
          ))}
        </section>
      )}
    </div>
  );
}

export default Posts;
