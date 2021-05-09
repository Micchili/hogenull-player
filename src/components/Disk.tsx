import * as React from "react"
import { css } from "@emotion/css"

const box = css`
    width: 300px;
    height: 300px;
    background: rgba(223, 242, 252, 0.3);
`

const frontBox = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -300px;
    width: 300px;
    height: 300px;
    background: rgba(155, 184, 199, 0.3);
    z-index: 2;
`

const backBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    z-index: 1;
`

const metal = css`
    width: 160px;
    height: 160px;
    line-height: 160px;
    border-radius: 80px;
    background-image: -webkit-radial-gradient(  50%   0%,  8% 50%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%),
        -webkit-radial-gradient(  50% 100%, 12% 50%, hsla(0,0%,100%,.6) 0%, hsla(0,0%,100%,0) 100%),
        -webkit-radial-gradient(   0%  50%, 50%  7%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%),
        -webkit-radial-gradient( 100%  50%, 50%  5%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%),
        
        -webkit-repeating-radial-gradient( 50% 50%, 100% 100%, hsla(0,0%,  0%,0) 0%, hsla(0,0%,  0%,0)   3%, hsla(0,0%,  0%,.1) 3.5%),
        -webkit-repeating-radial-gradient( 50% 50%, 100% 100%, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0)   6%, hsla(0,0%,100%,.1) 7.5%),
        -webkit-repeating-radial-gradient( 50% 50%, 100% 100%, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 1.2%, hsla(0,0%,100%,.2) 2.2%),
        
        -webkit-radial-gradient( 50% 50%, 200% 50%, hsla(0,0%,90%,1) 5%, hsla(0,0%,85%,1) 30%, hsla(0,0%,60%,1) 100%);
`

const circle = css`
    width: 270px;
    height: 270px;
    line-height: 160px;
    border-radius: 50%;
    background-image: -webkit-radial-gradient(  50%   0%,  8% 50%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%),
        -webkit-radial-gradient(  50% 100%, 12% 50%, hsla(0,0%,100%,.6) 0%, hsla(0,0%,100%,0) 100%),
        -webkit-radial-gradient(   0%  50%, 50%  7%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%),
        -webkit-radial-gradient( 100%  50%, 50%  5%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%),
        
        -webkit-repeating-radial-gradient( 50% 50%, 100% 100%, hsla(0,0%,  0%,0) 0%, hsla(0,0%,  0%,0)   3%, hsla(0,0%,  0%,.1) 3.5%),
        -webkit-repeating-radial-gradient( 50% 50%, 100% 100%, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0)   6%, hsla(0,0%,100%,.1) 7.5%),
        -webkit-repeating-radial-gradient( 50% 50%, 100% 100%, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 1.2%, hsla(0,0%,100%,.2) 2.2%),
        
        -webkit-radial-gradient( 50% 50%, 200% 50%, hsla(0,0%,90%,1) 5%, hsla(0,0%,85%,1) 30%, hsla(0,0%,60%,1) 100%);
`

const stickerBoxWrap = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 168px;
`

const stickerBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 252px;
    width: 141px;
    background: rgba(223, 242, 252, 0.3);
    box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
`

const sticker = css`
    width: 132px;
    height: 230px;
    background: #DFF2FC;
    border-radius: 3px;
`

const sliderBoxWrap = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

const sliderBox = css`
    width: 123px;
    height: 174px;
    margin-left: auto;
    background: rgba(223, 242, 252, 0.3);
    box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-top-left-radius: 11px;
    border-bottom-left-radius: 11px;
`

const slider = css`
    margin-left: auto;
    border-top-left-radius: 11px;
    border-bottom-left-radius: 11px;
    width: 120px;
    height: 80px;
    background: #C4C4C4;
`

export const Disk: React.FC = () => {
    return (
        <div className={box}>
            <div className={backBox}>
                <div className={`${metal} ${circle}`} />
            </div>
            <div className={frontBox}>
                <div className={stickerBoxWrap}>
                    <div className={stickerBox}>
                        <article className={sticker}>
                            <h1>hogenull</h1>
                            <p>hogehoge</p>
                        </article>
                    </div>
                </div>
                <div className={sliderBoxWrap}>
                    <div className={sliderBox}>
                        <div className={slider} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Disk