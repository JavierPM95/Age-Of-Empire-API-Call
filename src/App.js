import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Civilization from "./Components/Civilization/Civilization";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Navbar/Main/Main";
import CivilizationDetail from "./Components/Civilization/CivilizationDetail";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/civilization/:id">
            <CivilizationDetail />
          </Route>
          <Route path="/civilization">
            <Civilization />
          </Route>
          <Route path="/" exact>
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
