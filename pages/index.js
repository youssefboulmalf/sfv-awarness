import { useEffect, useRef } from "react";
import Head from "next/head";
import Mysection from "../components/Mysection";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar";
import { useSearchParams } from 'next/navigation'
import { Analytics } from "@vercel/analytics/react"
export default function Home() {

  const searchParams = useSearchParams()
  const type = searchParams.get('type') == 1 ? 1 : 0
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();
  function scrollTo(section) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <Head>
        <title>Stop met scrollen</title>
        <meta name="description" content="Stop met scrollen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {type != 1 ? (<div className={`container ${styles.container}`}>
        <div ref={section1}>
          <Mysection
            headline={`Wist jij, dat je door te stoppen met scrollen...`}
            Text={``}
            goToSectionRef={section2}
            scrollTo={scrollTo}
            showArrow={true}
            type={type}
          />
        </div>
        <div ref={section2}>
          <Mysection
            headline={`1. Jouw focus en concentratie verbetert`}
            goToSectionRef={section3}
            text={"Stoppen met overmatig scrollen van short-form video's op sociale media zal jouw concentratievermogen verbeteren, waardoor je je beter kunt concentreren op belangrijkere taken"}
            scrollTo={scrollTo}
            showArrow={true}
            type={type}
          />
        </div>
        <div ref={section3}>
          <Mysection
            headline={`2. Je sneller informatie kan begrijpen`}
            goToSectionRef={section1}
            text={"Het stoppen met overmatig gebruik van short-form video's kan jouw informatieverwerking verbeteren, waardoor je efficiënter kunt studeren en informatie kunt opnemen."}
            scrollTo={scrollTo}
            showArrow={false}
            type={type}
          />
        </div>
        <div ref={section4}>
          <Mysection
            headline={`3. Je je planning beter onthoudt en minder uitstelt`}
            goToSectionRef={section1}
            text={"Zonder de negatieve impact van  scrollen op platforms als TikTok, wordt je geheugen voor geplande taken beter, stel je minder uit, en worden jouw dagelijkse activiteiten beter georganiseerd"}
            scrollTo={scrollTo}
            showArrow={false}
            type={type}
          />
        </div>
        <div ref={section5}>
          <Mysection
            headline={`4. Dat je meer zin krijgt om te presteren op school`}
            goToSectionRef={section1}
            text={"Door minder afleidende gedachten die voortkomen uit scrollen, wordt je beter in schooltaken – concentreren, onthouden en plannen, waardoor je betere cijfers haalt "}
            scrollTo={scrollTo}
            showArrow={false}
            type={type}
          />
        </div>
        <Navbar/>
      </div>)
      /////////////////////////
      :
      ////////////////////////
      
      (      <div className={`container ${styles.container}`}>
        <div ref={section1}>
          <Mysection
            headline={`Wist jij dat te veel scrollen`}
            Text={``}
            goToSectionRef={section2}
            scrollTo={scrollTo}
            showArrow={true}
            type={type}
          />
        </div>
        <div ref={section2}>
          <Mysection
            headline={`1. Je concentratievermogen afneemt`}
            goToSectionRef={section3}
            text={"Overmatig scrollen van short-form video's op sociale media vermindert jouw concentratievermogen, waardoor je moeite hebt om je te focussen op belangrijkere taken."}
            scrollTo={scrollTo}
            showArrow={true}
            type={type}
          />
        </div>
        <div ref={section3}>
          <Mysection
            headline={`2. Je tijd zomaar voorblij vliegt`}
            goToSectionRef={section1}
            text={"Jij besteedt vaak zonder het inde gaten te hebben vele uren aan het kijken naar korte video’s. Zo wordt waardevolle tijd verspild die anders productief en zinvol besteed had kunnen worden."}
            scrollTo={scrollTo}
            showArrow={false}
            type={type}
          />
        </div>
        <div ref={section4}>
          <Mysection
            headline={`3. Je motivatie om te leren afneemt`}
            goToSectionRef={section1}
            text={"Schoolwerk lezen, leren en /of begrijpen geeft lang niet zo vaak dopamine-shots als korte video’s kijken. Maar leren en huiswerk maken leveren een diploma op, en video’s kijken niet. Daarom moet de lees-spieren goed getraind worden"}
            scrollTo={scrollTo}
            showArrow={false}
            type={type}
          />
        </div>
        <div ref={section5}>
          <Mysection
            headline={`4. Je minder interesse hebt voor je offline leven`}
            goToSectionRef={section1}
            text={"Vaak korte video’s kijken op social media vergroot jouw kans op verslaving aan deze platforms, waardoor je steeds meer gaat kijken en je offline leven verwaarloost."}
            scrollTo={scrollTo}
            showArrow={false}
            type={type}
          />
        </div>
        <Navbar/>
      </div>)}
      <Analytics />
    </div>
  );
}
