"use client"
import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react"
import StickyContext from "./stickyContext"

type Props = {
  children: ReactNode
}

const StickyContextProvider: FC<Props> = ({ children }) => {
  const [sticky, setSticky]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false)
  const value = { sticky, setSticky }
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
        if(window.scrollY) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    })
  })

  return (
    <StickyContext.Provider value={value}>
      <div className={sticky ? "nav-sticky" : ""}>
            {children}
      </div>
    </StickyContext.Provider>
  )
}

export default StickyContextProvider
