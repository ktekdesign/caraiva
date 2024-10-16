"use client"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@tremor/react'
import Messages from './messages'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  email: string
  password: string
}

const LoginForm = ({setToggle, setActive, isCheckout = false}) => {
  const [err, setErr] = useState('')
  const router = useRouter()
  const supabase = createClientComponentClient()
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async ({email, password}) => {
    const {error} = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if(error) {
      setErr(error?.message || '')
      return
    }

    if(isCheckout) {
      setActive("tab1")
      return
    }
    router.refresh()
  }
  
  return (
    <form
        className="form flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Messages err={err} />
        <label className="text-md" htmlFor="email">
          Email {errors.email && <span>(Esse campo é obrigatório)</span>}
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          placeholder="email@example.com"
          {...register("email", { required: true })}
        />
        <label className="text-md" htmlFor="password">
          Senha {errors.password && <span>(Esse campo é obrigatório)</span>}
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          placeholder="••••••••"
          {...register("password", { required: true })}
        />
        <div className='flex flex-wrap justify-center items-center gap-16'>
        <Button className="cta flex-grow">
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
