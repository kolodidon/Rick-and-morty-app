import React from 'react'
import "./App.css";
import "./Reset.css";
import { Search, List } from "./components";
import { FetchItemsThunk } from "./store/main/main.slice"

function App() {
  return(
    <div className="App">
      <Search />
      <List />
    </div>
  );
}

export default App;
