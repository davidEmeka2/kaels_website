"use client"

import { motion, useScroll, useTransform } from 'motion/react'
import React, { useRef } from 'react'




function SubHeadline() {

    const width1_1 = useRef(null)

    const {scrollYProgress:progress1} = useScroll({
        target:width1_1,
        offset:["start start", "end end"]
    })

    const width1 = useTransform(progress1, [1,0], ["0%","100%"])

    /////////////////////////////// Second one /////////////////////////////////////

    const width2_2 = useRef(null)

    const {scrollYProgress:progress2} = useScroll({
        target:width2_2,
        offset:["start start", "end end"]
    })

    const width2 = useTransform(progress2, [1,0], ["0%", "100%"])

    /////////////////////////////// Third one /////////////////////////////////////

    const width3_3 = useRef(null)

    const {scrollYProgress:progress3} = useScroll({
        target:width3_3,
        offset:["start start", "end end"]
    })

    const width3 = useTransform(progress3, [1,0], ["0%", "100%"])

    /////////////////////////////// Third one /////////////////////////////////////

    const width4_4 = useRef(null)

    const {scrollYProgress:progress4} = useScroll({
        target:width4_4,
        offset:["start start", "end end"]
    })

    const width4 = useTransform(progress4, [1,0], ["0%", "100%"])


    




  return (
   <>

   <section className='subHeroSec'>

    

     <div>
         <p className='webP1'> Web Designer & Developer</p>

         <motion.p className='webP2'
          style={{width:width1,
            
          }}

       

          ref={width1_1}

          
          >Web Designer & Developer</motion.p>
   
     </div> 

     <div>
        
     <p className='webP1'> With 5+ Years  of Experience</p>

         <motion.p  className='webP2'
          style={{width:width2,
            

          }}

         

          ref={width2_2}

      
         >With 5+ Years  of Experience</motion.p> </div> 

     <div>

     <p className='webP1'> Craft Sleek, User-first Websites</p>

         <motion.p className='webP2'
           style={{width:width3,
            

          }}


          ref={width3_3}

      >Craft Sleek, User-first Websites</motion.p>
     </div>
     
     <div>

     <p className='webP1'> For Founders and Creatives.</p>

         <motion.p className='webP2'
           style={{width:width4,
            

          }}


          ref={width4_4}
          >For Founders and Creatives.</motion.p>
     </div>
    

   </section>

   </>
  )
}

export default SubHeadline
