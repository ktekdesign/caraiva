"use client"
import Modal from 'components/modal'
import { useState, use } from 'react'

type Params = Promise<{ slug: string }>

export default function Payments(props: {
  params: Params
}) {
  const params = use(props.params)
  const slug = params.slug
  
  const [open, setOpen] = useState(true)
  const paymentStatus = slug === 'success' ? 'O teu pagamento foi recebido' : slug === 'pending' ? "O teu pagamento está pendente" : "Occoreu um erro ao tentar processar o seu pagamento. Tenta de novo."
    
  return (
    <main>
      <Modal open={open} setOpen={setOpen}>
        <p>
          {paymentStatus}
        </p>
      </Modal>
    </main>
  )
}
