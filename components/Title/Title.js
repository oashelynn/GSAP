// import { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

const Title = () => {
  // gsap.registerPlugin(ScrollTrigger);
  // const ref = useRef(null);
  // const Horizontalref = useRef(null);
  
  // useEffect(() => {
  //   const element = ref.current;
  //   const scrollingElement = Horizontalref.current;
  //   const pinWrapWidth = scrollingElement.offsetWidth;
  //   gsap.fromTo(
  //     element.querySelector("#owner-the"),
  //     {
  //       opacity: 1,
  //       // y: -20,
  //     },
  //     {
  //       opacity: 0,
  //       duration: 3,
  //       // y: 2px,
  //       scrollTrigger: {
  //         trigger: element.querySelector("#owner-the"),
  //         markers: true,
  //         start: "top 200px",
  //         end: `${pinWrapWidth} bottom`,
  //         scrub: true,
  //       },
  //       x: -pinWrapWidth,
        
  //       ease: "none"
  //     },
  //   );
  // }, []);

  return (
    <div className="py-[180px] font-normal leading-normal font-sysui text-center">
        <p className="text-[120px]">
            <span className="italic">Together</span>
            <span>, we</span>
        </p>
        <p className="text-[140px] flex justify-center">
            <span>pioneer</span>&nbsp;
            <span id="owner" className="italic bg-linear bg-clip-text text-transparent w-max break-words
            grid">
                <span id="owner-the">the</span>
                <span id="owner-your">your</span>
            </span>
            &nbsp;<span>future</span>
        </p>
    </div>
  );
};

export default Title;
