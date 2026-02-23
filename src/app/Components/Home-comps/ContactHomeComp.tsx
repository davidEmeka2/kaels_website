"use client"

import { motion, useScroll, useTransform } from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'





function ContactHomeComp() {


//////////////////////// Zoom In Feature /////////////////////////////


  const triggerThink = useRef(null)

  // const fadeOutScroll = useRef(null)


  const {scrollYProgress:progress1} = useScroll({
    target:triggerThink,
    offset:["start center", "end"]
  })

  const {scrollYProgress:progress2} = useScroll({
    target:triggerThink,
    offset:["start end", "end"]
  })

  const scale = useTransform(progress1 ,[0,1] ,[4,1])

  const opacity = useTransform(progress2, [0,1], [2,0])




  ////////////////////////// Zoom in feature end ///////////////////////////////







  /////////////////////// change Image Feature ////////////////////////////////


  ////////////////////// Image 1 ///////////////////////////


 const [blinkSrc1, setBlinkSrc1] = useState("/images/zoomInScrollImg/image1.png")

  

  useEffect(()=>{
    const blinkInt1 = setInterval(() => {
      if(blinkSrc1 === "/images/zoomInScrollImg/image1.png"){

        setBlinkSrc1 ("/images/zoomInScrollImg/image2.png")
      }

      if ( blinkSrc1 === "/images/zoomInScrollImg/image2.png"){
        setBlinkSrc1("/images/zoomInScrollImg/image3.png")
      }


      if ( blinkSrc1 === "/images/zoomInScrollImg/image3.png"){
        setBlinkSrc1("/images/zoomInScrollImg/image1.png")
      }
    }, 1000);

    return ()=> clearInterval(blinkInt1)

  },[blinkSrc1])


  ////////////////////// Image 2 ///////////////////////////
  

 const [blinkSrc2, setBlinkSrc2] = useState("/images/zoomInScrollImg/image4.jpg")

  

 useEffect(()=>{
   const blinkInt2 = setInterval(() => {
     if(blinkSrc2 === "/images/zoomInScrollImg/image4.jpg"){

       setBlinkSrc2 ("/images/zoomInScrollImg/image5.jpg")
     }

     if ( blinkSrc2 === "/images/zoomInScrollImg/image5.jpg"){

       setBlinkSrc2("/images/zoomInScrollImg/image6.jpg")
     }


     if ( blinkSrc2 === "/images/zoomInScrollImg/image6.jpg"){

       setBlinkSrc2("/images/zoomInScrollImg/image4.jpg")
     }
   }, 1000);

   return ()=> clearInterval(blinkInt2)

 },[blinkSrc2])


 ////////////////////// Image 3 ///////////////////////////
  

 const [blinkSrc3, setBlinkSrc3] = useState("/images/zoomInScrollImg/image7.jpg")

  

  useEffect(()=>{
    const blinkInt3 = setInterval(() => {
      if(blinkSrc3 === "/images/zoomInScrollImg/image7.jpg"){

        setBlinkSrc3 ("/images/zoomInScrollImg/image8.jpg")
      }

      if ( blinkSrc3 === "/images/zoomInScrollImg/image8.jpg"){

        setBlinkSrc3("/images/zoomInScrollImg/image9.jpg")
      }


      if ( blinkSrc3 === "/images/zoomInScrollImg/image9.jpg"){

        setBlinkSrc3("/images/zoomInScrollImg/image7.jpg")
      }
    }, 1000);

    return ()=> clearInterval(blinkInt3)

  },[blinkSrc3])

  ////////////////////// Image 4 ///////////////////////////
  

 const [blinkSrc4, setBlinkSrc4] = useState("/images/zoomInScrollImg/image10.jpg")

  

 useEffect(()=>{
   const blinkInt4 = setInterval(() => {
     if(blinkSrc4 === "/images/zoomInScrollImg/image10.jpg"){

       setBlinkSrc4 ("/images/zoomInScrollImg/image11.jpg")
     }

     if ( blinkSrc4 === "/images/zoomInScrollImg/image11.jpg"){
       setBlinkSrc4("/images/zoomInScrollImg/image12.jpg")
     }


     if ( blinkSrc4 === "/images/zoomInScrollImg/image12.jpg"){
       setBlinkSrc4("/images/zoomInScrollImg/image10.jpg")
     }
   }, 1000);

   return ()=> clearInterval(blinkInt4)

 },[blinkSrc4])


 ////////////////////// Image 5 ///////////////////////////
  

 const [blinkSrc5, setBlinkSrc5] = useState("/images/zoomInScrollImg/main4.jpg")

  

 useEffect(()=>{
   const blinkInt5 = setInterval(() => {
     if(blinkSrc5 === "/images/zoomInScrollImg/main4.jpg"){

       setBlinkSrc5 ("/images/zoomInScrollImg/main5.jpg")
     }

     if ( blinkSrc5 === "/images/zoomInScrollImg/main5.jpg"){

       setBlinkSrc5("/images/zoomInScrollImg/main6.jpg")
     }


     if ( blinkSrc5 === "/images/zoomInScrollImg/main6.jpg"){

       setBlinkSrc5("/images/zoomInScrollImg/main4.jpg")
     }
   }, 1000);

   return ()=> clearInterval(blinkInt5)

 },[blinkSrc5])


  ////////////////////// Image 6 ///////////////////////////
  

  const [blinkSrc6, setBlinkSrc6] = useState("/images/zoomInScrollImg/main1.jpg")

  

  useEffect(()=>{
    const blinkInt6 = setInterval(() => {
      if(blinkSrc6 === "/images/zoomInScrollImg/main1.jpg"){
 
        setBlinkSrc6 ("/images/zoomInScrollImg/main2.jpg")
      }
 
      if ( blinkSrc6 === "/images/zoomInScrollImg/main2.jpg"){
        setBlinkSrc6("/images/zoomInScrollImg/main3.jpg")
      }
 
 
      if ( blinkSrc6 === "/images/zoomInScrollImg/main3.jpg"){
        setBlinkSrc6("/images/zoomInScrollImg/main1.jpg")
      }
    }, 1000);
 
    return ()=> clearInterval(blinkInt6)
 
  },[blinkSrc6])


   ////////////////////// Image 7 ///////////////////////////
  

 const [blinkSrc7, setBlinkSrc7] = useState("/images/zoomInScrollImg/image13.png")

  

 useEffect(()=>{
   const blinkInt7 = setInterval(() => {
     if(blinkSrc7 === "/images/zoomInScrollImg/image13.png"){

       setBlinkSrc7 ("/images/zoomInScrollImg/image14.jpg")
     }

     if ( blinkSrc7 === "/images/zoomInScrollImg/image14.jpg"){
       setBlinkSrc7("/images/zoomInScrollImg/image15.png")
     }


     if ( blinkSrc7 === "/images/zoomInScrollImg/image15.png"){
       setBlinkSrc7("/images/zoomInScrollImg/image13.png")
     }
   }, 1000);

   return ()=> clearInterval(blinkInt7)

 },[blinkSrc7])


  ////////////////////// Image 8 ///////////////////////////
  

  const [blinkSrc8, setBlinkSrc8] = useState("/images/zoomInScrollImg/image16.jpg")

  

  useEffect(()=>{
    const blinkInt8 = setInterval(() => {
      if(blinkSrc8 === "/images/zoomInScrollImg/image16.jpg"){
 
        setBlinkSrc8 ("/images/zoomInScrollImg/image17.png")
      }
 
      if ( blinkSrc8 === "/images/zoomInScrollImg/image17.png"){
        setBlinkSrc8("/images/zoomInScrollImg/image18.png")
      }
 
 
      if ( blinkSrc8 === "/images/zoomInScrollImg/image18.png"){
        setBlinkSrc8("/images/zoomInScrollImg/image16.jpg")
      }
    }, 1000);
 
    return ()=> clearInterval(blinkInt8)
 
  },[blinkSrc8])

   ////////////////////// Image 9 ///////////////////////////
  

 const [blinkSrc9, setBlinkSrc9] = useState("/images/zoomInScrollImg/image24.jpg")

  

 useEffect(()=>{
   const blinkInt9 = setInterval(() => {
     if(blinkSrc9 === "/images/zoomInScrollImg/image24.jpg"){

       setBlinkSrc9 ("/images/zoomInScrollImg/image25.jpg")
     }

     if ( blinkSrc9 === "/images/zoomInScrollImg/image25.jpg"){

       setBlinkSrc9("/images/zoomInScrollImg/image26.jpg")
     }


     if ( blinkSrc9 === "/images/zoomInScrollImg/image26.jpg"){

       setBlinkSrc9("/images/zoomInScrollImg/image24.jpg")
     }
   }, 1000);

   return ()=> clearInterval(blinkInt9)

 },[blinkSrc9])

 
 


  return (
     <>

     <section className='contactThinkAlphaSec' ref={triggerThink}>


     <motion.div className='thinkTextDiv' 
      
      style={{
        opacity,
      }}>

        <p className='desText'>THINK</p>

        <p className='prodText' style={{color:"#d6d6ce"}}>MORE</p>

        <p className='miniText'>DESIGN</p>

        <p className='artText'>LESS</p>

    
       
      </motion.div>


    
       <motion.section className='contactThinkHome'
        style={{scale}}
        >

{/* //////////////////////////////////////  upper Images //////////////////// */}

       <div className='thinkImageAlpha thinkImageAlpha1'>
        
        <div className='ThinkImgDiv1'>

        <Image src={blinkSrc1} alt='Image1' fill />

        </div>

        <div className='ThinkImgDiv2'>

          <Image src={blinkSrc2} alt='Image2' fill />

        </div>

        <div className='ThinkImgDiv3'>

          <Image src={blinkSrc3} alt='Image3' fill />

        </div>

      </div> 


{/* ////////////////////////////////////// Middle Images ///////////////////// */}


        <div className='thinkImageAlpha thinkImageAlpha2'>

        <div className='ThinkImgDiv4'>

         <Image src={blinkSrc4} alt='Image4' fill />

        </div>

        <motion.div className='ThinkImgDiv5'>

       


          <Image src={blinkSrc5} alt='Image5' fill />

        </motion.div>

        <div className='ThinkImgDiv6'>

        <Image src={blinkSrc6} alt='Image6' fill />

        </div>

      


        </div>

{/* /////////////////////////////////// Bottom Images ////////////////////// */}


        <div className='thinkImageAlpha thinkImageAlpha3'>

        <div className='ThinkImgDiv7'>

        <Image src={blinkSrc7} alt='Image7' fill />

        </div>
        
        <div className='ThinkImgDiv8'>

        <Image src={blinkSrc8} alt='Image8' fill />

        </div>

        <div className='ThinkImgDiv9'>

        <Image src={blinkSrc9} alt='Image9' fill />

        </div>

        </div>

       </motion.section>

       </section>
     </>
  )
}

export default ContactHomeComp
