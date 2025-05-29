
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/MockData";

const Body = () => {
    return (
        <div className="body">
            <div className='search-container'>Search</div>
            <div className='restaurant-container'>

                {restaurantList.map(restaurantObject => {
                 return <RestaurantCard resObj={restaurantObject} key={restaurantObject.info.id}/>

                })}
            </div>
            
        </div>
    )
}

export default Body;