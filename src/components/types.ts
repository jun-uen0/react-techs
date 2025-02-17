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
  setShowCards: Dispatch<SetStateAction<boolean>>
  content: contentType
  selectedLanguage: string
}

export interface BackButtontProps {
  setShowCards: Dispatch<SetStateAction<boolean>>
}

export interface ContentCardProps {
  setShowCards: Dispatch<SetStateAction<boolean>>
  setContentNumber: Dispatch<SetStateAction<number>>
  idx: number
  title: string
  description: string
}

export interface ContentCardsProps {
  setShowCards: Dispatch<SetStateAction<boolean>>
  setContentNumber: Dispatch<SetStateAction<number>>
  contents: Array<contentType>
}

export interface ContentsAreaProps {
  setShowCards: Dispatch<SetStateAction<boolean>>
  showCards: boolean
  selectedLanguage: string
  contentsType: contents
}

export interface SideBarProps {
  setContentsType: Dispatch<SetStateAction<contents>>
  setShowCards: Dispatch<SetStateAction<boolean>>
  selectedLanguage: string
  setSelectedLanguage: Dispatch<SetStateAction<string>>
  mobileOpen: boolean
  toggleDrawer: () => void
}

export interface NavBarProps {
  selectedLanguage: string
  setSelectedLanguage: Dispatch<SetStateAction<string>>
  isMobile: boolean
  toggleDrawer: () => void
}