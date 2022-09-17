import { Dispatch, SetStateAction } from "react"

export type contents = 'algorithms' | 'react' | 'leetcode' | 'aws'

export interface contentType {
  title: string
  path: string
  description: string
}

export interface ContentProps {
  setShowCards: Dispatch<SetStateAction<boolean>>
  content: contentType
  isEnglish: boolean
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