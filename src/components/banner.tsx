import Image from "next/image";

const Banner = ({url, className = "cover-banner", ...props} : {url: string, className?: string}) => (
    <picture className={className} {...props}>
        <Image src={url} alt="Image de couverture" priority fill className="-z-10 object-cover" />
    </picture>
)

export default Banner