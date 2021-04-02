import React from 'react'
import { useDispatch } from "react-redux";
import { setCurrentPageAC } from "../store/main/main.slice";


export const Pagination: React.FC<{pagesCount: number, currentPage: number}> = ({pagesCount, currentPage}) => {

    const dispatch = useDispatch();

    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
        <div className="section pagination">
            <h3 className="sectionHeader">Пагинация</h3>
            {
                pages.map((e) => <button onClick={() => dispatch(setCurrentPageAC(e))} key={e} className='paginationItem' disabled={(currentPage === e)}>{e}</button>)
            }
        </div>
    )
}