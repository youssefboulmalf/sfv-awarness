import { useEffect, useRef } from "react";
import Head from "next/head";
import Mysection from "../components/Mysection";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar";
import { useSearchParams } from 'next/navigation'
export default function Home() {

  const searchParams = useSearchParams()
  const type = searchParams.get('type') == 1 ? 1 : 0
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();
  const section6 = useRef();
  const section7 = useRef();
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
            headline={`Wist jij dat stoppen met overmatig scrollen kan leiden tot...`}
            Text={``}
            goToSectionRef={section2}
            scrollTo={scrollTo}
            showArrow={true}
            type={type}
          />
        </div>
        <div ref={section2}>
          <Mysection
            headline={`1. Verbeterde Concentratie en Focus`}
            goToSectionRef={section3}
            text={"Stoppen met overmatig scrollen van short-form video's op sociale media kan leiden tot een verbeterd concentratievermogen, waardoor jij je beter kunnen concentreren op belangrijkere taken zoals schoolwerk!"}
            scrollTo={scrollTo}
            showArrow={true}
            type={type}
          />
        </div>
        <div ref={section3}>
          <Mysection
            headline={`2. Vermindering van Afleidende Gedachten`}
            goToSectionRef={section1}
            text={"Zonder de constante stroom van korte video's zullen je merken dat je minder moeite hebben om afleidende gedachten te blokkeren, wat resulteert in een verbeterde mentale helderheid."}
            scrollTo={scrollTo}
            showArrow={false}
            type={type}
          />
        </div>
        <div ref={section4}>
          <Mysection
            headline={`3. Verminderde Kans op Verslaving`}
            goToSectionRef={section1}
            text={"Door te stoppen met het scrollen op sociale media kan jij de kans op verslaving aan deze platforms verminderen, waardoor je meer controle krijgen over je eigen leven."}
            scrollTo={scrollTo}
            showArrow={false}
            type={type}
          />
        </div>
        <div ref={section5}>
          <Mysection
            headline={`4. Verhoogde Leermotivatie`}
            goToSectionRef={section1}
            text={"Zonder de constante afleiding van korte video's kan jij een verhoogde motivatie ervaren, wat kan resulteren in een positievere houding ten opzichte van jouw eigen doelen."}
            scrollTo={scrollTo}
            showArrow={false}
            type={type}
          />
        </div>
        <div ref={section6}>
          <Mysection
            headline={`5. Verbeterd Geheugen voor Geplande Taken`}
            goToSectionRef={section1}
            text={" Zonder de negatieve impact van overmatig gebruik van platforms zoals TikTok, kan jij je beter herinneren aan geplande taken en kan je minder uitstelgedrag gaan vertonen."}
            scrollTo={scrollTo}
            showArrow={false}
            type={type}
          />
        </div>
        <div ref={section7}>
          <Mysection
            headline={`6. Meer Bewuste Tijdsbesteding`}
            goToSectionRef={section1}
            text={"Het stoppen met overmatig scrollen op sociale media stelt jouw in staat om meer bewust om te gaan met je tijd, waardoor je deze kan besteden aan productieve activiteiten die bijdragen aan hun persoonlijke en academische ontwikkeling."}
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
            headline={`Wist jij dat overmatig scrollen kan leiden tot...`}
            Text={``}
            goToSectionRef={section2}
            scrollTo={scrollTo}
            showArrow={true}
            type={type}
          />
        </div>
        <div ref={section2}>
          <Mysection
            headline={`1. Verslechterde Concentratie en Focus`}
            goToSectionRef={section3}
            text={"Stoppen met overmatig scrollen van short-form video's op sociale media kan leiden tot een verbeterd concentratievermogen, waardoor jij je beter kunnen concentreren op belangrijkere taken zoals schoolwerk!"}
            scrollTo={scrollTo}
            showArrow={true}
            type={type}
          />
        </div>
        <div ref={section3}>
          <Mysection
            headline={`2. Meer Afleidende Gedachten`}
            goToSectionRef={section1}
            text={"Zonder de constante stroom van korte video's zullen je merken dat je minder moeite hebben om afleidende gedachten te blokkeren, wat resulteert in een verbeterde mentale helderheid."}
            scrollTo={scrollTo}
            showArrow={false}
            type={type}
          />
        </div>
        <div ref={section4}>
          <Mysection
            headline={`3. Grote Kans op Verslaving`}
            goToSectionRef={section1}
            text={"Door te stoppen met het scrollen op sociale media kan jij de kans op verslaving aan deze platforms verminderen, waardoor je meer controle krijgen over je eigen leven."}
            scrollTo={scrollTo}
            showArrow={false}
            type={type}
          />
        </div>
        <div ref={section5}>
          <Mysection
            headline={`4. Lagere Leermotivatie`}
            goToSectionRef={section1}
            text={"Zonder de constante afleiding van korte video's kan jij een verhoogde motivatie ervaren, wat kan resulteren in een positievere houding ten opzichte van jouw eigen doelen."}
            scrollTo={scrollTo}
            showArrow={false}
            type={type}
          />
        </div>
        <div ref={section6}>
          <Mysection
            headline={`5. Slechter Geheugen voor Geplande Taken`}
            goToSectionRef={section1}
            text={" Zonder de negatieve impact van overmatig gebruik van platforms zoals TikTok, kan jij je beter herinneren aan geplande taken en kan je minder uitstelgedrag gaan vertonen."}
            scrollTo={scrollTo}
            showArrow={false}
            type={type}
          />
        </div>
        <div ref={section7}>
          <Mysection
            headline={`6. Minder Bewuste Tijdsbesteding`}
            goToSectionRef={section1}
            text={"Het stoppen met overmatig scrollen op sociale media stelt jouw in staat om meer bewust om te gaan met je tijd, waardoor je deze kan besteden aan productieve activiteiten die bijdragen aan hun persoonlijke en academische ontwikkeling."}
            scrollTo={scrollTo}
            showArrow={false}
            type={type}
          />
        </div>
        <Navbar/>
      </div>)}
    </div>
  );
}
