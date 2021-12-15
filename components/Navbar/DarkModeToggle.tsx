import React, { useContext } from "react"
import { ThemeContext } from "~/layouts/Layout"
import { FiSun, FiMoon } from "react-icons/fi"

const DarkModeToggle = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext)

  return (
    <span onClick={toggleTheme} className="morphic-btn rounded-full h-8 w-8">
      {!isDark ? <FiMoon /> : <FiSun />}
    </span>
  )
}

export default DarkModeToggle
