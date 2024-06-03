import Features from "./Features";
import HeroSection from "./HeroSection";
import TestimonialSection from "./TestimonialSection";
import WorkSection from "./WorkSection";


const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Features></Features>
            <WorkSection></WorkSection>
            <TestimonialSection></TestimonialSection>
        </div>
    );
};

export default Home;