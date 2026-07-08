import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="logo">Carl Ko Portfolio</Link>
    </header>
  )
}
