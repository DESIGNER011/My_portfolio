import React from 'react'
import { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "dd272db8-c6a0-4c42-bd40-5f9fbb5292bb");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        // setResult(data.success ? "Success!" : "Error");
        if (data.success) {
            alert("Message sent successfully!");
            event.target.reset();
          } else {
            alert("Something went wrong!");
          }
    };

    return (
        <div id="contact" className='contact'>
            <div className='contact-title'>
                <h1 className='font-bold text-2xl'>Contact Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className='contact-section'>
                <div className='contact-left'>
                    <h1 className='font-bold text-2xl'>Let’s Connect</h1>
                    <p>I’m a passionate Frontend Developer seeking opportunities to grow and contribute.  
Feel free to reach out for any opportunities or collaborations.</p><br></br>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>amudhapriyamp@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>9487542736</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>Coimbatore, TamilNadu</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} action="" className='contact-right'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="text" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message here..</label>
                    <textarea name='message' rows='8' placeholder='Enter your message' />
                    <button type='submit' className="contact-submit">Send Message</button>

                </form>
            </div>
        </div>
    )
}

export default Contact