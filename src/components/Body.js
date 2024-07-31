import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";

const Body=()=>
    {
        //Local state variables-> this is very powerful variable
        const [listOfRestaurants,setlistRestaurant]=useState([]);
        const [filteredRestaurants,setfilteredRestaurants]=useState([]);
        const [searchText,setSearchText]=useState("");
        useEffect(()=>
        {
            fetchData();
        },[]
        );
        const fetchData= async()=>
            {
                const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
                const json=await data.json();

                setlistRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                setfilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            }


    const onlineStatus=useOnlineStaus();
    if(onlineStatus===false)
        {
            return <h1>Looks like you are offline check your internet connection</h1>
        }



    return listOfRestaurants.length===0 ? <Shimmer/>:(
        <div className="body">
         <div className="filter flex">
            <div className="search m-4 p-4 flex items-center">
            <input type="text" className="border border-solid border-black"
            value={searchText}
            onChange={(e)=>{
                setSearchText(e.target.value);
            }
            }/>
            <button className="px-4 py-1 bg-green-500 m-4 rounded-lg hover:bg-red-500" onClick={()=>{
                const filteredListRestaurant=listOfRestaurants.filter((res)=>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                console.log(filteredListRestaurant);
                setfilteredRestaurants(filteredListRestaurant);
            }}>Search</button>
            </div>
            <div className="search m-4 p-4 flex items-center">
            <button className="px-4 py-2 bg-gray-200 rounded-lg"
            onClick={()=>
                {
                    const filteredList=listOfRestaurants.filter(
                        (res)=>res.info.avgRating>4
                    );
                    setfilteredRestaurants(filteredList);
                }
            }>Top rated restaurant</button>
            </div>
         </div>
         <div className="flex flex-wrap">
            {
                filteredRestaurants.map((restaurant)=>(
                <Link 
                key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                <RestaurantCard resData={restaurant}/>
                </Link>
            ))} 
        </div>   
        </div>
    );
};
export default Body;