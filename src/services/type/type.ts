import { SxProps } from '@mui/material'

export interface CoverProps {
  display: boolean
  srcImage?: string
  coverText: string
  coverTitle: string
  coverContentButton?: string
  coverPlayButton?: string
}

export interface IntroductionProps {
  ImageSrc?: string | undefined
  title?: string
  text?: string
  ButtonText?: string
  ContentIcon?: JSX.Element
  playButtonText?: string
  titleStyle?: SxProps
  textStyle?: SxProps
  textColor?: any
  Imagestyle?: SxProps
  heightStyle?: SxProps
  playButtonStyle?: SxProps
  contentMode?: boolean
  PlayMode?: boolean
  buttonBoxMode?: boolean
  ApplicationButtonMode?: boolean
  coverDisplay?: boolean
  BackgroundMode?: boolean
  GridMode?: boolean
  GridDirection?: 'row-reverse' | 'row' | {}
  GridAlignItems?: 'flex-start' | 'flex-end' | {}
}
export interface ImageMadia {
  src: string | undefined
  alt?: string
  Imagestyle?: SxProps
  BackgroundMode?: boolean
}

export interface ButtonProps {
  Text?: string | undefined
  onClickEvent?: () => unknown
  sxStyle?: SxProps
  icon?: JSX.Element
}

export interface SlickSliderProps {
  children?: JSX.Element
  settings: {
    className?: string
    centerMode?: boolean
    infinite?: boolean
    centerPadding?: string
    slidesToShow?: number
    speed?: number
  }
}

export interface CustomCardProps {
  cardStyle?: SxProps
  ImageSrc?: string
  title?: string
  text?: string
  actionsText?: string
  titleStyle?: SxProps
  Imagestyle?: SxProps
  textStyle?: SxProps
  arrowBackColor?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'disabled'
    | 'action'
    | undefined
  textColor?: any
  actionMode?: boolean
  ContentMode?: boolean
  ImageMode?: boolean
  CardId?: string | number | undefined
}
export interface FooterLinksProps {
  id: number
  title: string
  links: string[]
}