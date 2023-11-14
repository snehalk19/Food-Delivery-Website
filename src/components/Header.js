import { LOGO_URL } from "../utils/constants"; // named import
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  const onlinestatus = useOnlineStatus();

  // Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
      <div className="logo-container">
        <img className="w-2/6" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-2">Online Status: {onlinestatus ? "✅" : "🔴"}</li>
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>

          <li className="px-2">
            <Link to="/about"> About </Link>
          </li>
          <li className="px-2">
            <Link to="/grocery"> Grocery </Link>
          </li>
          <li className="px-2">
            <Link to="/contact"> Contact </Link>
          </li>

          <li className="px-2 font-bold">
            {" "}
            <Link to="/cart"> Cart({cartItems.length} items) </Link>
          </li>
          <button
            className="px-2"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {" "}
            {btnName}
          </button>

          <li className="px-2 font-bold"> {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
