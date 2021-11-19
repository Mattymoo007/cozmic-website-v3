import DarkModeToggle from "~/components/DarkModeToggle/DarkModeToggle"
import MenuDropDown from "~/components/MenuDropDown/MenuDropDown"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex items-center container justify-between pt-14 pb-16">
      <DarkModeToggle />
      <Link href="/">
        <a className="uppercase font-montserrat font-bold text-lg">
          cozmic creatives
        </a>
      </Link>
      <MenuDropDown />
    </nav>
  )
}

export default Navbar
