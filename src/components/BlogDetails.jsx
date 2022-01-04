import { useParams } from "react-router-dom";

function BlogDetails() {
  /* useParam allows us grab parameter(or route parameters from the routes)  */
  const { id } = useParams();
  return (
    <div className="blog-details">
      <h2>Blog Details - {id}</h2>
    </div>
  );
}

export default BlogDetails;
