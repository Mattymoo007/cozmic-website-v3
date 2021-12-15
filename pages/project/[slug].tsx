import { GetStaticPaths, GetStaticProps } from "next"
import { FC } from "react"
import { IProjectFields } from "~/types/contentful"
import { contentful } from "~/utils/contentful-api"
import { motion } from "framer-motion"
import RichTextRenderer from "~/components/RichTextRenderer"

const Project: FC<IProjectFields> = ({ copy }) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container relative lg:w-1/2 prose"
    >
      <RichTextRenderer copy={copy} />
    </motion.article>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await contentful.entries<IProjectFields>({
    content_type: "project",
  })

  return {
    paths: projects.items.map(project => ({
      params: { slug: project.fields.slug },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const slug = context.params?.slug

  const project = await contentful.entries({
    content_type: "project",
    "fields.slug[in]": slug,
  })

  return {
    props: project.items[0].fields,
  }
}

export default Project
