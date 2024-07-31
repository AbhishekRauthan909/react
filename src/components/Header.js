import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header=()=>
    {
        
        const [btnNameReact,setBtnNameReact]=useState("login");//by default login
        const onlineStatus=useOnlineStaus();
        const {loggedInUser}=useContext(UserContext);
        const cartItems=useSelector((store)=>store.cart.items);
        return (
        <div className="flex justify-between bg-pink-50 shadow-lg mb-2">
            <div className="logo-container">
                <img className="w-32" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status:{onlineStatus?"✅":"🛑"}</li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About us</Link>
                    </li>

                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold text-xl">
                    <Link to="/cart">Cart ({cartItems.length} items)</Link>
                    </li>
                    <button className="px-4" 
                    onClick={()=>
                        {
                            btnNameReact==="login"?
                            setBtnNameReact("logout"):
                            setBtnNameReact("login");
                        }
                    }
                    >{btnNameReact}</button>
                    <li className="px-4">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};
export default Header;