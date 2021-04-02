import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { pagesCountSelector, currentPageSelector, setCurrentPageAC } from "../store/main/main.slice";


export const Pagination = () => {

    const dispatch = useDispatch();

    const pagesCount = useSelector(pagesCountSelector);
    const currentPage = useSelector(currentPageSelector);

    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    if (pagesCount) {
        return (
            <div className="section pagination">
            <h3 className="sectionHeader">Пагинация</h3>
                {
                    pages.map((e) => (
                        <button 
                            key={e}
                            onClick={() => dispatch(setCurrentPageAC(e))} 
                            className='paginationItem' 
                            disabled={(currentPage === e)}
                        >{e}</button>
                    ))
                }
            </div>
        );
    } else {
        return null
    }
}