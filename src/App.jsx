import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./compo/Layout";
import Home from "./compo/Home";
import About from "./compo/About";
import Footer from "./compo/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<div>Contact</div>}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
