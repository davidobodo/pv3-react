import "./App.css";
import { useEffect } from "react";
function App() {
    useEffect(() => {
        const elem = document.querySelectorAll("li")[1];

        console.log(elem, "THE ELEMENTS");
    }, []);
    return (
        <ul>
            {[1, 2, 3, 4, 5, 6].map((item) => {
                return <li>{item}</li>;
            })}
        </ul>
    );
}

export default App;
