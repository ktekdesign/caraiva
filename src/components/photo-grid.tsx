"use client"
import useLightBox from "@/hooks/useLightBox";
import { memo, useMemo } from "react";
import { CldImage } from 'next-cloudinary';
import { getImagesUrls } from "@/utils/helpers";

const PhotoGrid = ({photos}) => {
    const {toggler, setToggler, setLightBoxItems} = useLightBox()
    const getFeatureds = (photos) => {
        const increment = [7, 3]
        let pairDivider = false
        const dividers = [0, 7]
        for (let index = 0; index < photos.length; index++) {
            if(index%dividers[dividers.length - 1] === 0) {
                pairDivider = !pairDivider
                const divider = dividers[dividers.length - 1] + increment[Number(pairDivider)]
                dividers.push(divider)
                
            }   
        }
        return dividers
    }
    
    const featureds = useMemo(() => getFeatureds(photos), [photos])
    
    return (
        <div onClick={() => {
            setToggler(!toggler)
            setLightBoxItems(getImagesUrls(photos))
        }} className="grid gap-0 grid-cols-2 md:grid-cols-4 cursor-pointer">
            {photos?.map((photo: string, key: number) => (
                <div key={key} className={`relative ${featureds.includes(key) ? "row-span-2 col-span-2 h-[24rem]" : "h-[12rem]"}`}>
                    <CldImage
                        width={featureds.includes(key) ? "900" : "600"}
                        height={featureds.includes(key) ? "450" : "300"}
                        src={photo} alt={""}
                        className={`absolute object-cover hover:rounded-md hover:scale-110 hover:z-10 ${featureds.includes(key) ? "h-[24rem]" : "h-[12rem]"}`}
                    />
                </div>
            )
                )}
        </div>
    )
}

export default memo(PhotoGrid)