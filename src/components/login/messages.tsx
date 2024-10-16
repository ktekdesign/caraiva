'use client'

import { Callout } from "@tremor/react"
import { ExclamationCircleIcon, InformationCircleIcon } from '@heroicons/react/24/solid'
import { useSearchParams } from "next/navigation"

export default function Messages({err} : {err?: string}) {
  const searchParams = useSearchParams()
  const error = err ?? searchParams.get('error')
  const message = searchParams.get('message')
  return (
    <>
      <h2 className="heading2">Faça o login</h2>
        
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
    </>
  )
}
