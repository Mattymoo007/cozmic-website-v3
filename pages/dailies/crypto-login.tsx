import React, { ReactNode } from "react"
import { FiCheck, FiTrendingUp, FiX } from "react-icons/fi"
import {
  AiFillFacebook,
  AiFillGoogleCircle,
  AiFillTwitterCircle,
} from "react-icons/ai"
import LayoutMinimal from "~/layouts/LayoutMinimal"

const listItems = [
  {
    title: "High quality research",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima impedit architecto debitis repellendus, dolorum eos nulla consequuntur ut ipsam eligendi accusamus iure asperiores",
  },
  {
    title: "Unlimited reading time",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illum aperiam impedit, harum blanditiis ullam vel itaque repudiandae assumenda reprehenderit incidunt dignissimos.",
  },
  {
    title: "An add-free experience",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quod officia, dicta accusamus rerum soluta vel aspernatur illum nisi ducimus corporis quae mollitia.",
  },
]

const socialLogin = [
  { title: "Google", icon: <AiFillGoogleCircle /> },
  { title: "Facebook", icon: <AiFillFacebook /> },
  { title: "Twitter", icon: <AiFillTwitterCircle /> },
]

const CryptoLogin = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-[url('https://images.unsplash.com/photo-1618172193763-c511deb635ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80')]">
      <article className="mt-16 grid grid-cols-2 items-center gap-[60px] bg-black/60 lg:w-[75%] py-[80px] px-[60px] rounded-[30px] text-white relative backdrop-blur-md shadow-[0_0_0_3px_rgba(245,40,145,0.6)]">
        {/* close button */}
        <span className="cursor-pointer absolute h-9 w-9 rounded-full bg-black/30 border border-white/30 top-[30px] right-[30px] flex items-center justify-center">
          <FiX />
        </span>

        {/* left col */}
        <div className="pr-10">
          <p className="text-sm font-titillium mb-3 flex items-center">
            <FiTrendingUp className="mr-2" />
            Gain insights to the most trusted news platform
          </p>
          <h1 className="text-5xl font-bold mb-16">Sign up today!</h1>

          <ul>
            {listItems.map((item, index) => (
              <li key={index} className="flex mt-5">
                <FiCheck className="flex-shrink-0 bg-pink-500 rounded-full h-8 w-8 p-[5px] pt-[6px]" />

                <div className="ml-4">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm mt-2">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* right col */}
        <div className="border-l border-white/30 pl-14 pr-10">
          <form action="" className="form-crypto">
            <div className="form-input ">
              <label htmlFor="source">How did you find out about us?</label>
              <select name="source" id="source" className="block w-1/3">
                <option value="">Social media</option>
                <option value="">Word of mouth</option>
                <option value="">Newspapers</option>
              </select>
            </div>

            <div className="form-input">
              <label htmlFor="firstname">Name</label>
              <input
                placeholder="First name"
                type="text"
                name="firstname"
                id="firstname"
              />
            </div>

            <div className="form-input">
              <label htmlFor="email">Email</label>
              <input placeholder="Email" type="email" name="email" id="email" />
            </div>

            <div className="form-input">
              <label htmlFor="password">Password</label>
              <input
                placeholder="Password"
                type="password"
                name="password"
                id="password"
              />
            </div>

            <input
              type="submit"
              value="Create Account"
              className="bg-gradient-to-r from-purple-700 to-pink-500 text-white font-bold py-3 px-14 rounded-full font-titillium text-lg mt-8"
            />
          </form>

          <div className="text-sm flex items-center mt-10">
            <p>Or sign up with</p>
            <div className="bg-white/30 flex-grow h-[1px] ml-3" />
          </div>

          <div className="flex mt-3">
            {socialLogin.map((item, index) => (
              <button
                key={index}
                className="flex items-center bg-black/30 border border-white/30 px-5 py-3 text-sm rounded-xl mr-2"
              >
                {item.icon}
                <p className="ml-2">{item.title}</p>
              </button>
            ))}
          </div>
        </div>
      </article>

      <p className="font-normal text-white/90 mt-4 text-sm">
        By signing up you agree to our{" "}
        <span className="text-blue-400 underline cursor-pointer">
          Privacy Policy
        </span>{" "}
        and{" "}
        <span className="text-blue-400 underline cursor-pointer">
          Terms & Conditions
        </span>
        .
      </p>
    </div>
  )
}

CryptoLogin.getLayout = function getLayout(page: ReactNode) {
  return <LayoutMinimal>{page}</LayoutMinimal>
}

export default CryptoLogin
