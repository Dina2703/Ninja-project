import { useState, useEffect } from "react";
import BlogList from "./BlogList";

function Home() {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const [name, setName] = useState("mario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  //useEffect rans(fires) for every render(first time when component  first loads(first initial render). then every time the state changes we re-render the template(UI). it's very useful for things  like fetching data.
  //An empty dependency array ([]), that we can pass as a second argument into useEffect hook, to make sure that this hook only runs the function after the first initial render, then when the state changes it won't run the function again, it only runs it once.
  //now [name] is a dependency, means the useEffect watches the change of the value of name in the state(onClick button 'change name'), and it triggers the useEffect function to run.
  useEffect(() => {
    console.log("use effect ran");
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title={"All Blogs"} handleDelete={handleDelete} />
      <button onClick={() => setName("Sam")}>change name</button>
      <p>{name}</p>
    </div>
  );
}
export default Home;
