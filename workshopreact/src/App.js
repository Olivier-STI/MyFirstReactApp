import './App.css';
import Home from './Home';
import Contact from './Contact';
import Menu from './Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  <Router>
    <div class="nav-wrapper">
      <nav>
        <a href=".#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="./Menu">Menu</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/Contact"><Contact/></Route>
        <Route path="/Home"><Home/></Route>
        <Route path="/Menu"><Menu/></Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
