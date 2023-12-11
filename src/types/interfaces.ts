import { type ImageProps } from 'next/image'

export interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

export interface GitHubProject {
  name: string
  description: string
  git_url: string
  forks_count: number
  stargazers_count: number
  language: string
  html_url: string
  id: number
}

export interface languageIconProps {
  [key: string]: string
}

export interface Article {
  title: string
  description: string
  author: string
  date: string
}

export interface ArticleWithSlug extends Article {
  slug: string
}
