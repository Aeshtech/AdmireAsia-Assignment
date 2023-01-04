import React from 'react'
import { FiLogOut } from 'react-icons/fi';
import style from './navbar.module.css';

export default function Navbar() {

  /* Set the width of the side navigation to 250px */
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
  }

    return (
        <>
            <nav className={"navbar navbar-expand-lg navbar-light " + style.navGrey}>
                <div className="container-fluid">
                    <button className="navbar-toggler ms-3 border-0 d-md-block" type="button" onClick={openNav}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/#">
                                    <FiLogOut className='fs-5 me-5' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* ------------SideNabar--------------- */}
            <aside>
                <div id="mySidenav" className={style.sidenav}>
                    <div className={style.brandContainer}>
                        <div className={style.asideBranding}>
                            <img src="./aeshtech-logo.png" alt="" className='mw-100' />
                        </div>
                        <button className={style.closebtn + " bg-transparent"} type="button" onClick={closeNav}>&times;</button>
                    </div>
                    <a href="/#" className='border-bottom border-2 fw-bold'>Dashboard</a>

                    <div className='overflow-auto flex-grow-1'>
                        <li className="nav-item dropdown list-unstyled">
                            <a className="nav-link dropdown-toggle show fw-bold mt-2" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                Masters
                            </a>
                            <ul className="dropdown-menu show bg-transparent border-0" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/#">Country Master</a></li>
                                <li><a className="dropdown-item" href="/#">State Master</a></li>
                                <li><a className="dropdown-item" href="/#">Region Master</a></li>
                                <li><a className="dropdown-item" href="/#">District Master</a></li>
                                <li><a className="dropdown-item" href="/#">City Master</a></li>
                                <li><a className="dropdown-item" href="/#">Area Master</a></li>
                                <li><a className="dropdown-item" href="/#">Brand Master</a></li>
                                <li><a className="dropdown-item" href="/#">Category Master</a></li>
                                <li><a className="dropdown-item" href="/#">Family Master</a></li>
                                <li><a className="dropdown-item" href="/#">Product Master</a></li>
                                <li><a className="dropdown-item" href="/#">HQ Master</a></li>
                                <li><a className="dropdown-item" href="/#">Distributed Master</a></li>
                                <li><a className="dropdown-item" href="/#">User Master</a></li>
                            </ul>
                        </li>
                    </div>
                </div>
            </aside>
        </>
    )
}
