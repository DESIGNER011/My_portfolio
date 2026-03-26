import React from 'react'
import './MyWork.css'
import Myworkdata from '../../assets/Myworkdata'
import arrow_icon from '../../assets/arrow_icon.svg'


const MyWork = () => { 
  return (
    <div id="work" className='mywork'>
      <div className='mywork-title'>
        <h1>Projects</h1>
        {/* <img src="" alt="" /> */}
      </div>
      <div className="mywork-container">
        {Myworkdata.map((work, index) => {
          // return <img key={index} src={work.w_img} alt="" />;
          return (
            <div key={index} className="project-card">
              <img src={work.w_img} alt="" />
               <b/>
              <div className="project-links">
                <a href={work.github} target="_blank">GitHub</a>
                <a href={work.live} target="_blank">Live</a>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className='mywork-showmore'>
        <p>Show More</p>
        <img src={arrow_icon} alt="" />

      </div> */}
    </div>
  )
}

export default MyWork