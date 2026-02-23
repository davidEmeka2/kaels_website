"use client"

import React from 'react'
import { motion } from 'motion/react'

function ExpertiseHeader() {

    
    const varients:any = {
        hidden:{x:100},

        visible:{x:0, transition:{
            duration:0.5,
            ease:"easeInOut",
            staggerChildren:0.1

        }}

    }

    const childrenVarients = {
        hidden:{x:100},

        visible:{x:0, transition:{
            duration:0.5
        }}

    }
    
  return (
    <>
      <div className='selectedWorksHeader'>

<div className='selectedWorksHeaderFlexer'>

<motion.h1 className='selectedH1'
    variants={varients}
    initial="hidden"
    whileInView="visible"
    >

        <motion.span className='moveInEffect2'
        variants={childrenVarients}
        > 
            
            <motion.p
             variants={childrenVarients}
         initial={{x:200}}
         whileInView={{x:0, transition:{duration:0.5, ease:"easeInOut"}}}
        className='w'

        >M</motion.p>

         </motion.span>

        <motion.span className='moveInEffect3'
        variants={childrenVarients}
        > <motion.p
        variants={childrenVarients}
        initial={{x:160}}
        whileInView={{x:0, transition:{duration:0.5, ease:"easeInOut"}}}
        >A</motion.p> 

        </motion.span>

        <motion.span className='moveInEffect'
        variants={childrenVarients}
        > 
            
            <motion.p
             variants={childrenVarients}
        initial={{x:130}}
        whileInView={{x:0, transition:{duration:0.5, ease:"easeInOut"}}}
        >S</motion.p> 

        </motion.span>


        <motion.span className='moveInEffect'
        variants={childrenVarients}
        > 
            
            <motion.p
             variants={childrenVarients}
        initial={{x:130}}
        whileInView={{x:0, transition:{duration:0.5, ease:"easeInOut"}}}
        >T</motion.p>

        </motion.span>

        <motion.span className='moveInEffect'
        variants={childrenVarients}
        > 
            
            <motion.p
             variants={childrenVarients}
        initial={{x:130}}
        whileInView={{x:0, transition:{duration:0.5, ease:"easeInOut"}}}
        >E</motion.p>

        </motion.span>


        <motion.span className='moveInEffect'
        variants={childrenVarients}
        > 
            
            <motion.p
             variants={childrenVarients}
        initial={{x:130}}
        whileInView={{x:0, transition:{duration:0.5, ease:"easeInOut"}}}
        >R</motion.p>

        </motion.span>

        <motion.span className='moveInEffect'
        variants={childrenVarients}
        > 
            
            <motion.p
             variants={childrenVarients}
        initial={{x:130}}
        whileInView={{x:0, transition:{duration:0.5, ease:"easeInOut"}}}
        >Y</motion.p>

        </motion.span>



        <motion.span className='moveInEffect'
        variants={childrenVarients}
        > 
            
            <motion.p
             variants={childrenVarients}
        initial={{x:130}}
        whileInView={{x:0, transition:{duration:0.5, ease:"easeInOut"}}}
        >/</motion.p>

        </motion.span>

        

    </motion.h1>


    <motion.h1 className='worksH1'
    variants={varients}
    initial="hidden"
    whileInView="visible"
    >

        <motion.span className='moveInEffect2'
        variants={childrenVarients}
        > 
            
            <motion.p
             variants={childrenVarients}
         initial={{x:200}}
         whileInView={{x:0, transition:{duration:0.5, ease:"easeInOut"}}}
        className='w'

        >S</motion.p>

         </motion.span>

        <motion.span className='moveInEffect3'
        variants={childrenVarients}
        > <motion.p
        variants={childrenVarients}
        initial={{x:160}}
        whileInView={{x:0, transition:{duration:0.5, ease:"easeInOut"}}}
        >K</motion.p> 

        </motion.span>

        <motion.span className='moveInEffect'
        variants={childrenVarients}
        > 
            
            <motion.p
             variants={childrenVarients}
        initial={{x:130}}
        whileInView={{x:0, transition:{duration:0.5, ease:"easeInOut"}}}
        >I</motion.p> 

        </motion.span>

        <motion.span className='moveInEffect'
        variants={childrenVarients}
        > 
            
            <motion.p
             variants={childrenVarients}
        initial={{x:130}}
        whileInView={{x:0, transition:{duration:0.5, ease:"easeInOut"}}}
        >L</motion.p>

        </motion.span>

        <motion.span className='moveInEffect'
        variants={childrenVarients}
        >

            <motion.p
             variants={childrenVarients}
        initial={{x:130}}
        whileInView={{x:0, transition:{duration:0.5, ease:"easeInOut"}}}
        >L</motion.p>

        </motion.span>

    </motion.h1>

</div>

<div className='selectedWorksHeaderFlexAdjuster'>

</div>

</div>

    </>
  )
}

export default ExpertiseHeader
