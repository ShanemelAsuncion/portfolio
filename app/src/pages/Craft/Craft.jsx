import React, { useEffect, useState } from 'react';
import './Craft.scss'
import Card from '../../components/Card/Card';
import logo from "../../assets/logos/logo.png"

function Craft() {

  const featured = [
    {
      name: "bodyQ",
      description: "Where burpees meet browser tabs!",
      tags: ["Web Development", "OpenCV", "Connectable", "Case Study"],
      id: 1
    },
    {
      name: "uniOne",
      description: "Tinder for Students",
      tags: ["Mobile Development", "Google Cloud", "Connectable"],
      id: 2
    },
    {
      name: "Social Distribution",
      description: "Twitter on Steroids",
      tags: ["Web Development", "Connectable"],
      id: 3
    },
    {
      name: "Habitize",
      description: "Track it before you slack it!",
      tags: ["Mobile Development", "Connectable", "Google Cloud"],
      id: 4
    },
  ];

  // Animation
  const [isVisible, setIsVisible] = useState(false);
  const [subtitle, setSubtitle] = useState('');
  const firstName = "SHANEMEL";
  const lastName = "ASUNCION";
  const subtitleText = "Full Stack Developer";

  useEffect(() => {
    const startAnimation = () => {
      setIsVisible(true); // Trigger animation
      setTimeout(() => {
        setIsVisible(false); // Reset visibility after animation duration
      }, 7000); // Match this duration with your animation duration
    };

    startAnimation(); // Start the animation immediately

    const interval = setInterval(() => {
      startAnimation(); // Repeat the animation every 5 seconds
    }, 8000); // 5000 milliseconds = 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

 
  useEffect(() => {
    let index = 0;
    let currentText = '';
    let timerId;
  
    const typeCharacter = () => {
      if (index < subtitleText.length) {
        currentText += subtitleText[index];
        setSubtitle(currentText);
        index++;
        timerId = setTimeout(typeCharacter, 150);
      } else {
        timerId = setTimeout(() => {
          setSubtitle('');
          index = 0;
          currentText = '';
          typeCharacter();
        }, 3000);
      }
    };
  
    typeCharacter();
  
    // Cleanup: clear any pending timeout when the component unmounts
    return () => clearTimeout(timerId);
  }, [subtitleText]);
  
  
  return (
    <div className='container'>
      <div className='hero-section'>
        <div className='hero-section__main'>
        <div className='hero-section__title'>
          <h1>
            {firstName.split('').map((letter, index) => (
              <span key={index} className={`letter ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 100}ms` }}>
                {letter}
              </span>
            ))}
            </h1>
            
            <h1>
            {lastName.split('').map((letter, index) => (
              <span key={index} className={`letter ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 100}ms` }}>
                {letter}
              </span>
            ))}
            </h1>
          </div>
          <div className='hero-section__subtitle'>
            <h3>{subtitle}</h3>
            <h3>Based in Edmonton</h3>
            <p>PORTFOLIO_2024</p>
          </div>
        </div>

        <div className='hero-section__add'>
          <div className='hero-section__scroll'>
            <p>&lt; SCROLL TO EXPLORE &gt;</p>
          </div>
          <div className="hero-section__socials">
            <a href="https://www.instagram.com/seyn.3" target="_blank" rel="noopener noreferrer">
              <p>INSTAGRAM ↗</p>
            </a>
            <a href="https://www.linkedin.com/in/shanemel" target="_blank" rel="noopener noreferrer">
              <p>LINKEDIN ↗</p>
            </a>
            <a href="mailto:shanemelasuncion@gmail.com">
              <p>MAIL ↗</p>
            </a>
            <a href="https://github.com/ShanemelAsuncion" target="_blank" rel="noopener noreferrer">
              <p>GITHUB ↗</p>
            </a>
          </div>

        </div>
      </div>


      <div className='craft-section'>
        <div className='craft-section__title'>
          <h3 className='craft-section__title-text'>Featured</h3>
        </div>

        <div className="craft-section__projects">
          {featured.map((proj, index) => (
            <Card key={proj.id} proj={proj} ind={index}/>
          ))}
        </div>
      </div>

      <div className='footer-section'>
        <div className='footer-section__title'>
          <h1>GET IN TOUCH!</h1>
        </div>
        <div className='footer-section__contents'>
          <div className='footer-section__socials'>
            <a href="https://www.instagram.com/seyn.3" target="_blank" rel="noopener noreferrer">
              <p>INSTAGRAM ↗</p>
            </a>
            <a href="https://www.linkedin.com/in/shanemel" target="_blank" rel="noopener noreferrer">
              <p>LINKEDIN ↗</p>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <p>RESUME ↗</p>
            </a>
            <a href="mailto:shanemelasuncion@gmail.com">
              <p>MAIL ↗</p>
            </a>
            <a href="https://github.com/ShanemelAsuncion" target="_blank" rel="noopener noreferrer">
              <p>GITHUB ↗</p>
            </a>
          </div>
        </div>
        
        <div className='footer-section__copyright'>
          <p>DESIGNED AND DEVELOPED BY SHANEMEL_ASUNCION</p>
          <p>MADE WITH LOVE AND ESPRESSO SHOTS 💙☕</p>
          <p className='footer-section__copyright-text'>© 2024 ALL RIGHTS RESERVED</p>
        </div>

        <div className='footer-section__logo'>
          <img src={logo} className='footer-section__logo'/>
        </div>
      </div>

    </div>
  )
}

export default Craft