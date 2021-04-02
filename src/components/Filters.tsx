import React from "react";
import { useSelector } from "react-redux";
import { nameInputSelector, genderInputSelector, statusInputSelector } from "../store/main/main.slice";

export const Filters = () => {

    const nameInput = useSelector(nameInputSelector);
    const genderInput = useSelector(genderInputSelector);
    const statusInput = useSelector(statusInputSelector);

    if (nameInput || genderInput || statusInput) {
        return (
            <div className="section filters">
                <h3 className="sectionHeader">Фильтры</h3>
                { nameInput ? <div className="filterItem">Имя: {nameInput}</div> : "" }
                { genderInput ? <div className="filterItem">Пол: {genderInput}</div> : "" }
                { statusInput ? <div className="filterItem">Статус: {statusInput}</div> : "" }
            </div>
        );
    } else {
        return null
    }
};
