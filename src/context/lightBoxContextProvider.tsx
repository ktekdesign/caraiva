"use client"
import FsLightbox from "fslightbox-react"
import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from "react"
import LightBoxContext from "./lightBoxContext"

type Props = {
  children: ReactNode
}

const LightBoxContextProvider: FC<Props> = ({ children }) => {
  const [lightBoxItems, setLightBoxItems]: [string[], Dispatch<SetStateAction<string[]>>] =
    useState([])
  const [toggler, setToggler]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false)
  const value = useMemo(
    () => ({ toggler, setToggler, setLightBoxItems }), [toggler])
  
  return (
    <LightBoxContext.Provider value={value}>
      {children}
      <FsLightbox toggler={toggler} sources={lightBoxItems} />
    </LightBoxContext.Provider>
  )
}

export default LightBoxContextProvider
