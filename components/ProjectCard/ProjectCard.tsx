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
    <Link href={slug ? `project/${slug}` : ""}>
      <a className="project-card relative inline-block mb-3 rounded morphic-shadow  transition-shadow  overflow-hidden">
        <ResponsiveImage image={thumbnail} />
        <div className="p-5">
          <ReactMarkdown>{introduction ? introduction : ""}</ReactMarkdown>
          <div className="project-tags flex flex-wrap mt-3">
            {tags &&
              tags.map(tag => (
                <span
                  key={tag}
                  className="text-gray-600 tag text-xs px-3 py-1 mr-2 mb-2 whitespace-nowrap border-gradient border-gradient-purple"
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
