import React from 'react'
import './Hero.css'
import ArrowButton from '../../assets/arrow_btn.png'
import PauseButton from '../../assets/pause_icon.png'
import PlayButton from '../../assets/play_icon.png'


export default function Hero({ heroData, heroCount, setHeroCount, playStatus, setPlayStatus }) {
    return (
        <div>

            <div className='hero'>
                <div className='hero-text'>
                    <p>{heroData.text1}</p>
                    <p>{heroData.text2}</p>
                </div>
                <div className='hero-explore'>
                    <p>Explore the features</p>
                    <img src={ArrowButton} alt="" />
                </div>
                <div className='hero-dot-play'>
                    <ul className='hero-dots'>
                        <li onClick={()=>{setHeroCount(0)}} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
                        <li onClick={()=>{setHeroCount(1)}} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
                        <li onClick={()=>{setHeroCount(2)}} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
                    </ul>
               
                <div className='hero-play'>
                    <img onClick={()=>{setPlayStatus(!playStatus)}} src={playStatus?PauseButton:PlayButton} alt="xyz" />
                    <p>Play the video</p>
                </div>
            </div>
            </div>
        </div>
    )
}
