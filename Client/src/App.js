import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import About from "./About";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import PageNotFound from "./PageNotFound";
import { FileUploader } from "./Fileupload";

function App() {
  return (
    <div className="App">
      {/* Everything that need to be routed, must be placed inside opening and closing router tags. */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/useraccount" element={<FileUploader />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
