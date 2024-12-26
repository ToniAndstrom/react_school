const Posts = ({ posts, updatePostStatus }) => {
    return (
      <div>
        {posts.map((post) => (
          <div key={post.id} className="post">
            <fieldset>
            <legend><h2>{post.title}</h2></legend>
            <h3>Author: {post.author}</h3>
            <p>{post.content}</p>
            <p><strong>Date: </strong>{post.date}</p>
            <p>
              <strong>Status: </strong> {post.published ? "Published" : "Unpublished"}
              <br />
              <button onClick={() => updatePostStatus(post.id, post.published)}>
                {post.published ? "Mark Unpublished" : "Mark Published"}
              </button>
            </p>
          </fieldset>
          </div>
        ))}
      </div>
    );
  };
  
  export default Posts;