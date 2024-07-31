import { CDN_URL } from "../utils/constant";
const RestaurantCard=(props)=>
    {
        const {resData}=props;
        return (
            <div className="m-4 p-4 w-[380px] bg-gray-100 hover:bg-gray-300 rounded-lg">
            <img className="rounded-lg w-7/12" alt="res-logo" src={CDN_URL+resData.info.cloudinaryImageId}/>
            <h3 className="font-extrabold text-lg py-4">{resData.info.name}</h3>
            <h5>{resData.info.cuisines.join(',')}</h5>
            <h4>Rating:{resData.info.avgRating}</h4>
            <h4>Delivery time:{resData.info.sla.deliveryTime}</h4>
            <h4>{resData.info.locality}</h4>
            <h4>{resData.info.costForTwo}</h4>
            </div>
        );    
    };
    export default RestaurantCard;