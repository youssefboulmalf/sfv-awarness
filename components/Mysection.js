import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Mysection.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Mysection({
  text,
  headline,
  scrollTo,
  goToSectionRef,
  showArrow,
}) {
  const headlineRef = useRef();
  const sectionRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      headlineRef.current,
      {
        autoAlpha: 0,
        y: -20,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          scroller: ".container",
          trigger: headlineRef.current,
          start: "top 60%",
          end: "bottom 0%",
          toggleActions: "play none restart reverse",
        },
      }
    );
    return () => {};
  }, []);
  return (
    <div className={styles.section} ref={sectionRef}>
      <div className={styles.copy}>
        <h2 ref={headlineRef}>{headline}</h2>
      </div>
      <div className={styles.text}>
        {text}
      </div>
      {showArrow && (
        <button
          className={styles.downarrow}
          onClick={() => scrollTo(goToSectionRef)}
        ></button>
      )}
    </div>
  );
}
