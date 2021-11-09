import "./App.css";
import { useEffect } from "react";

import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/Banner";
function App() {
    useEffect(() => {
        const elem = document.querySelectorAll("li")[1];

        console.log(elem, "THE ELEMENTS");
    }, []);
    return (
        <div>
            <Navbar />
            <Banner />
        </div>
    );
}

export default App;
