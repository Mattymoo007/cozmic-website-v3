import React, { useState } from "react"
import { setColorScheme } from "~/utils/color-scheme"

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  const toggleIsDark = () => {
    setColorScheme(isDark)
    setIsDark(!isDark)
  }

  return (
    <>
      <span onClick={toggleIsDark} className='morphic-btn rounded-full h-8 w-8'>
        {isDark ? "🌒" : "☀️"}
      </span>
    </>
  )
}

export default DarkModeToggle
