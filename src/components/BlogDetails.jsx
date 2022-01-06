import { useParams, useHistory } from "react-router-dom";
import useFetch from "../usefetch";

function BlogDetails() {
  const history = useHistory();
  /* useParam allows us grab parameter(or route parameters from the routes)  */
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleDelete = () => {
    //we can use blog.id or id (which is from useParams hook) it doesn't matter
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="blog-details">
      {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
