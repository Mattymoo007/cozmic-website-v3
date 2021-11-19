import { Asset } from "contentful"
import React, { FC } from "react"
import ReactMarkdown from "react-markdown"
import { IText } from "~/types/contentful"
import { contentful } from "~/utils/contentful-api"
import Image from "next/image"
import { GetStaticProps, NextPage } from "next"

const AboutPage: NextPage<{ image: Asset; text: IText }> = ({
  image,
  text,
}) => {
  const {
    fields: { text: content },
  } = text
  const {
    fields: {
      title,
      file: {
        url,
        details: { image: cfImage },
      },
    },
  } = image

  return (
    <div className="container lg:w-1/2 relative">
      <div className="markdown-image">
        <Image
          src={`https:${url}`}
          layout="responsive"
          alt={title}
          height={cfImage?.height}
          width={cfImage?.width}
        />
      </div>

      <ReactMarkdown className="markdown-content">
        {content ? content : ""}
      </ReactMarkdown>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const image = await contentful.asset("27qCsxISQkefL0kboUAaKM")
  const text = await contentful.entry("7IyBU1ZmXouKamyq6h8afp")

  return {
    props: {
      image,
      text,
    },
  }
}

export default AboutPage
