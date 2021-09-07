import "../App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
              <Home/>
          </Route>
          <Route path="/Search" exact>
              <Search/>
          </Route>
          <Route path="/Profile" exact>
              <Profile />
          </Route>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
