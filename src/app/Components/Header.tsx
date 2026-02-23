"use client"
import React, {useState } from 'react'
import Image from 'next/image'
import {Squash as Hamburger } from 'hamburger-react'
import { motion, useScroll, useMotionValueEvent } from 'motion/react'




function Header() {



 const [goingUp, setGoingUp] = useState(0)


 const {scrollY} = useScroll()

 

 useMotionValueEvent(scrollY, "change", (value)=>{
 
  const prevValue:any = scrollY.getPrevious()

  if(value > prevValue && value > 150){
    setGoingUp(-100)
  }
  else{
    setGoingUp(0)
  }
 })

 

  return (
    <>
    <motion.header style={{
      position:"sticky",
      top:0,
      zIndex:100,
    
    }}

   

    initial={{y:0}}
    animate={{y:goingUp, transition:{duration:0.3, ease:"easeInOut"}}}
    >

      <div className='logo'>
        <Image src={"/logo.svg"} alt='logo' height={85} width={85}/>
      </div>

      <div className='headerStrecher'>

      </div>

      <div className='contactAndHamburger'>

        <motion.button
         className='contactHeader'>  
          <motion.div
          whileHover={{y:-85, transition:{duration:0.3, ease:"easeInOut"}}}
         
         > 
         <p>CONTACT</p>
         <p className='contactHeaderP'>CONTACT</p>
         </motion.div> 
         </motion.button>



        <div className='hamburger'> <Hamburger rounded color='#FF5C00'  label="Show menu" size={25}/>
        </div>

      </div>

    </motion.header>
    </>
  )
}

export default Header
