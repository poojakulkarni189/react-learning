import React from "react";
import ReactDOM from "react-dom/client";
import restaurants from './restaurantData'

const HeadingComponent = () =>{
    return <div className="nav-bar">
        <img className="nav-bar-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3T2EC9zn1ivdglk_p-VXWqGC9qXNvf0Lg0Q&s" alt = "food-logo" />
        <ul className="nav-bar-items">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
    </div>
}

const BodyComponent = () =>{
    return <div>
        <p>search</p>
        <div className="card-container">
        {restaurants.map((res)=>
        <Card key={res.name} resObj = {res}/>
        )}
        </div>
    </div>
}

const Card = (props) =>{
    const {resObj} = props
    const {image, name, rating, cuisine, price, deliveryTime } = resObj;
    return <div className="card">
        <img className="card-img" src={image} alt="card-img" />
        <p>{name}</p>
        <p>{rating}</p>
        <p>{cuisine}</p>
        <p>{price}</p>
        <p>{deliveryTime}</p>
    </div>
}
const AppComponent = () =>{
    return <div>
        <HeadingComponent />
        <BodyComponent />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppComponent />)