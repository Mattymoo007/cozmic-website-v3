import { FC } from "react"

const CategoryNav: FC<{ categories: string[]; filterProjects: Function }> = ({
  categories,
  filterProjects,
}) => {
  return (
    <nav>
      <ul className="flex flex-wrap justify-center">
        {categories.map(category => {
          return (
            <li
              key={category}
              className="morphic-btn mb-4 px-3 py-2 rounded font-normal mx-2 md:mx-4 md:mb-0 font-titillium dark:text-white dark:bg-gray-700"
              onClick={() => filterProjects(category)}
            >
              {category}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default CategoryNav
