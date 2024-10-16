import useSupabaseSession from "@/hooks/useSupabaseSession";
import { get_unit_amount } from "@/utils/helpers";
import { Payment } from "@mercadopago/sdk-react";
import { memo } from "react";

const PaymentCard = ({discount = 0, setPaymentId, setActive, items, amount, clearCart}) => {
  const {user} = useSupabaseSession()

  return (
  <Payment onReady={() => {
    /*
     Callback chamado quando o Brick está pronto.
     Aqui, você pode ocultar seu site, por exemplo.
    */
  }}
  onSubmit={({ formData }) => {
    // callback chamado quando há click no botão de envio de dados
    return new Promise((resolve, reject) => {
      fetch("/api/process_payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((response) => {
          // receber o resultado do pagamento
          console.log(response);
          setPaymentId(response.id);
          clearCart();
          setActive("tab2");
          resolve(response)
        })
        .catch((error) => {
          // manejar a resposta de erro ao tentar criar um pagamento
          console.log(error)
          reject();
        });
    });
  }}
  onError={(error) => {
    // callback chamado para todos os casos de erro do Brick
    console.error(error);
  }}
  initialization={{
    /*
      "amount" é a quantia total a pagar por todos os meios de pagamento com exceção da Conta Mercado Pago e Parcelas sem cartão de crédito, que têm seus valores de processamento determinados no backend através do "preferenceId"
    */
    amount: amount - discount,
    // preferenceId,
    payer: {
      email: user?.user_metadata?.email,
      lastName: user?.user_metadata?.lastName,
      firstName: user?.user_metadata?.firstName
    },
    items: {
      totalItemsAmount: amount,
      itemsList: items.map((item) => (
        {
          units: item.quantity,
          value: get_unit_amount(item.description, item.unit_price),
          name: item.title,
          description: item.description,
          imageURL: item.picture_url,
        }
      )),
    },
    // discounts: {
    //   totalDiscountsAmount: discount,
    //   discountsList: []
    // }
  }}
  customization={{
    visual: {
      hideFormTitle: true,
      style: {
        theme: "default",
        customVariables: {
          textPrimaryColor: '#008080',
          baseColor: '#008080'
      }
      },
    },
    paymentMethods: {
      creditCard: "all",
      debitCard: "all",
      bankTransfer: "all",
      maxInstallments: 6
    },
  }} />
  )
}

export default memo(PaymentCard)