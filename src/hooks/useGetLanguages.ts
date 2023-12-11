export const useGetLanguages = async (projectName: string) => {
  const res = await fetch(
    `https://api.github.com/repos/Halazv2/${projectName}/languages`,
  )

  if (!res.ok) throw new Error('Failed to fetch data')

  const data = await res.json() // Convert the response to JSON
  return data
}
