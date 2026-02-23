"use client"

import React from 'react'
import ExpertiseHeader from './ExpertiseHeader'
import { motion } from 'motion/react'



function Expertise() {

const varients:any = {
    hidden:{
       opacity:0
    },
    visible:{
        opacity:1,

        transition:{
            duration:0.5,
            staggerChildren:0.1,
            ease:"easeInOut"
        }
    }
}

const varients2 = {
    hidden:{
        y:-20,
        opacity:0
    },
    visible:{
        y:0, 
        opacity:1,
        transition:{
            duration:0.5
        }
    }
}


  return (
   <>
   <section className='expertiseSec'>

    {/* ///////////// Expertise Header & Skills ///////////////// */}

    <ExpertiseHeader/>

    {/* /////////// Expertise Header & Skills Ends ////////////// */}



    {/* /////////////////////////// First Skill ////////////////////// */}


    <section className='masterSkill'>

        <div className='masterSkillDiv'>

            <motion.div className='skillsHeader'>
                <motion.div
                initial={{y:-50, opacity:0}}
                whileInView={{y:0,opacity:1, transition:{duration:0.5, ease:"easeInOut", } }}
                 className='masterSkillP1'>Visual</motion.div>
            </motion.div>

            <motion.div
            variants={varients}
            initial="hidden"
            whileInView="visible"
             className='skillsItemsDiv'>

                <motion.div variants={varients2}>Figma</motion.div>

                <motion.div variants={varients2}>PhotoShop</motion.div>

                <motion.div variants={varients2}>Illustrator</motion.div>

                <motion.div variants={varients2}>Canva</motion.div>

            </motion.div>

        </div>



{/* ////////////////////////// Second Skill /////////////////////////// */}


         <div className='masterSkillDiv'>

            <motion.div className='skillsHeader'>
                <motion.div
                initial={{y:-50, opacity:0}}
                whileInView={{y:0,opacity:1, transition:{duration:0.5, ease:"easeInOut", } }}
                 className='masterSkillP1'>Development</motion.div>
            </motion.div>

            <motion.div
            variants={varients}
            initial="hidden"
            whileInView="visible"
             className='skillsItemsDiv'>

                <motion.div variants={varients2}>NextJS</motion.div>

                <motion.div variants={varients2}>ReactJS</motion.div>

                <motion.div variants={varients2}>Javascript</motion.div>

                <motion.div variants={varients2}>Wordpress</motion.div>

                <motion.div variants={varients2}>HTML & CSS</motion.div>

                

            </motion.div>

        </div>


       {/* ////////////////////////// Third Skill /////////////////////////// */}


         <div className='masterSkillDiv'>

            <motion.div className='skillsHeader'>
                <motion.div
                initial={{y:-50, opacity:0}}
                whileInView={{y:0,opacity:1, transition:{duration:0.5, ease:"easeInOut", } }}
                 className='masterSkillP1'>Data Analysis</motion.div>
            </motion.div>

            <motion.div
            variants={varients}
            initial="hidden"
            whileInView="visible"
             className='skillsItemsDiv'>

                <motion.div variants={varients2}>Excel</motion.div>

                <motion.div variants={varients2}>Power Bi</motion.div>

                <motion.div variants={varients2}>SQL</motion.div>

                <motion.div variants={varients2}>Google Analytics</motion.div>
                

            </motion.div>

        </div>


        {/* ////////////////////////// Fouth Skill /////////////////////////// */}


         <div className='masterSkillDiv'>

            <motion.div className='skillsHeader'>
                <motion.div
                initial={{y:-50, opacity:0}}
                whileInView={{y:0,opacity:1, transition:{duration:0.5, ease:"easeInOut", } }}
                 className='masterSkillP1'>Awards</motion.div>
            </motion.div>

            <motion.div
            variants={varients}
            initial="hidden"
            whileInView="visible"
             className='skillsItemsDiv'>

                <motion.div variants={varients2}>Awwwards</motion.div>

                <motion.div variants={varients2}>CSSDA</motion.div>

                <motion.div variants={varients2}>Dribble</motion.div>

                

            </motion.div>

        </div>




       
        
    </section>




   </section>
   </>
  )
}

export default Expertise
