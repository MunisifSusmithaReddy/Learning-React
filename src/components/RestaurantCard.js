
import { MEDIA_ASSETS_URL } from '../utils/constants'; // Importing the constant for media assets URL

const RestaurantCard = (props) => { // props is an object that contains all the properties passed to the component
    console.log(props);
    const { name, cuisines, cloudinaryImageId, avgRating, costForTwo, areaName } = props.resObj.info; // Destructuring props to extract properties
    return (
         <div className='restaurant-card'>
                    <img className='restaurant-logo' src={`${MEDIA_ASSETS_URL}${cloudinaryImageId}`}/>
                    <h2>{name}</h2>
                    <h4>{cuisines.join(', ')}</h4>
                    <h4>{avgRating}</h4>
                    <h4>{costForTwo}</h4>
                    <h4>{areaName}</h4>
                </div>
    )
}

export default RestaurantCard;