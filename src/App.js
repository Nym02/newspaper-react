import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar/Navigation";
import TechCrunch from "./components/TechCrunch/TechCrunch";
import WallStreet from "./components/WallStreet/WallStreet";
import TopBusiness from "./components/TopBusiness/TopBusiness";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>

        <Switch>
          <Route path="/" exact component={WallStreet} />
          <Route path="/techcrunch" component={TechCrunch} />
          <Route path="/topbusiness" component={TopBusiness} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
