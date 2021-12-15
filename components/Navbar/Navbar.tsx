import DarkModeToggle from "~/components/Navbar/DarkModeToggle"
import Navigation from "~/components/Navbar/Navigation"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="pt-14 pb-7 relative">
      <div className="flex items-center container justify-between mb-5">
        {/* Dark mode toggle */}
        <DarkModeToggle />

        {/* Logo */}
        <Link href="/">
          <a className="whitespace-nowrap uppercase font-montserrat font-bold md:text-lg absolute left-1/2 -translate-x-1/2 dark:text-white tracking-widest">
            cozmic &nbsp;creatives
          </a>
        </Link>

        {/* Menu button */}
        <div
          className="morphic-btn z-10 py-2 px-3 rounded"
          onClick={() => setOpen(!open)}
        >
          <span className="mr-2 mb-[2px] hidden md:inline-block font-mono font-normal">
            menu
          </span>
          <div className="hamburger h-3 w-4 flex flex-col justify-between">
            {[...Array(3)].map((x, i) => (
              <div
                key={i}
                className="border-t-[1.5px] border-black dark:border-white"
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navigation open={open} setOpen={setOpen} />
    </div>
  )
}

export default Navbar
