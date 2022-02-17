import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import "./app.css"
import Calendar from "./pages/calendar/Calendar";
import Data from "./pages/data/Data";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import FinLinks from "./pages/finLinks/FinLinks";

function App() {
  return ( 
    <Router>
    <div>
      <Topbar/>
      <div className = "container">
        <Sidebar/>
        <Switch>
          <Route exact path = "/">
            <Home/>
          </Route>
          <Route path = "/calendar">
            <Calendar/>
          </Route>
          <Route path = "/data">
            <Data/>
          </Route>
          <Route path = "/announcements">
            <Data/>
            </Route>
          <Route path = "/finLinks">
            <FinLinks/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
