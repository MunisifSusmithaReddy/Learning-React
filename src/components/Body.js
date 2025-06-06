
import RestaurantCard from "./RestaurantCard";
// import { restaurantList } from "../utils/MockData";
import { useState, useEffect } from "react";
import SkeletonLoader from "./SkeletonLoader";

const Body = () => {
    const [restaurantData, setRestaurantData] = useState([]); // Not going to be changed because this will have the API data

    const [filteredData, setFilteredData] = useState([]); // Updating UI with filters

    const [searchText, setSearchText] = useState(""); // This will be used to filter the restaurant data based on the search input

    //let restaurantData = restaurantList; // This would typically be fetched from an API


    useEffect(() => { // Just a normal function that runs when the component renders
        fetchRestaurantData();
    }, []); // First is a callback function, second is an array of dependencies. If empty, it runs only once when the component mounts.


    // const fetchRestaurantData = () => { // Promise
    //    const data = fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    //      data
    //           .then(response => response.json()) // This returns a promise
    //           .then(json => { // Convert the response to JSON
    //             const restaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    //             console.log(restaurants);
    //             setRestaurantData(restaurants);
    //             setFilteredData(restaurants);
    //           })
    //           .catch(error => console.error('Error fetching restaurant data:', error));
    // }

    const fetchRestaurantData = async () => { // Async and Await
        const data = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        try {
            const response = await data.json(); // This wil just return the response in JSON format and it fulfills the promise
            console.log(response);
            const restaurants = response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
            console.log(restaurants);
            setRestaurantData(restaurants);
            setFilteredData(restaurants);
        }
        catch (error) {
            console.error('Error fetching restaurant data:', error);
        }
    }

    const topRatedRestaurant = () => {
        const filteredData = restaurantData.filter((restaurant) => restaurant.info.avgRating > 4.3);
        setFilteredData(filteredData);
    }

    const onClearFilters = () => {
        setFilteredData(restaurantData);
    }

    const onSearchInputChange = (e) => {
        console.log("Input changed", e.target.value);
        setSearchText(e.target.value);
    }

    const onSearchButtonClick = () => {
        console.log("Search button clicked", searchText);
        if(searchText) {
            const filteredRestaurantData = restaurantData.filter((restaurant) => {
                return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
            })
            setFilteredData(filteredRestaurantData);
        } else {
             setFilteredData(restaurantData);
        }
    }

    console.log(filteredData);
    return (
        restaurantData.length == 0 ? <SkeletonLoader /> : <div className="body">
            <div className='search-container'>
                <div>
                    <input type="text" className="search-input" placeholder="Search for restaurants" value={searchText} onChange={onSearchInputChange} />
                    <button className='search-btn' onClick={onSearchButtonClick}>Search</button>
                </div>

                <div style={{ display: 'flex' }}>
                    <button className='filter-btn' onClick={topRatedRestaurant}>Top Rated Restaurants</button>
                    <button className='filter-btn' onClick={onClearFilters}>Clear Filters</button>
                </div>
            </div>
            <div className='restaurant-container'>

                {filteredData.map(restaurantObject => {
                    return <RestaurantCard resObj={restaurantObject} key={restaurantObject.info.id} />

                })}
            </div>

        </div>
    )
}

export default Body;