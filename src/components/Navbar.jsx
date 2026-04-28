import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar ss-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/assets/logo.png" alt="Swadesh Developer" />
        </Link>

        <nav className={`nav-links ${open ? 'active' : ''}`}>
          <a href="/#home" onClick={() => setOpen(false)}>Home</a>
          <a href="/#about" onClick={() => setOpen(false)}>About</a>
          <a href="/#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="/#contact" onClick={() => setOpen(false)}>Contact</a>
          <a href="/#contact" className="btn btn-gold" onClick={() => setOpen(false)}>
            Book Visit
          </a>
        </nav>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>
    </header>
  )
}