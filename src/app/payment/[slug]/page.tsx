"use client"
import Modal from '@/components/modal'
import { useState } from 'react'

export default function Payments({ params }: { params: { slug: string } }) {
  const [open, setOpen] = useState(true)
  const paymentStatus = params.slug === 'success' ? 'O teu pagamento foi recebido' : params.slug === 'success' ? "O teu pagamento está pendente" : "Occoreu um erro ao tentar processar o seu pagamento. Tenta de novo."
    
  return (
    <>
      <main>
        <Modal open={open} setOpen={setOpen}>
          <p>
            {paymentStatus}
          </p>
        </Modal>
      </main>
    </>
  )
}
