import { Dispatch, SetStateAction } from "react"

export type contents = 'algorithms' | 'leetcode' | 'aws' | 'others'

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
  isEnglish: boolean
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
  isEnglish: boolean
  contentsType: contents
}

export interface SideBarProps {
  setContentsType: Dispatch<SetStateAction<contents>>
  setShowCards: Dispatch<SetStateAction<boolean>>
  mobileOpen: boolean
  toggleDrawer: () => void
}