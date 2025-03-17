import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1>Hello World from JSX</h1>

const HeadingComponent = () =>{
    return <>
    <h1>From React Element</h1>
    {jsxHeading}
    </>
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />)