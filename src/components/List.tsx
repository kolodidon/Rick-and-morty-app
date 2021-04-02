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
  pagesCountSelector,
  currentPageSelector,
  setCurrentPageAC,
  FetchItemsThunk
} from "../store/main/main.slice";

export const List = () => {
  const dispatch = useDispatch();

  const items = useSelector(itemsSelector);
  const error = useSelector(errorSelector);
  const isLoading = useSelector(isLoadingSelector);

  const nameInput = useSelector(nameInputSelector);
  const genderInput = useSelector(genderInputSelector);
  const statusInput = useSelector(statusInputSelector);

  const pagesCount = useSelector(pagesCountSelector);
  const currentPage = useSelector(currentPageSelector);

  React.useEffect(() => {
    dispatch(FetchItemsThunk({ nameInput, genderInput, statusInput, currentPage }));
  }, [nameInput, genderInput, statusInput, currentPage, dispatch]);

  let pages: number[] = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className="section list">
      <h2 className="sectionHeader">Список</h2>

      {nameInput || genderInput || statusInput ? (
        <div className="section filters">
          <h3 className="sectionHeader">Фильтры</h3>
          {nameInput ? <div className="filterItem">Имя: {nameInput}</div> : ""}
          {genderInput ? (
            <div className="filterItem">Пол: {genderInput}</div>
          ) : (
            ""
          )}
          {statusInput ? (
            <div className="filterItem">Статус: {statusInput}</div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}

      {pagesCount ? (
        <div className="section pagination">
          <h3 className="sectionHeader">Пагинация</h3>
          {
              //@ts-ignore
              pages.map((e) => <button onClick={() => dispatch(setCurrentPageAC(e))} key={e} className='paginationItem' disabled={(currentPage === e)}>{e}</button>)
          }
        </div>
      ) : (
        ""
      )}

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
