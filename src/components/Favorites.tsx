import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { favoritesIdSelector, favoritesSelector, addToFavoriteAC, deleteFromFavoriteAC } from "../store/main/main.slice";
import { Item } from "./";
import { itemType } from "../../type";
import { NavLink } from 'react-router-dom';

export const Favorites = () => {

    const dispatch = useDispatch()
    const favorites = useSelector(favoritesSelector);
    const favoritesId = useSelector(favoritesIdSelector);

    const dispatchAddToFavoriteAC = (item: itemType) => {
        dispatch(addToFavoriteAC({...item}))
    }
    const dispatchDeleteFromFavoriteAC = (id: number) => {
        dispatch(deleteFromFavoriteAC(id))
    }

    return (
        <div className="section list">
            <h2 className="sectionHeader">Избранные</h2>
            <div className="listInnerWrapper">
            {
                favorites.length !== 0 
                    ?  favorites.map((item: itemType) => (
                        <Item 
                            key={item.id} 
                            dispatchAddToFavoriteAC={dispatchAddToFavoriteAC} 
                            dispatchDeleteFromFavoriteAC={dispatchDeleteFromFavoriteAC}
                            favoritesId={favoritesId}
                            obj={{...item}} 
                        />))
                    : <h3>Ничего не добавлено в избранное</h3>
            }
            </div>
            <NavLink to='/' className="searchButton favoritesButton">На главную</NavLink>
        </div>
    )
}