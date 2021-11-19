import { GetStaticProps, NextPage } from "next"
import { useForm } from "react-hook-form"
import ReactMarkdown from "react-markdown"
import { ITextFields } from "~/types/contentful"
import { contentful } from "~/utils/contentful-api"

type FormData = {
  firstName: string
  lastName: string
  email: string
  message: string
}

const ContactPage: NextPage<{ text: string }> = ({ text }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = handleSubmit(data => console.log(data))

  console.log(text)

  return (
    <section
      className="container flex flex-wrap items-center"
      style={{ height: "500px" }}
    >
      <form onSubmit={onSubmit} className="form w-full lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Hola @ me</h2>
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

        <input
          type="submit"
          value="Send 👋"
          className="morphic-btn mt-2 font-mono"
        />
      </form>

      <div className="w-1/2 flex items-center justify-center">
        <ReactMarkdown className="markdown-content morphic-shadow py-5 px-7 rounded-md">
          {text ? text : ""}
        </ReactMarkdown>
      </div>
    </section>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const text = await (await contentful.entry("4U2sKIrLCPemxYiTB2AJAY")).fields

  return {
    props: text,
  }
}

export default ContactPage
