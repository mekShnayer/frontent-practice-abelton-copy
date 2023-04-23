import React from "react";
import About from "./pages/About";
import Header from "./components/Header";
import './styles/App.css'
const App = () => {
    return (
        <div id="main" >
           
            <Header/>
            <About />
        </div>
    )
}

export default App