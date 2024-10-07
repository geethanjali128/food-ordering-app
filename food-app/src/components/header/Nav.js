import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../hooks/useOnlineStatus";

const Nav = () => {
  const [user, setUser] = useState(localStorage.getItem("email"));

  const onlineStatus = useOnlineStatus();

  // subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.cartItems);
  // console.log(cartItems)

  const handleLogout = () => {
    setUser(localStorage.clear("email"));
  };

  return (
    <div>
      <ul className=" text-lowercase lg:flex text-center text-sm md:text-lg gap-3 md:gap-10 ml-2 md:ml-[500px] py-1  mt-5 md:mt-7 font-semibold align-items-center text-blue-600 md:text-black ">
        <li className="cursor-pointer">
          {" "}
          {onlineStatus ? <h4>online:✅</h4> : <h4>offline:🔴</h4>}{" "}
        </li>
        <li className="py-1 md:py-0 hover:bg-slate-300">
          <Link to="/">Home</Link>
        </li>
        <li className="py-1 md:py-0">
          <Link to="/about">About</Link>
        </li>
        <li className="pt-1 pb-3 md:py-0">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="size-7 relative z-10  -mt-2 md:-mt-1 ml-44 md:ml-1 py-3 md:py-0 ">
          <Link to="/cart">
            <i
              className="bi bi-bag-fill"
              style={{ fontSize: "30px", color: "skyblue" }}
            ></i>
          </Link>
        </li>
        <li className="  bg-yellow-400  absolute  right-[165px]   md:right-[170px] md:bottom-10  bottom-14 font-bold px-2  rounded-full text-sm md:text-lg">
          {cartItems.length}
        </li>
        <li className="md:bg-green-400 px-4 rounded-sm w-24 ml-36 md:ml-1 mt-4 md:mt-0 md:py-0 py-1">
          {user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
