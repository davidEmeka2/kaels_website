"use client"
import React from 'react'
import Image from 'next/image'
import {  easeInOut, motion, useAnimate, animate, scale} from 'motion/react'
import Marquee from 'react-fast-marquee'






function Footer() {
  return (
   <>
   <footer>

    <section className='footerUpperAlpha'>

    <div className='footerLogo'>

        <Image src="/footerLogo.svg" alt='logo' height={300} width={300}></Image>

      </div >

      <motion.nav className='footerNav'
      >

        <p className='footerWorks'>Works</p>
        <p className='footerAbout'>About</p>
        <p className='footerArticle'>Articles</p>
        <p className='footerContact'>Contact</p>

      

      </motion.nav>

      <div className='footerButtons'>

      <motion.button
         className='contactFooter'>  
          <motion.div
          whileHover={{y:-85, transition:{duration:0.3, ease:"easeInOut"}}}
         
         > 
         <p>LinkedIn</p>
         <p className='contactFooterP'>LinkedIn</p>
         </motion.div> 
         </motion.button>

         <motion.button
         className='contactFooter'>  
          <motion.div
          whileHover={{y:-85, transition:{duration:0.3, ease:"easeInOut"}}}
         
         > 
         <p>Behance</p>
         <p className='contactFooterP'>Behance</p>
         </motion.div> 
         </motion.button>


         <motion.button
         className='contactFooter'>  
          <motion.div
          whileHover={{y:-85, transition:{duration:0.3, ease:"easeInOut"}}}
         
         > 
         <p>Email</p>
         <p className='contactFooterP'>Email</p>
         </motion.div> 
         </motion.button>

         <motion.button
         className='contactFooter'>  
          <motion.div
          whileHover={{y:-85, transition:{duration:0.3, ease:"easeInOut"}}}
         
         > 
         <p>Instagram</p>
         <p className='contactFooterP'>Instagram</p>
         </motion.div> 
         </motion.button>


      </div>

    </section>

    {/* ////////////////////// second footer section //////////////////////// */}

    <section className='iLoveSec'>

      <p> I love working with passionate
            people and brands
      </p>

      <p>
         © by co-Dave with Love
      </p>

    </section>

    {/* //////////////////////////////////// marque Sec ////////////////////////// */}

    <section className='marqueeSec'>

    <Marquee style={{overflow:"hidden", width:"100%"}} className='theMarque' speed={100}>

      <p>
          #DESIGNSELLS
          <span  >#DESIGNSELLS</span> 
          #DESIGNSELLS
          <span >#DESIGNSELLS</span>
          #DESIGNSELLS
          <span >#DESIGNSELLS</span>

      </p>

      </Marquee>

    </section>



   </footer>
   </>
  )
}

export default Footer
