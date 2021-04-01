import React from 'react'
import { Item } from './'

export const List = () => {
    return (
        <div className='section list'>
            <h2 className='sectionHeader'>Список</h2>
                <div className="listInnerWrapper">
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </div>
        </div>
    )
}