

const styleCard = {
    backgroundColor: "#f0f0f0"
}


const RestaurantCard = (props) => {
     //console.log(props);
    const {restData} = props;
    const {image, name, cuisine, rating} = restData?.info
    //console.log(restData);
 
    return (
        <div className="res-card" style={styleCard}>
            <img 
                className="res-logo"
                alt="ALt text if image does not load" 
                src={image.url }></img>
            <h4>{name}</h4>
            <h4>{cuisine[0].name}</h4>
            <h4>{rating.rating_text} stars</h4>
            <h4>34 min</h4>
        </div>
    );
};


export default RestaurantCard;