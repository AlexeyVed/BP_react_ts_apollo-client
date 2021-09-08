import { FC } from "react";
import { ListItemPerson } from '../../qraphql/fragments/__generated__/PersonItem.fragment';

type ListItemProps = {
    person: ListItemPerson;
    index: number
};

const ListItem: FC<ListItemProps> = ({ person, index }) => {
    return (
        <div className='list-item'>
            <div className='list-item__id'>{index}</div>
            <div className='list-item__field'>{person.name}</div>
            <div className='list-item__field'>{'s'}</div>
        </div>
    );
}

export default ListItem;
