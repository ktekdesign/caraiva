"use client"
import { useState } from "react"
import VideoPresentation from "./video-presentation"

const Video = () => {
    const [toggler, setToggler] = useState(false)
	return <VideoPresentation toggler={toggler} setToggler={setToggler} />
}

export default Video