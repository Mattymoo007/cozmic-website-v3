import Link from "next/link"
import { FiHome, FiTwitter } from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="container py-14">
      <div className="flex justify-center">
        <Link href="/">
          <a className="morphic-btn rounded-full h-8 w-8 mx-2">
            <FiHome />
          </a>
        </Link>
        <a
          href="https://twitter.com/CozmicMatt"
          target="_blank"
          rel="noreferrer"
          className="morphic-btn rounded-full h-8 w-8 mx-2"
        >
          <FiTwitter />
        </a>
      </div>
      <p className="text-center text-sm text-gray-500 mt-4">
        © Cozmic Creatives {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
