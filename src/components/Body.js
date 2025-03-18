import { useState } from "react";
import restaurants from "../utils/restaurantData";
import Card from "./Card";

const BodyComponent = () =>{
    const [res, setRestaurants] = useState(restaurants);
    const filterTopRated = () =>{
        const filtered = res.filter((r)=> {
            return parseFloat(r?.rating) > 4.0
        })
        setRestaurants(filtered)
    }
    return <div>
        <div className="top-rated">
        <button className="top-rated-button" onClick={filterTopRated}>Top Rated</button>
        </div>
        
        <div className="card-container">
        {res.map((res)=>
        <Card key={res.name} resObj = {res}/>
        )}
        </div>
    </div>
}

export default BodyComponent;