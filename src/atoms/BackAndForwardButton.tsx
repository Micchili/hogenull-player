import * as React from "react"
import {css} from "@emotion/css"

export type IProps = {
    label: "left" | "right"
}

const base = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 50%;
    border: medium solid #FFFFFF;
    width: 27px;
    height: 27px;
    color: #FFFFFF;
    background-color: #c4c4c4;
`

export const BackAndForwardButton: React.FC<IProps> = (props) => {
    
    if (props.label === "left") {
        return(
            <button className={base}>
                &lt;&lt;
            </button>
        )
    }
    if (props.label === "right") {
        return(
            <button className={base}>
                &gt;&gt;
            </button>
        )
    }
    else return <></>
}