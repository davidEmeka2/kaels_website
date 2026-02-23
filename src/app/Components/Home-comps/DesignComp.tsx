"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'


function DesignComp() {

  const firstImg = useRef(null)


  const {scrollYProgress: progressOne} = useScroll({
    target: firstImg,
    offset: ["start center","end"],

  })

  const {scrollYProgress: progressTwo} = useScroll({
    target: firstImg,
    offset: ["start center","end"],

  })

  const {scrollYProgress: progressThree} = useScroll({
    target: firstImg,
    offset: ["start center","end"],

  })

  const {scrollYProgress: progressFour} = useScroll({
    target: firstImg,
    offset: ["start center","end"],

  })

  const {scrollYProgress: progressFive} = useScroll({
    target: firstImg,
    offset: ["start center","end"],

  })

  const firstImg_1 = useTransform(progressOne, [0,1], ["0", "-100%"]) 

  const firstImg_2 = useTransform(progressTwo, [0,1], ["0", "-200%"]) 

  const firstImg_3 = useTransform(progressThree, [0,1], ["0", "100%"]) 

  const firstImg_4 = useTransform(progressFour, [0,1], ["0", "200%"]) 

  const y = useTransform(progressFive, [0,1], ["0","-100%" ]) 

  return (
    <>
    <section className='designCompSec'  ref={firstImg}>

      <motion.div className='designCompTextDiv' 
      
      style={{
        y,
      }}>

        <p className='desText'>DESIGN</p>

        <p className='prodText'>PRODUCTION</p>

        <p className='miniText'>MINIMALISM</p>

        <p className='artText'>ART</p>

        <div className='sinceText'> <p>Since 2017, I’ve delivered 90+ projects worldwide, blending design, strategy, and tech to create websites that don’t just look good—they perform</p></div>

       
      </motion.div>

    <div className='designCompDivs'>

       <motion.div className='middleImage'
       style={{
        zIndex:5,
       }}
       > 

            <Image src="/images/scrollXMove/middle.jpg" height={500} width={400} alt='middle' />
      
         </motion.div>

    </div>


    <div className='designCompDivs'>

      <motion.div className='middleImage middleImage1'
     
      style={{
        x: firstImg_1,
        zIndex:4,
      }}
     
    

      > 

           <Image src="/images/scrollXMove/1.jpg" height={500} width={400} alt='middle' />

      </motion.div>

    </div>



    <div className='designCompDivs'>

         <motion.div className='middleImage middleImage2'
         style={{
          x: firstImg_2,
          zIndex:3,
         }}
         > 

            <Image src="/images/scrollXMove/2.jpg" height={500} width={400} alt='middle' />
      
         </motion.div>

    </div>




    <div className='designCompDivs'>

       <motion.div className='middleImage middleImage3'
       style={{
        x: firstImg_3,
        zIndex:2,
       }}
      
       > 

            <Image src="/images/scrollXMove/3.jpg" height={500} width={400} alt='middle' />
      
         </motion.div>

    </div>



    <div className='designCompDivs'>

       <motion.div className='middleImage middleImage4' 
       style={{
        x: firstImg_4,
        zIndex:1,
       }}
       > 

            <Image src="/images/scrollXMove/4.jpg" height={500} width={400} alt='middle' />
      
         </motion.div>
    
    </div>




    {/* ////////////////// about me ///////////////////////////////// */}

    <section className='showAll bottomPos'>

  <motion.button
         className='contactHeader text-ml'>  
          <motion.div
          whileHover={{y:-85, transition:{duration:0.3, ease:"easeInOut"}}}
         
         > 
         <p>About Me</p>
         <p className='contactHeaderP text-ml'>About Me</p>
         </motion.div> 
         </motion.button>

  </section>

{/* ///////////////////////// about me ends //////////////////////////////////////// */}



    </section>



    </>
  )
}

export default DesignComp
