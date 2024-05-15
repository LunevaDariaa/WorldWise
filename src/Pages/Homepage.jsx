import { Link } from "react-router-dom";
import PageNav from "../Components/PageNav";
import AppNav from "../Components/AppNav";
function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>WorldWise</h1>
      <Link to="/app">Go to the App</Link>
    </div>
  );
}

export default Homepage;
