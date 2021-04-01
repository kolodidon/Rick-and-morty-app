import React from 'react'

export const Search = () => {
    return (
        <div className='section search'>
            <div className="searchInputs">
                <h2 className="sectionHeader searchHeader">Поиск</h2>
                <div className="searchInput searchByNameWrapper">
                    <label htmlFor="searchByName">Поиск по имени:</label>
                    <input type="search" id='searchByName' name="searchByName" placeholder='Введите имя'/>
                </div>
                <div className="searchInput filterByGenderWrapper">
                    <label htmlFor="filterByGender">Фильтр по полу:</label>
                    <input type="search" id='filterByGender' name="filterByGender" placeholder='Укажите пол'/>
                </div>
                <div className="searchInput filterByStatusWrapper">
                    <label htmlFor="filterByStatus">Фильтр по статусу:</label>
                    <input type="search" id='filterByStatus' name="filterByStatus" placeholder='Укажите статус'/>
                </div>
            </div>
        </div>
    )
}