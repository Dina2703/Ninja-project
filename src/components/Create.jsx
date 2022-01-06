import { useState } from "react";

function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");

  const handelSubmit = (e) => {
    //to prevent the page refreshing and auto clean the form.
    e.preventDefault();
    //creating a blog object with title. body and author proporties, but id(json-server does it automatically), that will be saved in db.json file
    const blog = { title, body, author };
    console.log(blog);
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
        <button>Add Blog</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
}

export default Create;
