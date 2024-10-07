import Shimmer from "../shimmerui/Shimmer";

import { useState } from "react";
import { useParams } from "react-router-dom";
import useResmenu from "../../hooks/useResmenu";
import RestaurantCategory from "./RestaurantCategory";

const ResMenu = () => {
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();

  const resInfo = useResmenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, city, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return localStorage.getItem("email") ? (
    <div>
      <div className="text-center">
        <h2 className="my-3 font-bold md:text-2xl  text-3xl">{name}</h2>
        <h3 className="font-bold mb-1">
          {cuisines.join(",")}-{costForTwoMessage}
        </h3>
        <h4 className="font-bold mb-1">{city}</h4>
        <p className="font-bold mb-1">Rating:{avgRating}</p>
      </div>
      {/* categories accordian */}
      <div className="menu">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => {
              setShowIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  ) : (
    (window.location.href = "/login")
  );
};

export default ResMenu;
