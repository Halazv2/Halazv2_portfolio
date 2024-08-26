import { Card } from '@/components/Card'
import { languageIcons } from '@/helpers/constants'
import Image from 'next/image'
import { ForkIcon, LinkIcon, StarIcon } from './Icons'
import { GitHubProject } from '@/types/interfaces'

export default async function ProjectCard({
  project,
}: {
  project: GitHubProject
}) {
  const res = await fetch(
    `https://api.github.com/repos/Halazv2/${project.name}/languages`,
  )
  if (!res.ok) throw new Error('Failed to fetch data')
  const languages = await res.json() // Convert the response to JSON
  const languagesKeys = Object.keys(languages)

  return (
    <Card as="li" key={project.id}>
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          className="h-8 w-8"
          unoptimized
          src={languageIcons[languagesKeys[0]]}
          alt={languagesKeys[0]}
        />
      </div>
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <Card.Link href={project.html_url} target="_blank">
          {project.name}
        </Card.Link>
      </h2>
      <Card.Description>
        {project.description.length > 90
          ? project.description.slice(0, 90) + '...'
          : project.description}
      </Card.Description>
      <div className="mt-6 flex space-x-4 text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
        <div className="flex items-center space-x-1">
          <StarIcon className="h-6 w-3 flex-none" />
          <span className="">{project.stargazers_count}</span>
        </div>
        <div className="flex items-center space-x-1">
          <ForkIcon className="h-6 w-3 flex-none" />
          <span className="ml-2">{project.forks_count}</span>
        </div>
      </div>
      <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
        <LinkIcon className="h-6 w-6 flex-none" />
        <span className="ml-2">github.com</span>
      </p>
    </Card>
  )
}
