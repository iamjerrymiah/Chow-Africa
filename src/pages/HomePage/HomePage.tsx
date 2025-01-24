import { useEffect, useState } from "react";
import { HeroSection } from "./Components/HeroSection/HeroSection";
import { Helmet } from "react-helmet";
import AnimateRoute from "../../components/AnimateRoute";
import { ChowEveryday } from "./Components/ChowEveryday/ChowEveryday";
import { LastSection } from "./Components/LastSection/LastSection";

const HomePageMain = ({isMobile}: {isMobile:boolean}) => {
    
    return (
        <>
            <HeroSection />
            <ChowEveryday isMobile={isMobile}/>
            <LastSection />
        </>
    )
}

export const HomePage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <Helmet>
                <title>Chow Africa</title>
                <meta name="description" content="The patient dog eats left overs. Be the first to know when we launch. Join our Waitlist 😎" />
                <link rel="canonical" href="/" />
            </Helmet>

            <AnimateRoute>
                <div className="container">
                    <HomePageMain isMobile={isMobile}/>
                </div>
            </AnimateRoute>
        </>
    );
}


