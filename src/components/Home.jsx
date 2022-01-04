import { useState, useEffect } from "react";
import BlogList from "./BlogList";

function Home() {
  const [blogs, setBlogs] = useState();
  const [isPending, setIsPending] = useState(true);

  //useEffect rans(fires) for every render(first time when component  first loads(first initial render). then every time the state changes we re-render the template(UI). it's very useful for things  like fetching data.
  //An empty dependency array ([]) -- it only runs it once, when the component renders. that we can pass as a second argument into useEffect hook, to make sure that this hook only runs the function after the first initial render, then when the state changes it won't run the function again,
  //now [name] is a dependency -- it only runs it once and when the target(name) chages its value, means the useEffect watches the change of the value of name in the state(onClick button 'change name'), and it triggers the useEffect function to run. so the second argument to useEffect is to control when this function runs
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
        });

      setIsPending(false);
    }, 1000);
  }, []);

  //with async and await
  // useEffect(() => {
  //   const getData = async () => {
  //     const dataFronserver = await fetchData();
  //     setBlogs(dataFronserver);
  //   };
  //   getData();
  // }, []);

  // const fetchData = async () => {
  //   const res = await fetch("http://localhost:8000/blogs");
  //   const data = await res.json();
  //   console.log(data);
  //   return data;
  // };

  return (
    <div className="home">
      {/*the condition below: if blogs null or any falsy value, it will never riches the right hand side of the logical and evaluates it, which is the BlogList component, when blogs gets the value of data(now it's truthy) the logical will evaluate the right side, it outputs it to the screen. The thing on the right is going to be output, if the thing on the left is true*/}
      {isPending && <div>Loading... </div>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
    </div>
  );
}
export default Home;
