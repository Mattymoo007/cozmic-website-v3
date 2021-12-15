import { Asset } from "contentful"
import React from "react"
import { IText } from "~/types/contentful"
import { contentful } from "~/utils/contentful-api"
import Image from "next/image"
import { GetStaticProps, NextPage } from "next"
import { motion } from "framer-motion"
import { NextSeo } from "next-seo"
import MarkdownRenderer from "~/components/MarkdownRenderer"

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
    <>
      <NextSeo title="Cozmic Creatives | Contact" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container lg:w-1/2 relative"
      >
        <Image
          src={`https:${url}`}
          layout="responsive"
          alt={title}
          height={cfImage?.height}
          width={cfImage?.width}
          className="rounded-md"
        />

        <MarkdownRenderer content={content} />
      </motion.div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const [image, text] = await Promise.all([
    await contentful.asset("27qCsxISQkefL0kboUAaKM"),
    await contentful.entry("7IyBU1ZmXouKamyq6h8afp"),
  ])

  return {
    props: {
      image,
      text,
    },
  }
}

export default AboutPage
