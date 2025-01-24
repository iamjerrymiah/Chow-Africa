import { FC } from "react";

import './ChowEveryday.scss'
import { PiStarFourFill } from "react-icons/pi";
import ChowView from '../../../../assets/Img/left-hand-chowimg.png'
import RightHandChowImg from '../../../../assets/Img/right-hand-chowimg.png'
import RighthandFloater from '../../../../assets/Img/right-card-floater.png'
import leftFloater1 from '../../../../assets/Img/left-card-floater-1.png'
import leftFloater2 from '../../../../assets/Img/left-card-floater-2.png'
import leftFloater3 from '../../../../assets/Img/left-card-floater-3.png'
import cloud1 from '../../../../assets/Img/cloud-1.png'
import cloud2 from '../../../../assets/Img/cloud-2.png'

interface IChowEverydayProps {
    isMobile:boolean
};

export const ChowEveryday: FC<IChowEverydayProps> = ({isMobile}) => {
    return (
        <section className="chowEveryday">
            <p className="chow-tagline"><PiStarFourFill /> Join the chowafrica waitlist <PiStarFourFill /> </p>
            <div className="chow-header">tired of eating the </div>
            {!isMobile ? 
                <div className="chow-header-wrapper">🍛 same dishes everyday? 🍝</div> :
                <div className="mobile-chow-header">eating the same dishes <span className="chow-header-wrapper">everyday?</span></div>    
            }
            <div className="chow-subtitle">Do you crave new and exciting dishes? Look no further! Chow is the perfect solution for discovering your next dish.</div>
            <div className="left-cloud-floater"><img src={cloud1} alt="ChowAfrica" /></div>
            <div className="right-cloud-floater"><img src={cloud2} alt="ChowAfrica" /></div>

            <div className="get-chow">
                <div className="get-chow-left">
                    <div className="image-overlap"><img src={ChowView} alt="ChowAfrica!" className="overlap" /></div>
                </div>
                <div className="get-chow-right">
                    <img src={RightHandChowImg} alt="ChowAfrica" className='image' />
                    <div className="left-floater-1"><img src={leftFloater1} alt="ChowAfrica" /></div>
                    <div className="left-floater-2"><img src={leftFloater2} alt="ChowAfrica" /></div>
                    <div className="left-floater-3"><img src={leftFloater3} alt="ChowAfrica" /></div>
                    <div className="right-floater"><img src={RighthandFloater} alt="ChowAfrica" /></div>
                </div>

            </div>

        </section>
    );
}
