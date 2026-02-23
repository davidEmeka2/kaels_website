"use client"

import HeroComp from "./Components/Home-comps/HeroComp";
import SubHeadline from "./Components/Home-comps/SubHeadline";
import SelectedWorks from "./Components/Home-comps/SelectedWorks"
import DesignComp from "./Components/Home-comps/DesignComp";
import Expertise from "./Components/Home-comps/Expertise";
import ContactHomeComp from "./Components/Home-comps/ContactHomeComp";
import Lenis from 'lenis'
import { useEffect } from "react";








export default function Home() {

useEffect(()=>{
  const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time:any) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

   requestAnimationFrame(raf);
},[])

  return (
   <>

   {/* //////////////// hero Sec///////////////// */}

   <HeroComp/>

   {/* ////////////////// Sub-HeadLine//////////////////// */}
   
   <SubHeadline/>

  {/* ////////////////// Selected Works//////////////////// */}

  <SelectedWorks/>

  {/* ////////////////// Design Production ///////////////// */}


  <DesignComp/>

  {/* /////////////// Expertise & Skills ////////////////// */}

  <Expertise/>

  {/* ///////////////// Contact Think Comp //////////////// */}

  <ContactHomeComp/>
     
   </>
  );
}
