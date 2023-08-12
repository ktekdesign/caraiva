"use client"
import Image from "next/image";
import { memo, useContext, useMemo } from "react";
import LightBoxContext from "@/context/lightBoxContext";

const PhotoGrid = ({photos}) => {
    const {toggler, setToggler, setLightBoxItems} = useContext(LightBoxContext)
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
        <div className="grid gap-0 grid-cols-2 md:grid-cols-4 cursor-pointer">
            {photos?.map((photo: string, key: number) => (
                <div key={key} onClick={() => {
                    setToggler(!toggler)
                    setLightBoxItems(photos)
                }} className={`relative ${featureds.includes(key) ? "row-span-2 col-span-2 h-[24rem]" : "h-[12rem]"}`}>
                    <Image src={photo} fill alt="" className="object-cover hover:scale-125 hover:z-10 hover:rounded-lg hover:origin-center" />
                </div>
            ))}
        </div>
    )
}

export default memo(PhotoGrid)