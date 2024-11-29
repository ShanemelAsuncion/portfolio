import React from 'react'
import './About.scss'
import pfp from '../../assets/images/me.jpg'
import insta from '../../assets/images/thumbnails/instagram.png';
import mail from '../../assets/images/thumbnails/mail.png';
import linkedin from '../../assets/images/thumbnails/linkedin.png';
import github from '../../assets/images/thumbnails/github.png';
import cpp from '../../assets/images/thumbnails/c-.png';

function About() {
  const skills = [
    { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/python/python-original.svg" },
    { name: "PyTorch", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/pytorch/pytorch-original.svg" },
    { name: "MySQL", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/mysql/mysql-original.svg" },
    { name: "Postgresql", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/postgresql/postgresql-original.svg" },
    { name: "C", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/c/c-original.svg" },
    { name: "C#", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/csharp/csharp-original.svg" },
    { name: "Django", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/django/django-plain.svg" },
    { name: "Figma", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/figma/figma-original.svg" },
    { name: "Firebase", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/firebase/firebase-original.svg" },
    { name: "Git", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/git/git-plain.svg" },
    { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/java/java-original.svg" },
    { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/javascript/javascript-original.svg" },
    { name: "HTML5", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/css3/css3-original.svg" },
    { name: "Julia", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/julia/julia-original.svg" },
    { name: "Linux", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/linux/linux-original.svg" },
    { name: "Nodejs", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/nodejs/nodejs-original.svg" },
    { name: "Pandas", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/pandas/pandas-original.svg" },
    { name: "Powershell", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/powershell/powershell-original.svg" },
    { name: "React/ReactNative", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/react/react-original.svg" },
    { name: "Sass", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/sass/sass-original.svg" },
    { name: "Ubuntu", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/ubuntu/ubuntu-original.svg" },
    { name: "Kotlin", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/kotlin/kotlin-original.svg" },
    { name: "AndroidStudio", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/androidstudio/androidstudio-original.svg" },
    { name: "C++", icon: cpp},
  ]

  const sortedSkills = [...skills].sort((a, b) => a.name.localeCompare(b.name));



  return (
    <div className='about'>
        <div className='about__header'>
          <h2> Shanemel Asuncion</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium est mi, vitae convallis orci accumsan sed. Vestibulum scelerisque diam diam, at viverra tellus fringilla eget. Quisque vel sagittis turpis. </p>
        </div>

        <div className='about__intro'>
          <img src={pfp} className='about__intro-pfp'/>
          <div className='about__intro-container'>
            <p className='about__subheader'>&lt;01&gt; About me</p>
            <p> Vestibulum ut consequat ligula. Cras vel eleifend nunc. In interdum at sapien ut iaculis. Ut ultrices fringilla elementum. Integer suscipit lorem nec eros posuere egestas.   
                Aliquam sodales ipsum eget erat molestie rutrum. Quisque in congue felis, nec elementum nibh. </p>
            <p>Proin ultricies viverra vulputate. Proin tincidunt urna nec rhoncus feugiat. Duis ac ligula a urna viverra viverra tempus et felis.</p>
            <p>Sed et leo gravida urna auctor pellentesque. Nulla tincidunt urna eu est mollis, eget malesuada diam fringilla. Quisque ac cursus arcu. 
              Etiam sit amet enim sit amet ex fringilla dapibus nec quis elit.</p>
          <div>
            <button>HIRE ME!</button>
          </div>
          <div className='about__intro-socials'>
            <a href="https://www.instagram.com/seyn.3" target="_blank" rel="noopener noreferrer">
              <img src={insta} className='about__intro-insta'/>
            </a>
            <a href="mailto:shanemelasuncion@gmail.com">
              <img src={mail} className='about__intro-mail'/>
            </a>
            <a href="https://www.linkedin.com/in/shanemel" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} className='about__intro-linkedin'/>
            </a>
            <a href="https://github.com/ShanemelAsuncion" target="_blank" rel="noopener noreferrer">
              <img src={github} className='about__intro-github'/>
            </a>
          </div>
        </div>
      </div>

      <div className='background'>
        <div className='background-edu'>
          <p className='background__subheader'>&lt;02&gt; Education</p>
          <div className='background-edu__item'>
            <h3> University of Alberta</h3>
            <p> BSc in Computing Science, Specialization</p>
            <p>&lt;Sep 2020 - Nov 2024&gt;</p>
          </div>

          <div  className='background-edu__item'>
            <h3> Brainstation</h3>
            <p> Software Engineering Bootcamp, Diploma</p>
            <p>&lt;Jul 2024 - Sep 2024&gt;</p>
          </div>

          <div  className='background-edu__item'>
            <h3> Ai4Good Lab</h3>
            <p> AI Bootcamp, Fellowship</p>
            <p>&lt;May 2022 - Jun 2022&gt;</p>
          </div>
        </div>

        <div className='about__background-tech'>
          <p className='background__subheader'>&lt;03&gt; Technical Skills</p>
          <div className="background__skills-section">
            {sortedSkills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <img src={skill.icon} alt={`${skill.name} icon`} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className='about__background-exp'>
          <p className='background__subheader'>&lt;03&gt; Experiences and Volunteering</p>
        </div>
      </div>

    </div>
  )
}

export default About