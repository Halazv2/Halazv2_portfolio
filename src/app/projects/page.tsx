import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/SimpleLayout'
import ProjectCard from '@/components/ProjectCard'
import { useGetProjects } from '@/hooks/useGetProjects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'I’m Hala Ziani. Full Stack Developer & UI/UX designer.',
}

export default async function Projects() {
  const projects = await useGetProjects()

  return (
    <SimpleLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects &&
          projects.map((project, i) => {
            if (project.stargazers_count > 3 && project.language !== 'C') {
              return <ProjectCard project={project} />
            }
          })}
      </ul>
    </SimpleLayout>
  )
}
