"use client"
import { EyeIcon, StarIcon } from "@heroicons/react/solid"
import { Bold } from "@tremor/react"
import Image from "next/image"
import Link from "next/link"
import { memo } from "react"
import Slide from 'react-reveal/Slide'

const Rating = ({rating}) => (
    <Slide up>
    <div className="rating">
        <div className="grid gap-4 grid-cols-2 place-content-center w-full">
            <div className="flex justify-center">
                <Image src={rating.picture} alt='' width={100} height={100} className="w-[100px] h-[100px]" />
            </div>
            <div className="flex flex-col justify-center">
                <Bold>{rating.name}</Bold>
                <p className="flex gap-2">
                    <StarIcon className={`w-4 ${rating.stars > 0 ? "fill-tertiary" : ""}`} />
                    <StarIcon className={`w-4 ${rating.stars > 1 ? "fill-tertiary" : ""}`} />
                    <StarIcon className={`w-4 ${rating.stars > 2 ? "fill-tertiary" : ""}`} />
                    <StarIcon className={`w-4 ${rating.stars > 3 ? "fill-tertiary" : ""}`} />
                    <StarIcon className={`w-4 ${rating.stars > 4 ? "fill-tertiary" : ""}`} />
                </p>
                {rating.source && 
                    <Link href={rating.source} target="_blank">
                        <EyeIcon className="w-8 fill-secondary" />
                    </Link>
                }
            </div>
            
        </div>
        <div className="md:col-span-2">
            <blockquote>
                {rating.content}
            </blockquote>
        </div>
    </div>
    </Slide>
)

export default memo(Rating)