import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu=()=>
    {
        const { resId }=useParams();
        //custom hook
        const resInfo=useRestaurantMenu(resId);

        const [showIndex,setShowIndex]=useState(null);

        const handleCategoryClick=(index)=>{
            setShowIndex((prevIndex)=>(prevIndex===index?null:index));
        };

        if(resInfo === null)
                return <Shimmer/>;
const itemCards = resInfo?.cards[4]?.groupedCard?.
cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];
 const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
 console.log(categories);
        return (
            <div className="text-center">
                <h1 className="font-bold text-3xl my-10">{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
                <h3 className="font-bold">{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(",")}</h3>
                <h3 className="font-bold">{resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
             {/* categories accordion */}
             {categories.map((category,index)=> (
                <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} showItems={index===showIndex?true:false}
                onCategoryClick={()=>handleCategoryClick(index)}
                />
             ))}
            </div>
        );
    };

export default RestaurantMenu;