import React, { useState } from 'react'
import './Blockhome.css'
import logo from './logo-me.svg'
import bag from './business_center_24dp_FC3736_FILL0_wght400_GRAD0_opsz24.svg'

export default function Blockhome() {
    const [day,setday] = useState(0)
    const [hour,sethour] = useState(0)
    const [minutes,setminutes] = useState(0)
    const [seconds,setseconds] = useState(0)
    
    function click(){
      const date = new Date();
      const days = ['Sun','Mon','Tus','wed','Thu','fri','sat']
      
      
      setday(days[date.getDay()])
      sethour(date.getHours())
      setminutes(date.getMinutes())
      setseconds(date.getSeconds())
      
      if(hour>12){
        hour = hour - 12
        console.log(hour);
        
        
      }

    }

    setInterval(click,1000)
  return (
    <div className='container'>
      <div className='blackbgimage '>
        <div className='blackdiv d-flex pt-2  ' id='blackbutton'>
          <img src={logo}></img>
          <ul className='blackul '>
            <li><a className='active' href="#home">home</a></li>
            <li><a className='' href="#shop">shop</a></li>
            <li><a className='' href="#about">about</a></li>
            <li><a className='' href="#contact">contact</a></li>
          </ul>
          <button class="blackbtn btn text-danger position-relative top- start-0 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <img className='bag' src={bag} width={30} height={30}></img>
            <span class="badge position-absolute top-0 start-100  translate-middle border-none p-1 rounded-circle">0
              <span class="visually-hidden">New alerts</span>
            </span>
          </button>
          <div class="offcanvas  offcanvas-end w-25 " tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              ...
            </div>
          </div>

        </div>
        <div>
          <p className='blackp1'>hurry,black friday is almost here!</p>
          <h1 className='blackh1'>time left until our <span className='blackspan'>biggest sale of the year begins</span></h1>
          <button className='blackbutton'><a href='#blackbutton'>set reminder</a></button>
        </div>
        <div className='text-light d-flex gap-3 mt-5 me-5 justify-content-center position-fixied'>
          <h1 className='border p-5 ' type='day' >{day}</h1>
          <h1 className='border p-5 ' type='hour' >{hour}</h1>
          <h1 className='border p-5' type='minutes' >{minutes}</h1>
          <h1 className='border p-5' type='seconds' >{seconds}</h1>
          {/* <button onClick={click}></button> */}
        </div>

      </div>
    </div >
  )
}
