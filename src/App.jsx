import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero.jsx'
import About from './Components/About/About.jsx'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'


const App = () => {

  // const [theme, setTheme] = useState("light");

  return (
    <div >

      {/* <button 
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="theme-toggle"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button> */}

      <Navbar/>
      <Hero/>
      <About/>
      <MyWork/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App