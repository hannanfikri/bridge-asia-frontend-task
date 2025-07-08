import Lottie from "lottie-react";
import submitAnimation from "../assets/animations/submit.json";
import { useRef, useEffect } from "react";

export const AnimatedLogo = ({ className = "w-12 h-12", play = false }) => {
    const lottieRef = useRef();

    useEffect(() => {
        if (play && lottieRef.current) {
            lottieRef.current.stop(); // Always restart from beginning
            lottieRef.current.play();
        }
        // Do not stop the animation when play is false, just let it finish
    }, [play]);

    return (
        <Lottie
            lottieRef={lottieRef}
            animationData={submitAnimation}
            loop={false}
            autoplay={false}
            className={className}
        />
    );
};
