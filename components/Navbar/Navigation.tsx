import { FC } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const box = {
  open: {
    scaleY: 1,
    height: "45px",
    transition: {
      staggerChildren: 0.3,
    },
  },
  closed: { scaleY: 0, height: 0, transition: { delay: 0.3 } },
}

const navLink = {
  open: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.3 },
  },
  closed: { x: -500, opacity: 0, transition: { type: "spring" } },
}

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
  {
    name: "Dailies",
    href: "/dailies",
  },
]

const Navigation: FC<{ open: boolean; setOpen: Function }> = ({
  open,
  setOpen,
}) => {
  return (
    <motion.nav
      initial={box.closed}
      animate={open ? "open" : "closed"}
      variants={box}
      className="items-center justify-center text-sm flex shadow-inner bg-gray-300 dark:bg-gray-700"
      style={{ transformOrigin: "top" }}
    >
      {navLinks.map((link, index) => (
        <Link href={link.href} key={index} passHref>
          <motion.a
            variants={navLink}
            animate={open ? "open" : "closed"}
            onClick={() => setOpen(!open)}
            className="dropdown-link transition-colors mx-3 dark:text-white hover:underline underline-offset-2 font-normal"
          >
            {link.name}
          </motion.a>
        </Link>
      ))}
    </motion.nav>
  )
}

export default Navigation
