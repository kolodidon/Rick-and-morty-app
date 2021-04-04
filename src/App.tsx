import React from 'react'
import "./App.css";
import "./Reset.css";
import { Search, List, Favorites } from "./components";
import { Switch, Route } from 'react-router-dom';
import { setFavoritesToStateAC } from './store/main/main.slice'
import { useDispatch } from "react-redux";

function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    //@ts-ignore
    dispatch( setFavoritesToStateAC(JSON.parse(localStorage.getItem('favorites'))))
  }, []);

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
