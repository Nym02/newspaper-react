import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@material-ui/core/Button";
import "./App.css";

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </>
  );
}

export default App;
