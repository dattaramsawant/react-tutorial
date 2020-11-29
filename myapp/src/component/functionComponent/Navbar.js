import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navBarMain">
            <div>Logo</div>
            <div>
                {/* <Link to='/' exact className="navTag">Home</Link>
                <Link to='/about'  className="navTag">About</Link> */}

                <NavLink to='/' exact activeClassName="active" className="navTag">Home</NavLink>
                <NavLink to='/about' exact activeClassName="active" className="navTag">About</NavLink>
            </div>
        </div>
    )
}
