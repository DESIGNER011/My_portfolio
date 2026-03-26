import React from 'react'
import './About.css'
// import mypick from '../../assets/mypick.jpeg'
import myimage from '../../assets/myimage.jpg'

const About = () => {
  return (
    <div id="about" className='about'>
        <div className='about-title'>
            <h1>About me</h1>
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img className="w-70 h-85 object-cover object-top rounded-lg object-cover shadow-lg scale-x-[-1]" src={myimage} alt=""/>
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>I have built several projects using HTML, CSS, JavaScript, and React, focusing on responsive and modern UI design.</p>
                    
                </div>
                <div className='about-skills'>
                    <div className='about-skill'>
                        <p>HTML & CSS</p><hr style={{width:"80%"}}/>
                    </div>
                    <div className='about-skill'>
                        <p>React JS</p><hr style={{width:"65%"}}/>
                    </div>
                    <div className='about-skill'>
                        <p>JavaScript</p><hr style={{width:"60%"}}/>
                    </div>
                    <div className='about-skill'>
                        <p>Java</p><hr style={{width:"45%"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
           <div className='about-achievement'>
              <h1>Fresher</h1>
              <p>Frontend Developer</p>
              <hr />
            </div>
            <div className='about-achievement '>
              <h1>3+</h1>
              <p>Projects Completed</p>
              <hr />
            </div>
            {/* <div className='about-achievement'>
              <h1></h1>
              <p></p>
              <hr/>
            </div> */}
        </div>
        
    </div>
  )
}

export default About