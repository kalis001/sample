import React from 'react'
import './Contact.css'
import baa from './Frame_13_5338ada5-3cec-441f-906e-2ab227cdc371.png'
import mission from './image_84.webp'
// import vision from './depositphotos_289108468-stock-photo-indian-mother-daughter-video-call_1.webp'

export default function Contact() {
   return (
      <div>
         <div className=''>
            <div className='row'>
               <div className='baalogo mt-5 '>
                  <img src={baa} width={50}></img>
               </div>
               <div className='col-xs-12 col-md-12'>
                  <h2 className='baah1'>Welcome to Baatu</h2>
               </div>
               <div className=' '>
                  <p className='baapara1 '>At Baatu, we are committed to safeguarding the digital well-being of children. Located in the fastest-growing metropolis city, we
                     understand the rapid pace of technological advancement and the growing digital presence in young lives. Our goal is to ensure that
                     this digital journey is not only enriching but also secure.</p>
               </div>
            </div>
            <div>
               <div className=''>
                  <h3 className='ourmission '>our mission</h3>
               </div>
               <div className='row d-flex row-cols-1 row-cols-md-2'>
                  <div className='co-12 col-md-6 ps-5 mt-5  '>
                     <img src={mission} width={400}></img>
                  </div>
                  <div className='col-12 col-md-6 pe-5'>
                     <p className='baapara2'>In today’s interconnected world, children are exposed to various online content, some of which can be harmful. Baatu's mission is to provide a safe and nurturing digital environment for children, allowing them to explore, learn, and grow without fear. We aim to equip parents and guardians with the tools they need to protect their children from online dangers, ensuring a secure and positive online experience.</p>
                  </div>
               </div>
            </div>
            <div>
            </div>
         </div>
      </div>
   )
}
