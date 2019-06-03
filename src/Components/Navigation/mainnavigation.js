import React from 'react';
import { NavLink } from "react-router-dom";

const mainNavBar = () => (
    <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink to="/welcome" className="navbar-brand">NoteTakingApp</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample03">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item">
                        <NavLink to="/notes" className="nav-link">Notes</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink to="/addnotes" className="nav-link">Addnotes</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink to="/adderror" className="nav-link">Adderror</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink to="/errors" className="nav-link">Error details</NavLink>
                    </li>
                    
                </ul>

            </div>
        </nav>
    </header>
);

export default mainNavBar;