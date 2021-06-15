import './styles.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/">
        <h1>Bootcamp DevSuperior</h1>
      </Link>
    </div>
  );
};

export default Navbar;
