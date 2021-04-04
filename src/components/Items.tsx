import React from 'react'
import { itemType } from "../../type";
import { Item } from "./";
import { useDispatch, useSelector } from "react-redux";
import {
    addToFavoriteAC, 
    deleteFromFavoriteAC, 
    itemsSelector, 
    errorSelector, 
    isLoadingSelector, 
    nameInputSelector, 
    genderInputSelector, 
    statusInputSelector, 
    currentPageSelector,
    favoritesIdSelector,
    favoritesSelector,
    FetchItemsThunk
} from "../store/main/main.slice";

export const Items = () => {

    const dispatch = useDispatch();

    const items = useSelector(itemsSelector);
    const error = useSelector(errorSelector);
    const isLoading = useSelector(isLoadingSelector);

    const nameInput = useSelector(nameInputSelector);
    const genderInput = useSelector(genderInputSelector);
    const statusInput = useSelector(statusInputSelector);

    const currentPage = useSelector(currentPageSelector);

    const favoritesId = useSelector(favoritesIdSelector);
    
    const dispatchAddToFavoriteAC = (item: itemType) => {
        dispatch(addToFavoriteAC({...item}))
    }
    const dispatchDeleteFromFavoriteAC = (id: number) => {
        dispatch(deleteFromFavoriteAC(id))
    }

    React.useEffect(() => {
        dispatch(FetchItemsThunk({ nameInput, genderInput, statusInput, currentPage }));
      }, [nameInput, genderInput, statusInput, currentPage, dispatch]);
    
    return (
        <div className="listInnerWrapper">
            {
                error 
                    ? <h3>Произошла ошибка: {error}</h3> 
                    : isLoading
                        ? <h3>Загрузка...</h3>
                        : items && items.map((item: itemType) => (
                            <Item 
                                key={item.id} 
                                dispatchAddToFavoriteAC={dispatchAddToFavoriteAC} 
                                dispatchDeleteFromFavoriteAC={dispatchDeleteFromFavoriteAC}
                                favoritesId={favoritesId}
                                obj={{...item}} 
                            />
                        ))
            }
        </div>
    )
}