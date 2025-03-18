import { LOGO_URL } from "../utils/constants";

const HeadingComponent = () =>{
    return <div className="nav-bar">
        <img className="nav-bar-logo" src={LOGO_URL} alt = "food-logo" />
        <ul className="nav-bar-items">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
    </div>
}

export default HeadingComponent;
