import Navbar from "~/components/Navbar/Navbar"
import Footer from "~/components/Navbar/Footer"
import { createContext, FC, useEffect, useState } from "react"
import { getTheme, setTheme } from "~/utils/color-scheme"

interface IThemeContext {
  isDark: boolean
  toggleTheme?: () => void
}

export const ThemeContext = createContext<IThemeContext>({ isDark: false })

const Layout: FC = ({ children }) => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const theme = getTheme()
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches

    if (!theme) {
      setTheme(prefersDark ? "dark" : "light")
      setIsDark(prefersDark)
    } else {
      setTheme(theme)
      setIsDark(theme === "dark")
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    setTheme(isDark ? "light" : "dark")
  }

  const themeAppContext: IThemeContext = {
    isDark,
    toggleTheme,
  }

  return (
    <ThemeContext.Provider value={themeAppContext}>
      <div className="flex flex-col h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default Layout
