import React from 'react'
import './Home.css'
import { Link, Outlet } from 'react-router-dom'
import piz from './card1-059a168fc9.png'
import pizz from './card2-3cb1e97b57.png'
import song from './card3-video-11d7cc676a.mp4'
import pizzaa from './card4-e8d200388e.png'
import david from './testimonial-david-w-uk-646e5f3e9d.png.webp'
import son from './card5-video-7dbf81095a.mp4'
import judi from './testimonial-judy-m-us-43a800e086.png.webp'


export default function Home() {
  return (
    <div className="navbar-body ">
      <div className='firstone '>
        <nav className='navbar d-flex justify-content-between'>
          <h2 className='food'>oracle<span>Gloriafood</span></h2>
          <ul className='list-group list-group-horizontal gap-3 '>
            <li><Link to='/Home/Wbuilder'>website builder</Link></li>
            <li><Link to=''>website template</Link></li>
            <li><a href='#'>food ordering</a></li>
            <li><a href='#'>pricing</a></li>
            <li><Link to='/Home/login'>log in</Link></li>
            <li><a href='#'>sign up</a></li>
          </ul>

        </nav>
        <h1 className='res'>build your own <br></br> restaurant website</h1>
        <p className='paras'>Gain online exposure and new clients with the best restaurant website builder with online ordering</p>
        <input type='text' className='sen' placeholder='Restaurant name....'></input>
        <button className='btt'>Get started</button>
      </div>
      <div className='menu'>
        <div>
          <h3 className='homeh1'>Online ordering website builder featuring a restaurant web design that sells</h3>
          <p className='homepara1'>Jumpstart your online restaurant business with this complete restaurant website builder.<br></br>1.Beautifully designed one page website template, that’s also Search Engine Optimized to help potential customers find you online<br></br>2.Responsive & well-crafted online menu with stunning images, focused on increasing conversion<br></br>3.All the important contact information laid out for easy reach</p>
        </div>
        <div className='pizza'>
          <img src={piz}></img>
        </div>
      </div>

      <div className='menu1'>
        <div className='pizza1'>
          <img src={pizz}></img>
        </div>
        <div>
          <h3 className='homeh2'>free online-ordering build-in</h3>
          <p className='homepara2'>Your customers will love this super-friendly restaurant website builder with online ordering.<br></br>It comes built-in and most importantly, it’s free of charge. Unlike food portals or other online ordering solutions, there are no commissions or fees for order processing.</p>
        </div>
      </div>
      <div className='menu2'>
        <h3 className='homeh3'>The easiest-to-use restaurant website builder</h3>
        <p className='homepara3'>To get your own website, you just need to fill in your restaurant profile and online menu. It’s all visual, no technical<br></br><span className='hspan'>skills required. Then you can automatically generate your website within seconds.</span></p>
        <p className='homepara4'>Check out the video and see for yourself!</p>
        <div className='video'>
          <video src={song} className='object-fit-sm-contain border rounded m-5  ' controls autoPlay></video>
        </div>
      </div>
      <div className='menu3 d-flex'>
        <img src={pizzaa} className='rounded float-start' height={500} width={550}></img>
        <div>
          <h3 className='homeh4'>Restaurant marketing tools to increase sales</h3>
          <p className='homepara5'>Once your restaurant website is live, start using our multiple marketing modules to promote your business & generate your first online sales.<br></br>Thanks to our precise client segmentation, you can increase the number of new & returning customers, as well as the average check order.<br></br>With GloriaFood, it’s easy to set up your online restaurant business from scratch</p>
        </div>
      </div>
      <h2 className='homeh5'>Restaurants love our 24/7 customer support</h2>
      <div className='menu4 row '>
        <div className='col-8   '>
          <div className='hom'>
            <div>
              <img src={david}></img>
            </div>
            <div>
              <h3 className='homeh6 '>david w.</h3>
              <p className='homepara6'>restaurant owner | garden city,wales<br></br><span className='spa'>amantola</span> </p>
              <p className='homepara7'>"The system is great. We find the support very good and in general, it's easy to use. It has had a positive impact on the running of our business, and sales, supported by additional advertising, have grown!"</p>
            </div>
          </div>
          <div className='hom '>
            <div>
              <img src={judi}></img>
            </div>
            <div>
              <h3 className='homeh6 '>judy m .</h3>
              <p className='homepara6'>restaurant owner | raleigh,nc,united states<br></br><span className='spa'>baja burrito</span> </p>
              <p className='homepara7'>"This has been a very easy and convenient application to use. I am pleased I found it by doing research on my options. Any time I have a question you guys respond so quickly and it's always helpful. I love Gloria Food!"</p>
            </div>
          </div>
        </div>
        <div className='video1 col-4'>
          <video src={son} controls autoPlay></video>
        </div>
      </div>
      <div className='menu5'>
        <div>
        <h2 className='homeh7'>create your own restaurant website</h2>
        </div>
        <div>
          <button className='hbtn'>get started</button>
        </div>
      </div>
      {/* <div id='ani'></div> */}

      <div>
        {/* <Outlet></Outlet> */}
      </div>
    </div>

  )
}