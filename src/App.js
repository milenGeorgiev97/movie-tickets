import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/movie-tickets.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./App.css";
import { First } from "./views/First";
import { Second } from "./views/Second";
import { Third } from "./views/Third";
import { WithHistory } from "./components/HOC/WithHistory";
const FirstPage = WithHistory(First);
const SecondPage = WithHistory(Second);
const ThirdPage = WithHistory(Third);
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/first" render={(props) => <FirstPage {...props} />} />
          <Route path="/second" render={(props) => <SecondPage {...props} />} />
          <Route path="/third" render={(props) => <ThirdPage {...props} />} />
        </Switch>
        <Redirect to="/first" />
      </div>
    </Router>
  );
}

export default App;
