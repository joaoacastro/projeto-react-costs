import { Link } from 'react-router-dom'
import { styles } from './Navbar.module.css';

function Navbar() {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="contact">Contato</Link>
        <Link to="newproject">Novo Projeto</Link>
    </div>
  )
}
export default Navbar;
