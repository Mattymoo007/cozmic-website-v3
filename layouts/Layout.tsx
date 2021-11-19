import Navbar from "~/components/Navbar/Navbar"
import Footer from "~/components/Footer/Footer"
import { FC } from "react"

const Layout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
