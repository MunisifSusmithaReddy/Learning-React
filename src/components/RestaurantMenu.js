import React, { useEffect, useState } from 'react';
import { MEDIA_ASSETS_URL } from '../utils/constants'; // Importing the constant for media assets URL
import SkeletonLoader from './SkeletonLoader';
import { useParams } from 'react-router'; // Importing useParams to access route parameters
import RestaurantCategory from './RestaurantCategory'; // Importing RestaurantCategory component

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const params = useParams();
    console.log('params', params);
    const { restaurantId } = params;
    useEffect(() => {
       fetchRestaurantMenu();
    }, []);
    const fetchRestaurantMenu = async () => {
     const data = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`);
        try {
            const response = await data.json();
            console.log(response);
            setResInfo(response.data);
            // Process the menu data as needed
        } catch (error) {
            console.error('Error fetching restaurant menu:', error);
        }   
    }
    console.log(resInfo);
    // Destructuring the required information from the response
    const { name, cuisines, costForTwoMessage, avgRating, cloudinaryImageId } = resInfo?.cards[2]?.card?.card?.info || {};
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card || {};
    const itemCategories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(card => card.card.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory') || [];
    console.log('itemCategories', itemCategories);
    return !resInfo ? <SkeletonLoader /> : <div className="restaurant-menu-container">
        <h1>{name}</h1>
        <div className="restaurant-menu">
            <img className='restaurant-menu-logo' src={`${MEDIA_ASSETS_URL}${cloudinaryImageId}`}/>
            <div>{avgRating}</div>
            <div>{costForTwoMessage}</div>
            <div>{cuisines?.join(',')}</div>
        </div>
        {/* {itemCards?.map(item => {
            const { name, price, description, imageId } = item.card.info
            return (
                <div className='menu-item' key={item.card.info.id}>
                    <div>
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <p>{price ? `₹${price / 100}` : 'Price not available'}</p>
                        </div>
                        <img className='restaurant-menu-item-logo' src={`${MEDIA_ASSETS_URL}${imageId}`}/>
                </div>
            )
        })} */}
        {itemCategories.map((category) => {
            return <RestaurantCategory category={category} key={category.card.card.title}/>
        })}
        </div>
    ;
}

export default RestaurantMenu;