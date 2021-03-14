function SinglePost({ id, name, createdAt, content, avatar, ...rest }) {
  // const createdDate = new Date(createdAt);
  return (
    <article
      className=""
      aria-labelledby={`post-name-${id}`}
      aria-describedby={`post-datetime-${id} post-content-${id}`}
      tabIndex="0"
      {...rest}
    >
      <div className="">
        <img src={avatar} alt={name} className="" />
        <h3 className="" id={`post-name-${id}`}>
          {name}
        </h3>
        <time className="" dateTime={createdAt} id={`post-datetime-${id}`}>
          {new Date(createdAt).toDateString()}
        </time>
      </div>
      <p className="" id={`post-content-${id}`}>
        {content}
      </p>
    </article>
  );
}

export default SinglePost;
