import {Link} from 'react-router-dom'
import styles from './Nav.module.css'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'
const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className='navbar-brand'>
          <Link to='/'>MovieBuzz<ElectricBoltIcon/></Link>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav
