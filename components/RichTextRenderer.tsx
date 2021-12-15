import React, { FC } from "react"
import Image from "next/image"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const RichTextRenderer: FC<{ copy: any }> = ({ copy }) => {
  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const isPriority = node.data.target.metadata.tags.some(
          ({ sys: { id } }: any) => id.includes("priority")
        )

        return (
          <div className="mb-7 mt-3">
            <Image
              src={`https:${node.data.target.fields.file.url}`}
              height={node.data.target.fields.file.details.image.height}
              width={node.data.target.fields.file.details.image.width}
              alt={node.data.target.fields.description}
              layout="responsive"
              priority={isPriority}
              className="rounded-md"
            />
          </div>
        )
      },
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <p className="mb-7 leading-7">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node: any, children: any) => (
        <h1 className="mb-7 decoration-[2.5px] underline underline-offset-4 pb-1 inline-block dark:border-white">
          {children}
        </h1>
      ),
    },
  }

  return <>{copy && documentToReactComponents(copy, renderOptions)}</>
}

export default RichTextRenderer
