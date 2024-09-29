import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/" style={{ marginLeft: 100 }}>Campus Gate</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav" style={{ marginLeft: 700 }}>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li className="nav-item" style={{ marginLeft: 30 }}>
                        <Link className="nav-link" to="/card">Users</Link>
                    </li>
                    
                    <li className="nav-item" style={{ marginLeft: 30 }}>
                        <Link className="nav-link" to="/map">GoogleMap</Link>
                    </li>

                    {/* <li className="nav-item" style={{ marginLeft: 30 }}>
                        <Link className="nav-link" to="">Qrcode</Link>
                    </li> */}
                   
                    <li className="nav-item dropdown" style={{ marginLeft: 100 }}>
                        <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon icon={faUser} size="2x" />
                        </span>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/add">Sign Up</Link></li>
                            <li><Link className="dropdown-item" to="/login">Login</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
