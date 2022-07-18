import React, {useState} from "react";
import Layout from "./components/Layout";
import Aos from "aos";
import 'aos/dist/aos.css';


function App() {
  Aos.init()
  
  return (
    <>
    <div id='preloader'></div>
    <Layout />
    </>
    
  );
}

export default App;
