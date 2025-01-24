import { FC, useEffect, useRef } from "react";
import { PiStarFourFill } from 'react-icons/pi'
import { FaRegThumbsUp } from 'react-icons/fa'

import Asap from '../../../../assets/Icon/asap.png'
import friedRiceImg from '../../../../assets/Img/friedrice&peas.png'
import pastaImg from '../../../../assets/Img/pasta&kpomo.png'
import roastImg from '../../../../assets/Img/roastedchiken.png'
import naijaSpecialImg from '../../../../assets/Img/specialrice&shrimp.png'

import './HeroSection.scss'

interface IHeroSectionProps {
    isMobile: boolean;
};

const CardArray = [
    { name: "Pasta, Green Sauce & Kpomo", img: pastaImg },
    { name: "Egg-cooked Fried Rice & Peas", img: friedRiceImg },
    { name: "Shredded Roasted Chicken", img: roastImg },
    { name: "Naija Fried Rice with Shrimps", img: naijaSpecialImg },
    { name: "Souse Fries & Bacon", img: friedRiceImg },
]

export const HeroSection: FC<IHeroSectionProps> = ({ isMobile }) => {
    const carouselRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (carouselRef.current) {
          const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;
          const newScrollPosition =
            scrollLeft + clientWidth >= scrollWidth
              ? 0
              : scrollLeft + clientWidth;
  
          carouselRef.current.scrollTo({
            left: newScrollPosition,
            behavior: "smooth",
          });
        }
      }, 20000); // Scroll every 10 seconds
  
      return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-section">
        <div className="hero-content">
          <p className="tagline"><PiStarFourFill /> Join the Chow Africa waitlist <PiStarFourFill /> </p>
          <h1 className="title">
            Find chow,{" "}
            <img src={Asap} alt="Asap!" className="highlight-image" />
          </h1>
          <p className="subtitle">
            The patient dog eats left overs. Be the first to know when we launch.
            Join our Waitlist <span role="img" aria-label="emoji">😎</span>
          </p>
          <form className="waitlist-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
            />
            <button className="join-button">
              Join Waitlist
            </button>
          </form>
        </div>
        <div className="hero-images">
          <div className="dish-cards" ref={carouselRef}>
            {/* Render cards dynamically */}
            {CardArray.map((dish, index) => (
              <div
                key={index}
                className="card"
              >
                <div className="img-cover">
                    <img src={dish.img} alt={dish.name} />
                </div>
                <div className="card-info">
                    <p className="p-head">{dish.name}</p>
                    <div className="category-badge">
                        <div className="badge">
                            <img src={friedRiceImg} alt={"category"} className="badge-icon" />
                            <span className="badge-text">{'CONTINENTAL'}</span>
                        </div>
                        <div className="details">
                            <span className="picks">
                            <i className="icon-like" /> <FaRegThumbsUp />{'120'}picks
                            </span>
                            <span className="separator">•</span>
                            <span className="price">Approx. {'3000'}</span>
                        </div>
                        </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
