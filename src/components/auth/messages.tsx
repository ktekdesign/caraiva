'use client'

import { Callout } from "@tremor/react"
import { CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon } from '@heroicons/react/24/solid'
import { useSearchParams } from "next/navigation"

export default function Messages({err} : {err?: string}) {
  const searchParams = useSearchParams()
  const error = err ?? searchParams.get('error')
  const message = searchParams.get('message')
  return (
    <>
      <h2 className="heading2">Faça o login ou Cadastre-se antes de continuar</h2>
        
      {error && (
        <Callout
        className="my-4"
        title="Erro"
        icon={ExclamationCircleIcon}
        color="rose"
      >
        {error}
      </Callout>
        
      )}
      {message && (
        <Callout className="my-4" title="Aviso" icon={InformationCircleIcon} color="teal">
          {message}
        </Callout>
      )}
      {!error && !message && (
        <Callout className="my-4" title="Não esta logado." icon={CheckCircleIcon} color="teal">
          Caso não tenha ainda uma conta, preencha o formulario e clique en Cadastrar
        </Callout>             
      )}
    </>
  )
}
