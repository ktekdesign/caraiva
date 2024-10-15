"use client"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@tremor/react'
import Messages from './messages'
import useCart from '@/hooks/useCart'

const LoginForm = ({setToggle, setActive, isCheckout=false}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  const {setPayer} = useCart()
  const router = useRouter()
  const supabase = createClientComponentClient()
  const handleSignIn = async (e) => {
    e.preventDefault()
    const {error, data: {user}} = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if(error) setErr(error.message)
      console.log(user)
    setPayer({
      email: user?.email,
      last_name: user?.user_metadata?.last_name,
      first_name: user?.user_metadata?.first_name,
      phone: {
        number: user?.phone
      }
    })
    if(isCheckout) {
      setActive("tab1")
      return
    }
    router.refresh()
  }
  
  return (
    <form
        className="form flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        action="/auth/sign-in"
        method="post"
      >
        <Messages err={err} />
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="email@example.com"
          onChange={(e) => setEmail(e.target.value)} value={email}
          required
        />
        <label className="text-md" htmlFor="password">
          Senha
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <div className='flex flex-wrap justify-center items-center gap-16'>
        <Button onClick={handleSignIn} className="cta flex-grow">
          Entrar
        </Button>
        {isCheckout && <Button
          className="cta-reverse flex-grow"
          onClick={(e) => {
            e.preventDefault()
            setToggle(false)
          }}
        >
          Cadastrar
        </Button>
        }
        </div>
      </form>
  )
}
 export default LoginForm
