import { useState } from "react"
import { CSSTransition } from "react-transition-group"
import Link from "next/link"

const MenuDropDown = () => {
  const [open, setOpen] = useState(false)

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ]

  return (
    <div className="relative z-10 menu-dropdown">
      <div className="morphic-btn" onClick={() => setOpen(!open)}>
        <span className="uppercase text-xs mr-2 hidden md:inline-block font-montserrat font-normal">
          menu
        </span>
        <div className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <nav className={`dropdown-wrapper ${open ? "open" : ""}`}>
        <div className="morphic-shadow rounded dropdown"></div>
        <CSSTransition in={open} timeout={500} classNames="links">
          <div className="items-center justify-center text-sm flex px-4 py-3 dropdown-links">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <a className="dropdown-link" onClick={() => setOpen(!open)}>
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </CSSTransition>
      </nav>
    </div>
  )
}

export default MenuDropDown
