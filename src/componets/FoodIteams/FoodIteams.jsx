import React from "react";
import "./FoodIteam.css";
import { imageUrl } from "../../utils/constants";
import { StarIcon } from "../../assets/StarSvg";

import { assets } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const FoodIteams = ({
  id,
  name,
  cuisines,
  areaName,
  costForTwo,
  avgRatingString,
  cloudinaryImageId,
  slaString,
}) => {
  const { cartIteams, addIteam, removeIteam } = useContext(StoreContext);
  return (
    <div>
      <div className="card">
        <div className="cardimg1 restcard-logo">
          <div className="cardimg">
            <div className="cardimg2">
              <img src={imageUrl + cloudinaryImageId} alt={name} />
            </div>
          </div>
        </div>
        <div className="restcard-info">
          <div className="restcard-name">{name}</div>
          <div className="restcard-star-time">
            <div className="restcard-starSVG">
              <StarIcon />
            </div>
            <div className="restcard-rating gnOsqr">
              <span className="gnOsqr">{avgRatingString} ⋯⋯ </span>
              {costForTwo ?? "₹200 for two"}
            </div>
          </div>
          <div className="restcard-location">
            <div className="restcard-cuisines dnXOKm">
              {cuisines.join(", ")}
            </div>
            <div className="restcard-area dnXOKm">{areaName}</div>
          </div>
          <div className="add-to-cart">
            <div>
              Add To Cart <span className="arrow-svg">⇛</span>
            </div>

            {!cartIteams[id] ? (
              <img
                className="add"
                onClick={() => addIteam(id)}
                src={assets.add_icon_white}
                alt="add"
              />
            ) : (
              <div className="food-iteam-counter">
                <img
                  onClick={() => removeIteam(id)}
                  src={assets.remove_icon_red}
                  alt=""
                />
                <p>{cartIteams[id]}</p>
                <img
                  onClick={() => addIteam(id)}
                  src={assets.add_icon_green}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodIteams;
