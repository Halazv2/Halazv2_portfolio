import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/assets/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description: 'I’m Hala Ziani. Full Stack Developer & UI/UX designer.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Hala Ziani. I live in Casablanca, Morocco, where I design and
            build things for the web.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              {/* I transitioned from a background in biology to pursue a career in
              development, undergoing a comprehensive two-year program at
              &quot;YouCode&quot;, a coding school in Safi, Morocco. */}
              I transitioned from a background in biology to web development,
              completing a two-year program at
              <span className="low-highlight mx-1 px-1">YouCode</span>
              in Safi, Morocco.
            </p>
            <p>
              During my first year, I gained expertise in HTML, CSS, JavaScript,
              PHP, MySQL, and frameworks, and interned at
              <span className="low-highlight mx-1 px-1">Ayouris</span>
              in Rabat, contributing to a Next.js and TypeScript project. In my
              second year, I specialized in the MERN stack, refining my
              full-stack skills, and worked at
              <span className="low-highlight ml-1 px-1">MyRestai Europe</span>,
              a startup in Marrakech focused on French real estate.
            </p>
            <p>
              I then joined
              <span className="low-highlight ml-1 px-1">V12Software</span>, an
              American company, where I helped develop a platform for car
              dealerships. Currently, I&apos;m a Frontend Engineer at{' '}
              <span className="low-highlight mx-1 px-1">
                Aznay Technologies
              </span>
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/Halazv2"
              icon={GitHubIcon}
              className="mt-4"
            >
              View my GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/halaz"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Connect on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:contact.halaziai@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              contact.halaziani@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
