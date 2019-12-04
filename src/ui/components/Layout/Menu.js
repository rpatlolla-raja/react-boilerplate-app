import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div style={{ textAlign: 'center' }}>
    <Link to="/" style={{ padding: '10px' }}>
      Home
    </Link>
    &nbsp;
    <Link to="/about-us" style={{ padding: '10px' }}>
      About Us
    </Link>
    &nbsp;
    <Link to="/unknown" style={{ padding: '10px' }}>
      Unknown
    </Link>
  </div>
)
