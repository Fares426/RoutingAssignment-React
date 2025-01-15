import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return <nav className="navbar navbar-expand-lg navbar-dark fixed-top ">
  <div className="container-fluid py-3 ">
    <Link className="navbar-brand " id='nav-logo' to="">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse me-5 pe-5" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className='nav-item'>
        <NavLink className="nav-link text-white link" to={'about'}>ABOUT</NavLink>
        </li>
        <li className='nav-item'>
        <NavLink className="nav-link text-white link" to={'portfolio'}>PORTFOLIO</NavLink>
        </li>
        <li className='nav-item'>
        <NavLink className="nav-link text-white link" to={'contact'}>CONTACT</NavLink>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
}
