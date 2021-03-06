import { useState } from "react";
import { useHistory } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  //To invoke this hook we can put it in history const,now  we have a object which represents history, and on that object are several methods we can use to either go back through history, go forward through history(like clicking the back and forward arrows)
  const history = useHistory();

  const handelSubmit = (e) => {
    //to prevent the page refreshing and auto clean the form.
    e.preventDefault();
    //creating a blog object with title. body and author proporties, but id(json-server does it automatically), that will be saved in db.json file
    const blog = { title, body, author };
    console.log(blog);
    setIsPending(true);

    //since the fetch request is asynchronous and it returns a promise
    //I set setTimeout to give a time to Adding blog button to show-up for a while
    setTimeout(() => {
      fetch("http://localhost:8000/blogs/", {
        method: "POST",
        //below tells that with this request we're sending a json data
        headers: { "Content-type": "application/json" },
        //it turns the blog object into a json string
        body: JSON.stringify(blog),
      }).then(() => {
        console.log("new blog added");
        setIsPending(false);
        //below code to go one step back
        // history.go(-1);
        //below to redirect the user to Home page, after the blog is added
        history.push("/");
      });
    }, 1000);
  };

  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form
        onSubmit={(e) => {
          handelSubmit(e);
        }}
      >
        <label>Blog title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
          type="text"
          required
        />
        <label>Blog body:</label>
        <textarea
          placeholder="start typing"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="sam">Sam</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
}

export default Create;
