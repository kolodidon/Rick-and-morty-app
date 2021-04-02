import React from "react";
import { itemType } from "../../type";

export const Item: React.FC<itemType> = ({created, episode, gender, id, image, location, name, origin, species, status, type, url}) => {
  return (
    <div className="item">
        <div className="itemInnerWrapper">
            <img src={image} alt="Avatar"/>
            <div className="itemInfoWrapper">
                <div><span>Имя: </span><b>{name}</b></div>
                <div><span>Статус: </span><b>{status}</b></div>
                <div><span>Пол: </span><b>{gender}</b></div>
            </div>
        </div>
    </div>
  );
};
