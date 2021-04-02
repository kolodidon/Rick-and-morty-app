import React from "react";
import { Items, Filters, Pagination } from "./";

export const List = () => {

    return (
        <div className="section list">
            <h2 className="sectionHeader">Список</h2>
            <Filters />
            <Pagination />
            <Items />
        </div>
    );
};