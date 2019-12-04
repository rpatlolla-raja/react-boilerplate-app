import React from 'react'
import { Link } from 'react-router-dom'

export default () => (<div>
    Menu<br />
    <Link to="/">Home</Link>&nbsp;
    <Link to="/about-us">About Us</Link>&nbsp;
    <Link to="/unknown">Unknown</Link>
  </div>)
