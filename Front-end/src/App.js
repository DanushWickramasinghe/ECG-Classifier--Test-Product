import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      <Navbar />
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>

    // <Router>
    //   <Switch>
    //     <Route exact path="./Register" component={Register} />
    //     <Route path="./Login" component={Login} />
    //   </Switch>
    // </Router>
  );
}

export default App;
