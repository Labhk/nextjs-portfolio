import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Head from "next/head";

export default function Home() {
  return(
    <>
    <Head>
      <title>Shubh K | Architect</title>
      <link rel="icon" href="/icon.jpg" />
    </Head>
     <Header/>
     <HeroSection/>
     <About/>
     <Skills/>
     <WorkExperience/>
     <Projects/>
     <Contact/>
    </>
  )
};