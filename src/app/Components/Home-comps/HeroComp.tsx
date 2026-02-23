"use client"

import React from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'



function HeroComp() {



  return (
   <>
   <section className='heroSection'>

    <Marquee speed={100} className='buildBoldMarque' >

      <p className='marqueeSpacer'></p>

      <span style={{fontFamily:"Cormorant Unicase", fontStyle:"italic"}} > Build Bold, Stress Less ⪧⪧</span>
      
      <p className='marqueeSpacer'></p>

      <span > Build Bold, Stress Less ⪧⪧</span>

      <p className='marqueeSpacer'></p>

      <span style={{fontFamily:"Cormorant Unicase", fontStyle:"italic"}}> Build Bold, Stress Less ⪧⪧</span>

      <p className='marqueeSpacer'></p>

      <span > Build Bold, Stress Less ⪧⪧</span>

      <p className='marqueeSpacer'></p>

      <span style={{fontFamily:"Cormorant Unicase", fontStyle:"italic"}}> Build Bold, Stress Less ⪧⪧</span>

      <p className='marqueeSpacer'></p>

      <span> Build Bold, Stress Less ⪧⪧</span>

      <p className='marqueeSpacer'></p>

      <span style={{fontFamily:"Cormorant Unicase", fontStyle:"italic"}} > Build Bold, Stress Less ⪧⪧</span>

      <p className='marqueeSpacer'></p>

      <span> Build Bold, Stress Less ⪧⪧</span>

    </Marquee>



    <p className='helloHeroText'>HELLO</p>


    <div className='heroImageFlexer'>

    <div className='heroImage'> 
      <Image alt='heroImage' src="/images/heroImg.jpg" width={400} height={700}/> 
      </div>

      <div  className='heroImageFlexAdjuster'></div>

    </div>

   

    <div className='imAndKael'> 

      <div className='im'> <p
    
      >I&apos;m</p> </div>

     

      <div className='kaelText'> <p>KAEL</p> </div>
     

       </div>

   </section>
   </>
  )
}

export default HeroComp
