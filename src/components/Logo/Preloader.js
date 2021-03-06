// Logo Animation Lottie
import React, { useRef } from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/lottifiles/data08.json";
import "./Preloader.scss";

export default React.memo(function Preloader() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      className: "lottie-anim-element",
    },
  };

  const container = useRef();
  return (
    <div
      className="preloader"
      ref={container}
      onAnimationEnd={() => (container.current.style.display = "none")}>
      <Lottie options={defaultOptions} height={350} width={350} />
    </div>
  );
});
