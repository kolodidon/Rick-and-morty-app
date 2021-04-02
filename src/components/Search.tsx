import React from 'react'
import { useDispatch } from 'react-redux';
import { setInputsAC } from "../store/main/main.slice"

export const Search = () => {
    let [nameInput, setNameInput] = React.useState('')
    let [genderInput, setGenderInput] = React.useState('')
    let [statusInput, setStatusInput] = React.useState('')
    const dispatch = useDispatch()

    function searchButtonOnClick() {
        dispatch(setInputsAC({nameInput, genderInput, statusInput}))
        setNameInput('');
        setGenderInput('');
        setStatusInput('');
    }

    return (
        <div className='section search'>
            <div className="searchInputs">
                <h2 className="sectionHeader searchHeader">Поиск</h2>
                <div className="searchInput searchByNameWrapper">
                    <label htmlFor="searchByName">Поиск по имени:</label>
                    <input type="search" id='searchByName' name="searchByName" placeholder='Введите имя' onChange={(event) => setNameInput(event.target.value)} value={nameInput}/>
                </div>
                <div className="searchInput filterByGenderWrapper">
                    <label htmlFor="filterByGender">Фильтр по полу:</label>
                    <input type="search" id='filterByGender' name="filterByGender" placeholder='Укажите пол' onChange={(event) => setGenderInput(event.target.value)} value={genderInput}/>
                </div>
                <div className="searchInput filterByStatusWrapper">
                    <label htmlFor="filterByStatus">Фильтр по статусу:</label>
                    <input type="search" id='filterByStatus' name="filterByStatus" placeholder='Укажите статус' onChange={(event) => setStatusInput(event.target.value)} value={statusInput}/>
                </div>    
            </div>
            <button type='submit' className='searchButton' onClick={searchButtonOnClick}>Искать</button>
        </div>
    )
}