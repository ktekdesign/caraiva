import { CldImage } from 'next-cloudinary';

const Banner = ({src, className = "cover-banner", ...props} : {src: string, className?: string}) => (
    <picture className={className} {...props}>
        <CldImage src={src} blur alt="Image de couverture" priority fill className="-z-10 object-cover" />
    </picture>
)

export default Banner