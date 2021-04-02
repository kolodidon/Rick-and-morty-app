import React from "react";
import { itemType } from "../../type";
import YellowStar from "../assets/Yellow-star.png"
import GreyStar from "../assets/Grey-star.png"

interface PropsType {
    obj: itemType
    dispatchAddToFavoriteAC: (item: itemType) => void
    dispatchDeleteFromFavoriteAC: (id: number) => void
    favoritesId: number[]
}

export const Item: React.FC<PropsType> = ({obj, dispatchAddToFavoriteAC, dispatchDeleteFromFavoriteAC, favoritesId}) => {

    const {created, episode, gender, id, image, location, name, origin, species, status, type, url} = { ...obj }
    const [isFavorite, setIsFavorite] = React.useState(favoritesId.includes(id))
    const onStarClick = (obj: itemType) => {
        setIsFavorite(!isFavorite);
        isFavorite
            ? dispatchDeleteFromFavoriteAC(obj.id)
            : dispatchAddToFavoriteAC(obj)
    }

    return (
        <div className="item">
            <div className="itemInnerWrapper">
                <div className="itemImgWrapper">
                    <img className='avatar' src={image} alt="Avatar"/>
                    <img className='favoriteMark' onClick={() => onStarClick(obj)} src={isFavorite ? YellowStar : GreyStar} alt="star"/>
                </div>
                <div className="itemInfoWrapper">
                    <div><span>Имя: </span><b>{name}</b></div>
                    <div><span>Статус: </span><b>{status}</b></div>
                    <div><span>Пол: </span><b>{gender}</b></div>
                </div>
            </div>
        </div>
    );
};
