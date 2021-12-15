import { GetStaticProps, NextPage } from "next"
import React from "react"
import Link from "next/link"

const dailies = [
  {
    title: "Crypto login",
    description: "Sign in UI for a crypto company",
    link: "/dailies/crypto-login",
  },
]

const DailiesPage: NextPage = () => {
  return (
    <div className="container text-center">
      <p>
        Here a collection of frontend creations based on designs found @{" "}
        <a href="https://dribbble.com/">dribble.com</a>
      </p>

      <ul>
        {dailies.map(({ title, description, link }) => (
          <div key={title}>
            <Link href={link}>
              <a className="text-purple-400 underline">{title}</a>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

export default DailiesPage
