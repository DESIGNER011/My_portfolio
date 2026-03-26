// import React from 'react'
// import './Footer.css'
// import footer_logo from '../../assets/footer_logo.svg'
// import user_icon from '../../assets/user_icon.svg'

// const Footer = () => {
//   return (
//     <div className='footer'>
//         <div className="footer-top">
//             <div className="footer-top-left">
//                 <img src={footer_logo} alt=""/>
//                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis modi voluptatum molestias nobis totam expedita itaque praesentium deleniti ut debitis fuga quas illo consequuntur hic sunt quasi, velit maxime. Eligendi.</p>
//             </div>
//             <div className="footer-top-right">
//                 <div className="footer-email-input">
//                     <img src={user_icon} alt=''/>
//                     <input type="email" placeholder='Enter your email'/>
//                 </div>
//                 <div className="footer-subscribe">Subcribe</div>
//             </div>
//         </div>
//         <hr/>
//         <div className="footer-bottom">
//             <p className='footer-bottom-left'>© 2026 Amudha Priya MP. All rights reserved. </p>
//             <div className="footer-bottom-right">
//                 <p>Term of Services</p>
//                 <p>Privacy Policy</p>
//                 <p>Connect with me</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      
      <p className="footer-text">
        © 2026 Amudha Priya. All rights reserved.
      </p>

      <div className="footer-socials">
        <a href="https://github.com/DESIGNER011" target="_blank">
          <FaGithub />
        </a>

        <a href="https://linkedin.com/in/amudhapriyamp/" target="_blank">
          <FaLinkedin />
        </a>
      </div>

    </div>
  );
};

export default Footer;