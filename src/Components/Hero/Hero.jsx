import React from 'react'
import './Hero.css'
// import myimage from '../../assets/myimage.jpg'
import mypick from '../../assets/mypick.jpeg'


const Hero = () => {
  return (
    <div id='home' className='hero pt-20'>
        <img  className='image rounded-full w-64 h-64 object-cover object-top  border-4 border-purple-950 mt-10 shadow-[0_0_15px_rgba(244,114,182,0.4),0_0_25px_rgba(168,85,247,0.4),0_0_35px_rgba(96,165,250,0.3)]'  src={mypick} alt=""/>
        <h1 className='text-3xl font-bold'><span>I'm Amudha Priya,</span> frontend developer</h1>
        <p>I am a frontend developer passionate about creating clean and responsive web applications.</p>
        <div className='hero-action'>
            <div className='hero-connect'><a className='anchor-link' offset={50} href='#contact'>Connect with me</a></div>
            {/* <div className='hero-resume'>My resume</div> */}
            <a href="/Amudhapriya_resume.pdf" download className='hero-resume'>
  My Resume
</a>
        </div>
    </div>
  )
}

export default Hero
