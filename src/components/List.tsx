import React from "react";
import { Item } from "./";
import { itemType } from "../../type";
import { useDispatch, useSelector } from "react-redux";
import {
  itemsSelector,
  errorSelector,
  isLoadingSelector,
  nameInputSelector,
  genderInputSelector,
  statusInputSelector,
  FetchItemsThunk,
} from "../store/main/main.slice";

export const List = () => {
  const dispatch = useDispatch();

  const items = useSelector(itemsSelector);
  const error = useSelector(errorSelector);
  const isLoading = useSelector(isLoadingSelector);

  const nameInput = useSelector(nameInputSelector);
  const genderInput = useSelector(genderInputSelector);
  const statusInput = useSelector(statusInputSelector);

  React.useEffect(() => {
    dispatch(FetchItemsThunk({ nameInput, genderInput, statusInput }));
  }, [nameInput, genderInput, statusInput, dispatch]);

  return (
    <div className="section list">
      <h2 className="sectionHeader">Список</h2>

      {
        nameInput || genderInput || statusInput 
            ? <div className="section filters">
                <h3 className="sectionHeader">Фильтры</h3>
                {nameInput ? <div className="filterItem">Имя: {nameInput}</div> : ""}
                {genderInput ? <div className="filterItem">Пол: {genderInput}</div> : ""}
                {statusInput ? <div className="filterItem">Статус: {statusInput}</div>: ""}
            </div>   
            : ""
      }

      <div className="section pagination">
        <h3 className="sectionHeader">Пагинация</h3>
        <div className="paginationItem">1</div>
        <div className="paginationItem">2</div>
        <div className="paginationItem">3</div>
        <div className="paginationItem">4</div>
        <div className="paginationItem">50</div>
      </div>

      <div className="listInnerWrapper">
        {error ? (
          <h3>Произошла ошибка: {error}</h3>
        ) : isLoading ? (
          <h3>Загрузка...</h3>
        ) : (
          items &&
          items.map((item: itemType) => <Item key={item.id} {...item} />)
        )}
      </div>
    </div>
  );
};
