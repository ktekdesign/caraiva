"use client"
import { useState } from 'react'
import Login from '../login'
import Signup from '../signup'

const Auth = ({setActive, setPayer, isCheckout=false}) => {
  const [toggle, setToggle] = useState(false)
  
  return (
    <>
      {toggle || !isCheckout ? 
        <Login setActive={setActive} setToggle={setToggle} isCheckout={isCheckout} />
        :
        <Signup setActive={setActive} setToggle={setToggle} />
      }
    </>
  )
}
 export default Auth
