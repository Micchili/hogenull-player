import * as React from "react"
// import {css} from "@emotion/css"

export type IProps = {
    videoUrl: string
}

export const PlayerDisplay: React.FC<IProps> = (props) => {
    const handleChange = (url: string):string => {
        const parser = new URL(url);
        if (parser.hostname === "www.youtube.com") {
            return 'https://www.youtube.com/embed/' + parser.searchParams.get("v") + '?vq=small'
        }
        if (parser.hostname === "www.nicovideo.jp") {
            return 'https://embed.nicovideo.jp' + parser.pathname
        }
        return parser.hostname
    }

    return(
        <>
            <iframe src={handleChange(props.videoUrl)} />
        </>
        
    )
}

export default PlayerDisplay