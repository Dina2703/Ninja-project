import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path={"/"}>
              <Home />
            </Route>
            <Route path={"/create"}>
              <Create />
            </Route>
            <Route path={"/blogs/:id"}>
              <BlogDetails />
            </Route>
            {/* * - it means catch any other routes *, it always goes as the last option inside switch*/}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
