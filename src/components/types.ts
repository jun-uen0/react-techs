import { Dispatch, SetStateAction } from "react"

export type contents = 'about' | 'algorithms' | 'leetcode' | 'aws' | 'others'

export interface contentType {
  title: string
  path: string
  description: string
  original?: string
}

export interface MarkdownContentProps {
  read: string
}

export interface ContentProps {
  setShowCards?: Dispatch<SetStateAction<boolean>>
  content?: contentType
  isEnglish?: boolean
}

export interface BackButtontProps {
  setShowCards?: Dispatch<SetStateAction<boolean>>
}

export interface ContentCardProps {
  setShowCards?: Dispatch<SetStateAction<boolean>>
  setContentNumber: Dispatch<SetStateAction<number>>
  idx: number
  title: string
  description: string
  onClick: () => void
}

export interface ContentCardsProps {
  setShowCards?: Dispatch<SetStateAction<boolean>>
  setContentNumber: Dispatch<SetStateAction<number>>
  contents: contentType[]
}

export interface ContentsAreaProps {
  setShowCards?: Dispatch<SetStateAction<boolean>>
  showCards?: boolean
  isEnglish?: boolean
  contentsType: contents
}

export interface SideBarProps {
  setContentsType: Dispatch<SetStateAction<contents>>
  setShowCards?: Dispatch<SetStateAction<boolean>>
  mobileOpen: boolean
  toggleDrawer: () => void
}

export interface NavBarProps {
  isEnglish?: boolean
  setIsEnglish?: Dispatch<SetStateAction<boolean>>
  isMobile: boolean
  toggleDrawer: () => void
}

export interface LayoutProps {
  showCards?: boolean
  setShowCards?: Dispatch<SetStateAction<boolean>>
  isEnglish?: boolean
  setIsEnglish?: Dispatch<SetStateAction<boolean>>
  content?: contentType
}

export interface LanguageProps {
  isEnglish?: boolean
  setIsEnglish?: Dispatch<SetStateAction<boolean>>
}