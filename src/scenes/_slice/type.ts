export interface NavbarLinksType {
  id: number
  name: string
  path: string
}
export interface FooterLinksType {
  id: number
  title: string
  links: string[]
}
export interface TokenIntroductionType {
  title: string
  text: string
  contentButton: string
  playButton?: string
  imageAlt: string
  src: string
}
export interface TokenApplicationsType {
  id?: number
  title: string
  text?: string
  src?: string
}
export interface NewsType {
  id: number
  src: string
  title: string
  text: string
  pretext: string
  date: string
  writer: string
  avatarwriter: string
}
export const TokenIntroductionTypeEmpty = {
  title: '',
  text: '',
  contentButton: '',
  playButton: '',
  src: '',
  imageAlt: '',
}
export const IntroductionInvestmentEmpty = {
  title: '',
  text: '',
  contentButton: '',
  src: '',
  imageAlt: '',
}
