"use client"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState } from 'react'
import { Button } from '@tremor/react'
import { useForm, SubmitHandler } from "react-hook-form"
import Messages from './messages'
import useCart from '@/hooks/useCart'

type Inputs = {
  firstName: string
  lastName: string,
  email: string,
  phone: string
}

const SignUpForm = ({setActive, setToggle}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const [err, setErr] = useState("")
  const {setPayer, payer} = useCart()
  const supabase = createClientComponentClient()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if(!payer?.email){
    const {error} = await supabase.auth.signUp({
      email: data.email,
      password: data.phone,
      options: {
        data: {
          first_name: data.firstName,
          last_name: data.lastName,
          phone: data.phone
        }
      }
    })
    if(error) return setErr(error.message)
    }
    setPayer({
      email: data.email,
      last_name: data.lastName,
      first_name: data.firstName,
      phone: {
        number: data.phone
      }
    })
    setActive("tab1")
  }
  
  return (
    <>
    {err && <Messages err={err} />}
    {!payer?.email && <h3 className='heading3'>Já tem uma conta? <Button onClick={() => setToggle(true)}>Login</Button></h3>}
    
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
          {...register("firstName", { required: true })}
          defaultValue={payer?.first_name || ""}
          placeholder="Primeiro nome"
        />
        {errors.firstName && <span className='text-primary'>Esse campo é obrigatório</span>}
        </p>
        <p className='flex flex-col gap-y-2'>
        <label className="text-md" htmlFor="lastName">
          Sobrenome
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border"
          {...register("lastName")}
          placeholder="Sobrenome"
          defaultValue={payer?.last_name || ""}
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
          defaultValue={payer?.email || ""}
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
          defaultValue={payer?.phone?.number || ""}
        />
        {errors.phone && <span className='text-primary'>Esse campo é obrigatório</span>}
        </p>
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
