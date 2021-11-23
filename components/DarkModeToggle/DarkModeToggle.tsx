import React, { useContext } from "react"
import { ThemeContext } from "~/layouts/Layout"

const DarkModeToggle = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext)

  return (
    <span onClick={toggleTheme} className="morphic-btn rounded-full h-8 w-8">
      {!isDark ? "🌒" : "☀️"}
    </span>
  )
}

export default DarkModeToggle
