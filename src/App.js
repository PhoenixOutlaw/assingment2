import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Feed } from "./components/Feed";
import { Header } from "./components/Header";
import { Userinfo } from "./components/Userinfo";
import { data_get, selectdata_get } from "./features/UserSlice";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "./axios";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/posts").then((response) => {
      dispatch(data_get(response));
    });
  }, []);

  

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Feed />
          </Route>
          <Route path="/userinfo/:id">
            <Userinfo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
