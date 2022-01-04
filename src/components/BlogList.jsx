import { Link } from "react-router-dom";

function BlogList(props) {
  const blogs = props.blogs;
  const title = props.title;
  // console.log("props ", props, "blogs ", blogs);

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {/*the key attr React needs to keep track of every item in an array in the DOM */}
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-preview">
          <Link to={`/blogs/${blog.id}`}>
            <h2> {blog.title}</h2>
            <p>Written by {blog.author}</p>{" "}
          </Link>
          {/*we need to wrap the handleDelete inside the anonymous function so we can pass an argument into our custom function. We need to pass the id of the blog we want to delete, so we can find it in the array and delete it*/}
        </div>
      ))}
    </div>
  );
}

export default BlogList;
