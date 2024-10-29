import { StatusScreen  } from "@mercadopago/sdk-react";
import { memo } from "react";

const Status = ({paymentId}) =>  (
  <StatusScreen initialization={{paymentId}} onError={console.log} onReady={console.log} />
)

export default memo(Status)