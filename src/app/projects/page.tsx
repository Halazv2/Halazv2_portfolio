import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/SimpleLayout'
import ProjectCard from '@/components/ProjectCard'
import { GitHubProject } from '@/types/interfaces'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'I’m Hala Ziani. Full Stack Developer & UI/UX designer.',
}

export default async function Projects() {
  const res = await fetch('https://api.github.com/users/halazv2/repos')
  if (!res.ok) throw new Error('Failed to fetch data')
  const projects: GitHubProject[] = await res.json()

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
              return <ProjectCard key={i} project={project} />
            }
          })}
      </ul>
    </SimpleLayout>
  )
}
