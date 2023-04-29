import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footers from "./components/Footers";
import Contact from "./components/Contact";
import Services from "./components/Services";
import"./style/App.scss";
import"./style/header.scss";
import"./style/home.scss";
import"./style/footers.scss";
import"./style/Contact.scss";
import"./style/mediaqury.scss";
import React from 'react'

export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footers/>
    </Router>
  )
}

