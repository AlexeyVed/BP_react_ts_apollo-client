import { Link } from "react-router-dom";

import './Main.scss'

const Main = () => {
  return (
    <div className="main">
      <div className='list__title'>Main</div>
      <div className='main__link-to-list navigation'>
        <Link to="/list">Move to list</Link>
      </div>
    </div>
  );
}

export default Main;
