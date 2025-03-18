

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

export default Card;