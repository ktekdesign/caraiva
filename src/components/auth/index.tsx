"use client"
import { useState } from 'react'
import {Login, SignUp} from 'components'

const Auth = ({setActive, isCheckout=false}) => {
  const [toggle, setToggle] = useState(false)
  
  return (
    <>
      {toggle || !isCheckout ? 
        <Login setActive={setActive} setToggle={setToggle} isCheckout={isCheckout} />
        :
        <SignUp setActive={setActive} setToggle={setToggle} />
      }
    </>
  )
}
 export default Auth
