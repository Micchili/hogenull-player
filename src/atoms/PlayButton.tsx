import * as React from "react"
import {css} from "@emotion/css"

export type IProps = {
    isPlay: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const base = css`
    border-radius: 50%;
    border:solid 3px #FFFFFF;
    width: 35px;
    height: 35px;
    color: #FFFFFF;
    background-color: #c4c4c4;
`

export const PlayButton: React.FC<IProps> = (props) => {
    return(
        <button 
            className={base}
            onClick={props.onClick}
        >
            {props.isPlay === true ? "||" : "▶"}
        </button>
    )
}