function BlogList(props) {
  const blogs = props.blogs;
  const title = props.title;
  console.log("props ", props, "blogs ", blogs);
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {/*the key attr React needs to keep track of every item in an array in the DOM */}
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-preview">
          <h2> {blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
