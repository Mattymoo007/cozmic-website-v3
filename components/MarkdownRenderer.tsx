import React, { FC, ReactNode } from "react"
import ReactMarkdown from "react-markdown"

type Children = {
  children: ReactNode
}

const MarkdownRenderer: FC<{ content?: string; className?: string }> = ({
  content,
  className,
  ...props
}) => {
  const components = {
    h3: ({ children }: Children) => (
      <h3 className="mb-4 mt-3 underline underline-offset-2">{children}</h3>
    ),
    p: ({ children }: Children) => (
      <p className="mb-7 leading-7 last:mb-0">{children}</p>
    ),
  }

  return (
    <ReactMarkdown components={components} className={className} {...props}>
      {content ? content : ""}
    </ReactMarkdown>
  )
}

export default MarkdownRenderer
