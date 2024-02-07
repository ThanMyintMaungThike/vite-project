import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
        <nav>
            <Link to="/about">About</Link>
            <Link to="/contect">Contect</Link>
            <Link to="/blog">Blog</Link>
        </nav>
    </div>
  )
}

export default Nav
