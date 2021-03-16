import cls from './SinglePost.module.css';

function SinglePost({ id, name, createdAt, content, avatar, ...rest }) {
  // const createdDate = new Date(createdAt);
  return (
    <article
      className={cls.wrapper}
      aria-labelledby={`post-name-${id}`}
      aria-describedby={`post-datetime-${id} post-content-${id}`}
      {...rest}
    >
      <div className={cls.heading}>
        <img src={avatar} alt={name} className={cls.avatar} />
        <h3 className={cls.author} id={`post-name-${id}`}>
          {name}
        </h3>
        <time
          className={cls.date}
          dateTime={createdAt}
          id={`post-datetime-${id}`}
        >
          {new Date(createdAt).toDateString()}
        </time>
      </div>
      <p className={cls.content} id={`post-content-${id}`}>
        {content}
      </p>
    </article>
  );
}

export default SinglePost;
