"use client"
import FsLightbox from "fslightbox-react"
import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react"
import LightBoxContext from "./lightBoxContext"

type Props = {
  children: ReactNode
}

const LightBoxContextProvider: FC<Props> = ({ children }) => {
  const [lightBoxItems, setLightBoxItems]: [string[], Dispatch<SetStateAction<string[]>>] =
    useState([""])
  const [toggler, setToggler]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false)
  const value = { toggler, setToggler, lightBoxItems, setLightBoxItems }
  
  return (
    <LightBoxContext.Provider value={value}>
      <FsLightbox toggler={toggler} sources={lightBoxItems} />
      {children}
    </LightBoxContext.Provider>
  )
}

export default LightBoxContextProvider
