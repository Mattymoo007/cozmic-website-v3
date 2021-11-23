import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import CategoryNav from "~/components/CategoryNav/CategoryNav"
import { IProject, IProjectFields } from "~/types/contentful"
import { contentful } from "~/utils/contentful-api"

import ProjectCard from "~/components/ProjectCard/ProjectCard"
import { useState } from "react"
import { motion } from "framer-motion"
import { fadeInUp } from "~/utils/framer-animations"

const categories = [
  "all",
  "product design",
  "graphic design",
  "web design",
  "writing",
]

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const Home: NextPage<{ projects: IProjectFields[] }> = ({ projects }) => {
  const [filteredProjects, setFilteredProjects] = useState([...projects])

  const filterProjects = (tag: string) => {
    if (tag === "all") return setFilteredProjects(projects)

    const newArr = projects.filter(project => {
      return project.tags?.some(_tag => _tag === tag)
    })

    setFilteredProjects(newArr)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.main
        className="container home-page"
        initial="initial"
        animate="animate"
      >
        <CategoryNav categories={categories} filterProjects={filterProjects} />

        <motion.section variants={stagger} className="masonry-columns-4 mt-10">
          {filteredProjects.map((project, index) => (
            <motion.div variants={fadeInUp} key={index}>
              <ProjectCard key={project.title} {...project} />
            </motion.div>
          ))}
        </motion.section>
      </motion.main>
    </motion.div>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const projectArrId = "1449rrFKe0Ev87UCAjAziH"
  const {
    fields: { items },
  } = await contentful.entry(projectArrId)

  const projects = items.map((item: IProject) => item.fields)

  return {
    props: { projects },
  }
}

export default Home
