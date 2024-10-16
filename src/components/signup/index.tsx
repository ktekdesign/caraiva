"use client"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState } from 'react'
import { Button } from '@tremor/react'
import { useForm, SubmitHandler } from "react-hook-form"
import Messages from './messages'
import useCart from '@/hooks/useCart'
import Script from 'next/script'

type Inputs = {
  first_name: string
  last_name: string,
  email: string,
  phone: string,
  'cf-turnstile-response': string
}

const SignUpForm = ({setActive, setToggle}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const [err, setErr] = useState("")
  const {user} = useCart()
  const supabase = createClientComponentClient()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const customer = {
      email: data.email,
      last_name: data.last_name,
      first_name: data.first_name,
      phone: {
        number: data.phone
      }
    }
    if(!user){
      console.log(data)
    const {error} = await supabase.auth.signInAnonymously({
      options: {
        captchaToken: data['cf-turnstile-response'],
        data: customer
      }})
    if(error) return setErr(error.message)
    }
    setActive("tab1")
  }
  
  return (
    <>
    <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" defer />
      
    {err && <Messages err={err} />}
    {!user?.user_metadata?.email && <h3 className='heading3'>Já tem uma conta? <Button onClick={() => setToggle(true)}>Login</Button></h3>}
    
    <form
        className="form text-foreground p-4 grid grid-cols-2 gap-2"
        action="/auth/sign-in"
        method="post"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className='flex flex-col gap-y-2'>
        <label className="text-md" htmlFor="firstName">
          Nome
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border"
          {...register("first_name", { required: true })}
          defaultValue={user?.user_metadata?.first_name || ""}
          placeholder="Primeiro nome"
        />
        {errors.first_name && <span className='text-primary'>Esse campo é obrigatório</span>}
        </p>
        <p className='flex flex-col gap-y-2'>
        <label className="text-md" htmlFor="lastName">
          Sobrenome
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border"
          {...register("last_name")}
          placeholder="Sobrenome"
          defaultValue={user?.user_metadata?.last_name || ""}
        />
        </p>
        <p className='flex flex-col gap-y-2'>
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border"
          {...register("email", { required: true })}
          type='email'
          placeholder="email@example.com"
          defaultValue={user?.user_metadata?.email || ""}
        />
        {errors.email && <span className='text-primary'>Esse campo é obrigatório</span>}
        </p>
        <p className='flex flex-col gap-2'>
        <label className="text-md" htmlFor="phone">
          Telefone
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border"
          {...register("phone", { required: true })}
          type='tel'
          placeholder="(11) 12345-6789"
          defaultValue={user?.user_metadata?.phone || ""}
        />
        {errors.phone && <span className='text-primary'>Esse campo é obrigatório</span>}
        </p>
        <div className="cf-turnstile" data-sitekey="0x4AAAAAAAxk295gmy85HzjN" data-theme="light" />
        <div className='flex flex-wrap justify-center col-span-2 items-center gap-16 mt-4'>
        <Button className="cta-reverse flex-grow">
          Ir para pagamento
        </Button>
        
        </div>
      </form>
      </>
  )
}
 export default SignUpForm
