import ReactMarkdown from "react-markdown"
import ResponsiveImage from "~/components/ResponsiveImage/ResponsiveImage"
import Link from "next/link"
import { FC } from "react"
import { IProjectFields } from "~/types/contentful"

const ProjectCard: FC<IProjectFields> = ({
  slug,
  introduction,
  thumbnail,
  tags,
}) => {
  return (
    <Link href={slug ? `/project/${slug}` : ""}>
      <a className="project-card relative inline-block mb-3 rounded-lg morphic-shadow overflow-hidden dark:bg-gray-700 mt-2">
        <ResponsiveImage image={thumbnail} />
        <div className="p-5 dark:text-white">
          <ReactMarkdown>{introduction ? introduction : ""}</ReactMarkdown>
          <div className="project-tags flex flex-wrap mt-3">
            {tags &&
              tags.map(tag => (
                <span
                  key={tag}
                  className="text-gray-600 tag text-xs px-3 py-1 mr-2 mb-2 border border-purple-500 whitespace-nowrap dark:text-gray-100 rounded-full"
                >
                  # {tag}
                </span>
              ))}
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ProjectCard
