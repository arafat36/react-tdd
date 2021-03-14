import { useState } from 'react';
import { fetchPosts } from '../data/posts';
import SinglePost from './SinglePost';

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
    <div className="wrapper">
      <button type="button" onClick={onLoadBtnClick} data-testid="loadBtn">
        Load Posts
      </button>
      {posts && (
        <section role="feed" className="">
          {posts.map((p) => (
            <SinglePost key={p.id} {...p} aria-setsize={posts.length} />
          ))}
        </section>
      )}
    </div>
  );
}

export default Posts;
