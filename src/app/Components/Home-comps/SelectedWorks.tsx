"use client"

import { motion } from 'motion/react'
import React, { useEffect, useState } from 'react'
import SelectedWorksHeader from './SelectedWorksHeader'
import Image from 'next/image'




function SelectedWorks() {

  const [rotateHover, setRotateHover] = useState(0)
  const [rotateHover2, setRotateHover2] = useState(0)


  const [blinkSrc, setBlinkSrc] = useState("/images/WorksImgs/shopWave3.jpg")

  

  useEffect(()=>{
    const blinkInt = setInterval(() => {
      if(blinkSrc === "/images/WorksImgs/shopWave3.jpg"){

        setBlinkSrc ("/images/WorksImgs/shopWave.jpg")
      }

      if ( blinkSrc === "/images/WorksImgs/shopWave.jpg"){
        setBlinkSrc("/images/WorksImgs/shopWave2.jpg")
      }

      if ( blinkSrc === "/images/WorksImgs/shopWave2.jpg"){
        setBlinkSrc("/images/WorksImgs/shopWave4.jpg")
      }

      if ( blinkSrc === "/images/WorksImgs/shopWave4.jpg"){
        setBlinkSrc("/images/WorksImgs/shopWave3.jpg")
      }
    }, 1000);

    return ()=> clearInterval(blinkInt)

  },[blinkSrc])

   


  

    

  return (
   <>
   <section className='selectedWorks'>


    {/* //////////////////////////// Selected Works Header ////////////////// */}

    <SelectedWorksHeader/>
   

   {/* ///////////////////////// Selected Works Header Ends ///////////////// */}





  {/* ///////////////////////////// First Work Row ////////////////////////////////// */}


   <section className='firstWorkRow'>


            {/* ////////////// Work Description 1 //////////////// */}



    <div className='workDesc1'>

      <motion.div className='workDesc1ImgDiv'>

        <motion.div className='workDesc1Img' 
        initial={{scale:3, opacity:0.2}}
        whileInView={{scale:1, opacity: 1, transition:{duration:1, ease:"easeInOut"}}}
        whileHover={{scale:1.2, transition:{duration:1}}}
        animate={{rotate:rotateHover, transition:{
          duration:1
        }}}
       onHoverStart={()=>{
        setRotateHover(2)
       }}

       onHoverEnd={()=>{
        setRotateHover(0)
       }}
        
       
        >

        <Image src="/images/WorksImgs/igniteCore.png" alt='Ignite Core' width={640} height={550}/>

        </motion.div>

      </motion.div>



      <div className='workDesc1DetailsDiv'>

        <p className='workDesc1Detail1'> ✦ Creative UI/UX Designer ✦</p>

        <p className='workDesc1Detail2'>The Natural</p>

        <motion.button
         className='workDesc1DetailsButton'>  
          <motion.div
          whileHover={{y:-70, transition:{duration:0.3, ease:"easeInOut"}}}
         
         > 
         <p className='workDesc1DetailsButtonP1'>View</p>
         <p className='workDesc1DetailsButtonP'>View</p>
         </motion.div> 
         </motion.button>

      </div>
      
    </div>


       


    {/* ////////////// Work Description 1 Ends //////////////// */}



     {/* ////////////// Work Description 2 //////////////// */}

    
    <div className='workDesc2'>

    <motion.div className='workDesc2ImgDiv'>

    <motion.div className='workDesc2Img' 

      initial={{scale:3, opacity:0.2}}

      whileInView={{scale:1, opacity: 1, transition:{duration:1, ease:"easeInOut"}}}

      whileHover={{scale:1.2, transition:{duration:1, ease:"easeInOut"}}}

      animate={{rotate:rotateHover2, transition: {duration:1, ease:"easeInOut"}}}
       onHoverStart={()=>{
      setRotateHover2(-2)
       }}

       onHoverEnd={()=>{
        setRotateHover2(0)
        }}


>

<Image src="/images/WorksImgs/kingsWare.png" alt='Ignite Core' width={640} height={600}/>

</motion.div>

</motion.div>



<div className='workDesc2DetailsDiv'>

<p className='workDesc2Detail1'> ✦ Creative Web Deveoloper ✦</p>

<p className='workDesc2Detail2'>Kings Ware</p>

<motion.button
 className='workDesc2DetailsButton'>  
  <motion.div
  whileHover={{y:-70, transition:{duration:0.3, ease:"easeInOut"}}}
 
 > 
 <p className='workDesc2DetailsButtonP1'>View</p>
 <p className='workDesc2DetailsButtonP'>View</p>
 </motion.div> 
 </motion.button>

</div>

    </div>


        {/* ////////////// Work Description 2 Ends //////////////// */}



   </section>



 {/* ///////////////////////////// First Work Row Ends ////////////////////////////////// */}





  {/* ///////////////////////////// Second Work Row  ////////////////////////////////// */}




   <section className='secondWorkRow'>


{/* ////////////// Work 2 Description 1 //////////////// */}



<div className='work2Desc1'>

<motion.div className='work2Desc1ImgDiv'>

<motion.div className='work2Desc1Img' 
initial={{scale:3, opacity:0.2}}
whileInView={{scale:1, opacity: 1, transition:{duration:1, ease:"easeInOut"}}}
whileHover={{scale:1.2, transition:{duration:1}}}
animate={{rotate:rotateHover, transition:{
duration:1
}}}
onHoverStart={()=>{
setRotateHover(2)
}}

onHoverEnd={()=>{
setRotateHover(0)
}}



>

<Image src="/images/WorksImgs/innovativeZone.jpg" alt='Ignite Core' width={640} height={550}/>

</motion.div>

</motion.div>



<div className='work2Desc1DetailsDiv'>

<p className='work2Desc1Detail1'> ✦ Creative Web Developer ✦</p>

<p className='work2Desc1Detail2'>Innovative Zone</p>

<motion.button
className='work2Desc1DetailsButton'>  
<motion.div
whileHover={{y:-70, transition:{duration:0.3, ease:"easeInOut"}}}

> 
<p className='work2Desc1DetailsButtonP1'>View</p>
<p className='work2Desc1DetailsButtonP'>View</p>
</motion.div> 
</motion.button>

</div>

</div>





{/* ////////////// Work 2 Description 1 Ends //////////////// */}



{/* ////////////// Work 2 Description 2 //////////////// */}


<div className='work2Desc2'>

<motion.div className='work2Desc2ImgDiv'>

<motion.div className='work2Desc2Img' 

initial={{scale:3, opacity:0.2}}

whileInView={{scale:1, opacity: 1, transition:{duration:1, ease:"easeInOut"}}}

whileHover={{scale:1.2, transition:{duration:1, ease:"easeInOut"}}}

animate={{rotate:rotateHover2, transition: {duration:1, ease:"easeInOut"}}}
onHoverStart={()=>{
setRotateHover2(-2)
}}

onHoverEnd={()=>{
setRotateHover2(0)
}}


>

<Image src="/images/WorksImgs/ancientArt.png" alt='Ignite Core' width={640} height={550}/>

</motion.div>

</motion.div>



<div className='work2Desc2DetailsDiv'>

<p className='work2Desc2Detail1'> ✦ Creative UI/UX Designer ✦</p>

<p className='work2Desc2Detail2'>Ancient Art</p>

<motion.button
className='work2Desc2DetailsButton'>  
<motion.div
whileHover={{y:-70, transition:{duration:0.3, ease:"easeInOut"}}}

> 
<p className='work2Desc2DetailsButtonP1'>View</p>
<p className='work2Desc2DetailsButtonP'>View</p>
</motion.div> 
</motion.button>

</div>

</div>


{/* ////////////// Work Description 2 Ends //////////////// */}



</section>


  {/* ///////////////////////////// Second Work Row Ends ////////////////////////////////// */}  





  {/* ///////////////////////////// Third Work Row  ////////////////////////////////////// */}




  <section className='firstWorkRow'>


            {/* ////////////// Work Description 1 //////////////// */}



    <div className='workDesc1'>

      <motion.div className='workDesc1ImgDiv'>

        <motion.div className='workDesc1Img' 
        initial={{scale:3, opacity:0.2}}
        whileInView={{scale:1, opacity: 1, transition:{duration:1, ease:"easeInOut"}}}
        whileHover={{scale:1.2, transition:{duration:1}}}
        animate={{rotate:rotateHover, transition:{
          duration:1
        }}}
       onHoverStart={()=>{
        setRotateHover(2)
       }}

       onHoverEnd={()=>{
        setRotateHover(0)
       }}
        
       
        >

        <Image src="/images/WorksImgs/motivra.jpg" alt='Ignite Core' width={640} height={550}/>

        </motion.div>

      </motion.div>



      <div className='workDesc1DetailsDiv'>

        <p className='workDesc1Detail1'> ✦ Creative Web Developer ✦</p>

        <p className='workDesc1Detail2'>Motivra</p>

        <motion.button
         className='workDesc1DetailsButton'>  
          <motion.div
          whileHover={{y:-70, transition:{duration:0.3, ease:"easeInOut"}}}
         
         > 
         <p className='workDesc1DetailsButtonP1'>View</p>
         <p className='workDesc1DetailsButtonP'>View</p>
         </motion.div> 
         </motion.button>

      </div>
      
    </div>


       


    {/* ////////////// Work Description 1 Ends //////////////// */}



     {/* ////////////// Work Description 2 //////////////// */}

    
    <div className='workDesc2'>

    <motion.div className='workDesc2ImgDiv'>

    <motion.div className='workDesc2Img' 

      initial={{scale:3, opacity:0.2}}

      whileInView={{scale:1, opacity: 1, transition:{duration:1, ease:"easeInOut"}}}

      whileHover={{scale:1.2, transition:{duration:1, ease:"easeInOut"}}}

      animate={{rotate:rotateHover2, transition: {duration:1, ease:"easeInOut"}}}
       onHoverStart={()=>{
      setRotateHover2(-2)
       }}

       onHoverEnd={()=>{
        setRotateHover2(0)
        }}


>

<Image src={blinkSrc} alt='Shop Wave' width={640} height={550}/>

</motion.div>

</motion.div>



<div className='workDesc2DetailsDiv'>

<p className='workDesc2Detail1'> ✦ Creative Graphics Designer ✦</p>

<p className='workDesc2Detail2'>Other Designs</p>

<motion.button
 className='workDesc2DetailsButton'>  
  <motion.div
  whileHover={{y:-70, transition:{duration:0.3, ease:"easeInOut"}}}
 
 > 
 <p className='workDesc2DetailsButtonP1'>View</p>
 <p className='workDesc2DetailsButtonP'>View</p>
 </motion.div> 
 </motion.button>

</div>

    </div>


        {/* ////////////// Work Description 2 Ends //////////////// */}



   </section>





  {/* ///////////////////////////// Third Work Row  ////////////////////////////////// */}


  {/* //////////////////////////// Show more /////////////////////////////////// */}


  <section className='showAll'>

  <motion.button
         className='contactHeader text-ml'>  
          <motion.div
          whileHover={{y:-85, transition:{duration:0.3, ease:"easeInOut"}}}
         
         > 
         <p>MORE PROJECTS</p>
         <p className='contactHeaderP text-ml'>MORE PROJECTS</p>
         </motion.div> 
         </motion.button>

  </section>


  </section>
   </>
  )
}

export default SelectedWorks
