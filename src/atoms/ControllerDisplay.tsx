import * as React from "react"
import {css, keyframes} from "@emotion/css"

export type IProps = {
    text: string
}

const marqueeAnimation = keyframes`
	from {
        transform: translate(0%);
    }
	99%,to {
        transform: translate(-100%);
    }
`

const marqueeBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 372px;
    height: 27px;
    background-color: #0086AD;
    overflow: hidden;
`

const marquee = css`
    margin:0;
    padding-left:360px;
    display:inline-block;
    white-space:nowrap;
	animation-name:${marqueeAnimation};
    animation-timing-function:linear;
	animation-duration:15s;
    animation-iteration-count:infinite;
`

export const ControllerDisplay: React.FC<IProps> = (props) => {
    return(
        <>
            <article className={marqueeBox}>
                <p className={marquee}>
                    {props.text}
                </p>
            </article>
        </>
    )
}

export default ControllerDisplay