import React from "react";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
      
          <Switch>
            <Route exact path="/" component={Search} />
            {/* <Route exact path="/books" component={Books} /> */}
            <Route exact path="/books/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
        
        <Search />
      </div>
    </Router>
  );
}

export default App;
