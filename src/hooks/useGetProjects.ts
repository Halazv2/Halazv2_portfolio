import { GitHubProject } from "@/types/interfaces"

export async function useGetProjects(): Promise<GitHubProject[]> {
  const res = await fetch('https://api.github.com/users/halazv2/repos')

  if (!res.ok) throw new Error('Failed to fetch data')

  const data = await res.json()
  return data
}
