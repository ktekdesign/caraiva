import { CurrencyDollarIcon } from "@heroicons/react/solid";
import { memo } from "react";

const Price = ({price}) => {
    const priceFormated = ` ${Intl.NumberFormat("us").format(price).toString()}`
    return (
        <p className="font-bold text-primary py-1 before:content-[''] before:border-2 before:border-primary before:h-7 before:top-0 before:left-0 before:absolute items-center pl-4 flex gap-1 relative text-base">
            <CurrencyDollarIcon className="fill-primary h-4 w-4" />
            {priceFormated}
        </p>
    )
}

export default memo(Price)