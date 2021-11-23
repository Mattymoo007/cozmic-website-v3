import { motion } from "framer-motion"
import { GetStaticProps, NextPage } from "next"
import { useState } from "react"
import { useForm } from "react-hook-form"
import ReactMarkdown from "react-markdown"
import { contentful } from "~/utils/contentful-api"

type FormData = {
  firstName: string
  lastName: string
  email: string
  message: string
}

const variants = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, type: "spring", stiffness: 500 },
  },
  hide: { opacity: 0, x: -100 },
}

const encode = (data: { [key: string]: string }) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactPage: NextPage<{ text: string }> = ({ text }) => {
  const [isSent, setIsSent] = useState(false)

  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit = handleSubmit(data => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...data,
      }),
    }).catch(error => alert(error))

    setIsSent(true)
  })

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container flex flex-wrap items-center justify-center"
    >
      <form
        onSubmit={onSubmit}
        className="form w-full lg:w-1/2"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />

        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        <h2 className="text-2xl font-bold mb-4 dark:text-white">Hola @ me</h2>

        <div className="form-row">
          <label className="w-full lg:w-1/2">
            First Name
            <input
              {...register("firstName")}
              className="text-input"
              type="text"
            />
          </label>
          <label className="w-full lg:w-1/2">
            Last Name
            <input
              {...register("lastName")}
              type="text"
              className="text-input"
            />
          </label>
        </div>

        <div className="form-row">
          <label className="w-full">
            Email
            <input
              {...register("email")}
              type="email"
              className="text-input "
            />
          </label>
        </div>

        <div className="form-row">
          <label className="w-full">
            Message
            <textarea
              {...register("message")}
              rows={4}
              className="text-input"
            />
          </label>
        </div>

        <div className="flex items-center mt-2">
          <input
            type="submit"
            value="Send 👋"
            className="morphic-btn py-2 px-3 rounded-md font-mono dark:text-white z-10"
          />

          <motion.span
            initial={{ opacity: 0 }}
            animate={isSent ? "show" : "hide"}
            variants={variants}
            className="text-sm text-gray-500 dark:text-white font-mono ml-5"
          >
            Message sent!😊
          </motion.span>
        </div>
      </form>

      <div className="lg:w-1/2 mt-5 flex items-center justify-center w-full">
        <ReactMarkdown className="markdown-content morphic-shadow py-5 px-7 rounded-md w-full lg:w-auto">
          {text ? text : ""}
        </ReactMarkdown>
      </div>
    </motion.section>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const text = await (await contentful.entry("4U2sKIrLCPemxYiTB2AJAY")).fields

  return {
    props: text,
  }
}

export default ContactPage
