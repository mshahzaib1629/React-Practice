import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <Link className="navbar-brand" to="/">Vidly</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="/">Movies</NavLink>
                    <NavLink className="nav-item nav-link" to="/customers">Customers</NavLink>
                    <NavLink className="nav-item nav-link" to="/rentals">Rentals</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;