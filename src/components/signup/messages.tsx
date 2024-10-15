'use client'

import { Callout } from "@tremor/react"
import { CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon } from '@heroicons/react/24/solid'
import { useSearchParams } from "next/navigation"

export default function Messages({err} : {err: string}) {

  return (
    <>
      <h2 className="heading2">Faça o login</h2>
        
      {err && (
        <Callout
        className="my-4"
        title="Erro"
        icon={ExclamationCircleIcon}
        color="rose"
      >
        {err}
      </Callout>
        
      )}
      
    </>
  )
}
