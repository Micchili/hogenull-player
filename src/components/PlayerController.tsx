import * as React from "react"
import {css} from "@emotion/css"

import PlayerDisplay from "../atoms/PlayerDisplay"

export type IProps = {
    text: string
}

const wrap = css`
    display: flex;
    align-items: center;
    width: 424px;
    height: 64px;
    background-color: #c4c4c4;
    border-radius: 40px;
    background: -webkit-gradient(linear, left top, left bottom, from(#c4c4c4), to(#ebedee));
    background: -webkit-linear-gradient(top, #c4c4c4 0%, #ebedee 100%);
    background: linear-gradient(to bottom, #c4c4c4 0%, #ebedee 100%);
        -webkit-box-shadow: inset 1px 1px 1px #fff;
    box-shadow: inset 1px 1px 1px #fff;
    filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.6));
`

const playerDisplayWrap = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 396px;
    height: 49px;
    background-color: #303030;
    border-radius: 22px;
    filter: drop-shadow(7px 0px #A2A2A2);
    margin-left: 7px;
`

export const PlayerController: React.FC<IProps> = (props) => {
    return(
        <div className={wrap}>
            <div className={playerDisplayWrap}>
                <PlayerDisplay text={props.text} />
            </div>
        </div>
    )
} 