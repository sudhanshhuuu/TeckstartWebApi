import React from 'react'
import { Link } from 'react-router-dom';
import {HashLink} from "react-router-hash-link"


export default function Header() {
  return (
   <>
    <nav>
        <h1>TechStar</h1>
        <main>
            <HashLink to={'/TeckstartWebApi'}>Home</HashLink>
            <Link to={'/contact'}>Contact</Link>
            <HashLink to={'TeckstartWebApi/#about'}>About</HashLink>
            <HashLink to={'TeckstartWebApi/#brands'}>Brands</HashLink>
            <Link to={'/services'}>Services</Link>
        </main>
    </nav>
   </>
  )
}
