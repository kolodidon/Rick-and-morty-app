import React from "react";
import Avatar from '../146.jpeg'
export const Item = () => {
  return (
    <div className="item">
        <div className="itemInnerWrapper">
            <img src={Avatar} alt="Avatar"/>
            <div className="itemInfoWrapper">
                <div><span>Имя: </span><b>Doodie</b></div>
                <div><span>Статус: </span><b>Doodie</b></div>
                <div><span>Пол: </span><b>Doodie</b></div>
            </div>
        </div>
    </div>
  );
};
