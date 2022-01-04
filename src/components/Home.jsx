import BlogList from "./BlogList";
import useFetch from "../usefetch";

function Home() {
  const {
    //below code means grab the data and call it blogs inside this context
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading... </div>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
    </div>
  );
}
export default Home;
