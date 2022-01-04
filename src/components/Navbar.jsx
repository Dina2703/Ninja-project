import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/" >Home</Link>
        {/*outter curly braces represent a dynamic value, inner is JS object(styling object) with key-value pair */}
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
