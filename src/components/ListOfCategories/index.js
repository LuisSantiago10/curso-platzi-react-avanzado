import React from 'react';
import { Category } from '../Category';
import { List,Item } from './style';

import db from '../../../api/db.json';

const { categories } = db;

export const ListOfCategories = () =>{
    return (
        <List>
            {
                categories.map(category => <Item
                    key={category.id}
                >
                    <Category  {...category}/>
                </Item>)
            }
        </List>
    )
}