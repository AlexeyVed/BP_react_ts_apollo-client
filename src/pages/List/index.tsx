import ListItem from '../../components/ListItem'
import ItemsFilter from '../../components/ItemsFilter'

import { usePersonList } from '../../qraphql/queries/__generated__/PersonList.query'

import './List.scss'
import { Link } from 'react-router-dom'

const List = () => {
  const { data, loading } = usePersonList()

  return (
    <div className="list">
      <div className="list__top-menu">
        <div className='list__title'>Table</div>
        <div className="list__filters">
          <ItemsFilter />
        </div>
        <div className="list__link navigation">
          <Link to="/">Back</Link>
        </div>
      </div>
      <div className='list__data-wrapper'>
        <div className='list-item header'>
          <div className='list-item__id header'>ID</div>
          <div className='list-item__field header'>First Name</div>
          <div className='list-item__field header'>Last Name</div>
        </div>
        {loading ? 'Loading...' :
          <div className='list__data-wrapper__items'>
            {data?.persons.map((person, index) => (
              <ListItem key={`item-${person._id}`} index={index} person={person} />
            ))}
          </div>
        }
      </div>
    </div>
  );
}

export default List;
