import { Role, languageIconProps } from '@/types/interfaces'
import {
  logoAyouris,
  logoAznay,
  logoMysestAi,
  logoV12software,
  logoYoucode,
} from '@/assets/svg/companies_logos'
import {
  JavaScript,
  Keycloak,
  TypeScript,
  Vue,
} from '@/assets/svg/languages_logos'

export const resume: Array<Role> = [
  {
    company: 'Aznay Technologies',
    title: 'Frontend Engineer',
    logo: logoAznay,
    start: 'Apr 2024',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear().toString(),
    },
  },
  {
    company: 'V12Software',
    title: 'Full Stack Developer',
    logo: logoV12software,
    start: 'Aug 2023',
    end: 'Feb 2024',
  },
  {
    company: 'MyRestai Europe',
    title: 'Full Stack Developer',
    logo: logoMysestAi,
    start: 'Dec 2022',
    end: 'Aug 2023',
  },
  {
    company: 'Ayouris',
    title: 'Frontend Web Developer - Internship',
    logo: logoAyouris,
    start: 'Jul 2022',
    end: 'Aug 2022',
  },
  {
    company: 'YouCode Maroc',
    title: 'Certified Full Stack JavaScript Developer',
    logo: logoYoucode,
    start: 'Oct 2021',
    end: 'Oct 2023',
  },
]

export const languageIcons: languageIconProps = {
  JavaScript: JavaScript,
  TypeScript: TypeScript,
  Vue: Vue,
  Keycloak: Keycloak,
  HTML: Keycloak,
}
