import { GetStaticPaths, GetStaticProps } from "next"
import { FC } from "react"
import { IProjectFields } from "~/types/contentful"
import { contentful } from "~/utils/contentful-api"
import Image from "next/image"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { motion } from "framer-motion"

const Project: FC<IProjectFields> = props => {
  const { copy } = props

  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const isPriority = node.data.target.metadata.tags.some(
          ({ sys: { id } }: any) => id.includes("priority")
        )

        return (
          <div className="markdown-image">
            <Image
              src={`https:${node.data.target.fields.file.url}`}
              height={node.data.target.fields.file.details.image.height}
              width={node.data.target.fields.file.details.image.width}
              alt={node.data.target.fields.description}
              layout="responsive"
              priority={isPriority}
            />
          </div>
        )
      },
    },
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container relative lg:w-1/2 rich-text-content"
    >
      {copy && documentToReactComponents(copy, renderOptions)}
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
