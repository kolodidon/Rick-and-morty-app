import React from 'react'
import "./App.css";
import "./Reset.css";
import { Search, List, Favorites } from "./components";
import { Switch, Route } from 'react-router-dom';


function App() {
  return(
    <div className="App">
      <Switch>
        <Route path = '/' exact>
          <Search />
          <List />
        </Route>

        <Route path = '/favorites' exact>
          <Favorites/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
