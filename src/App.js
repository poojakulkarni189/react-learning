import React from "react";
import ReactDOM from "react-dom/client";
import HeadingComponent from "./components/Header";
import BodyComponent from "./components/Body";

const AppComponent = () =>{
    return <div>
        <HeadingComponent />
        <BodyComponent />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppComponent />)