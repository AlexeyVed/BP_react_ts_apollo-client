import { FC } from "react";
import { ListItemAuthor } from './__generated__/ListItem.fragment';

type ListItemProps = {
    author: ListItemAuthor;
};

const ListItem: FC<ListItemProps> = ({ author }) => {
    return (
        <div className='list-item'>
            <div className='list-item__id'>{author.id}</div>
            <div className='list-item__field'>{author.firstName}</div>
            <div className='list-item__field'>{author.lastName}</div>
        </div>
    );
}

export default ListItem;
