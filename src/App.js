import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Navbar from "./components/Navbar/Navigation";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TechCrunch from "./components/TechCrunch/TechCrunch";
import WallStreet from "./components/WallStreet/WallStreet";

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>

        <Switch>
          <Route path="/" exact component={WallStreet} />
          <Route path="/techcrunch" component={TechCrunch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
