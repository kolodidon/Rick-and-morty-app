import React from "react";
import { Item } from "./";
import { itemType } from "../../type";
import { useDispatch, useSelector } from "react-redux";
import { Filters, Pagination } from "./"; 
import {
  itemsSelector,
  errorSelector,
  isLoadingSelector,
  nameInputSelector,
  genderInputSelector,
  statusInputSelector,
  pagesCountSelector,
  currentPageSelector,
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

  return (
    <div className="section list">
      <h2 className="sectionHeader">Список</h2>

      {
        nameInput || genderInput || statusInput 
            ? <Filters nameInput={nameInput} genderInput={genderInput} statusInput={statusInput} />
            : ""
      }

      {
        pagesCount
            ? <Pagination pagesCount={pagesCount} currentPage={currentPage} />
            : ""
      }

      <div className="listInnerWrapper">
        {
            error 
                ? <h3>Произошла ошибка: {error}</h3> 
                : isLoading
                    ? <h3>Загрузка...</h3>
                    : items && items.map((item: itemType) => <Item key={item.id} {...item} />)
        }
      </div>
      
    </div>
  );
};
