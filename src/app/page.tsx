import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { getAllArticles } from '@/util/articles'
import { Article } from '@/components/HomeCompoents/Articles'
import { Photos } from '@/components/HomeCompoents/HeroPhotos'
import { SocialLink } from '@/components/HomeCompoents/SocialLink'
import { Resume } from '@/components/HomeCompoents/Resume'

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Full Stack Developer & UI/UX designer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m a full stack developer and designer based in Casablanca,
            Morocco. I enjoy creating things that live on the internet, whether
            that be websites, applications, or anything in between. My goal is
            to always build products that provide pixel-perfect, performant
            experiences.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/Halazv2"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/halaz"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
