import { FC } from "react";

import './ItemsFilter.scss'

type ListItemProps = {
    // author: ListItemAuthor;
};

const ItemsFilter: FC<ListItemProps> = ({ }) => {
    return (
        <div className='items-filter'>
            <div className='items-filter__text-field'>
                First Name: <input />
            </div>
            <div className='items-filter__text-field'>
                Last Name: <input />
            </div>

        </div>
    );
}

export default ItemsFilter;
