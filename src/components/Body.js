
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/MockData";
import { useState } from "react";

const Body = () => {
    const [restaurantData, setRestaurantData] = useState(restaurantList);

    //let restaurantData = restaurantList; // This would typically be fetched from an API

    const topRatedRestaurant = () => {
        const filteredData = restaurantList.filter((restaurant) => restaurant.info.avgRating > 4.3);
        setRestaurantData(filteredData);
    }

    const onClearFilters = () => {
        setRestaurantData(restaurantList);
    }

    return (
        <div className="body">
            <div className='search-container'>Search</div>
            <div style={{ display: 'flex' }}>
            <button className='filter-btn' onClick={topRatedRestaurant}>Top Rated Restaurants</button>
            <button className='filter-btn' onClick={onClearFilters}>Clear Filters</button>
            </div>
            <div className='restaurant-container'>

                {restaurantData.map(restaurantObject => {
                 return <RestaurantCard resObj={restaurantObject} key={restaurantObject.info.id}/>

                })}
            </div>
            
        </div>
    )
}

export default Body;