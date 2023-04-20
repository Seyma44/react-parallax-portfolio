import React from 'react'
import './style.css'
import { ScrollContainer,
         ScrollPage, 
         batch,
         Fade,
         FadeIn,
         MoveIn,
         MoveOut,
         Sticky,
         StickyIn,
         ZoomIn,
         Animator
        } 
    from 'react-scroll-motion'
import HeaderImage from '../../img/seyma.jpeg'
import projectOne from '../../img/project1.jpg'
import projectTwo from '../../img/project2.jpg'
import projectThree from '../../img/project3.jpg'

import {FiMail} from 'react-icons/fi'
import {SiInstagram} from 'react-icons/si'
import {FiGithub} from 'react-icons/fi'
import {TiSocialLinkedin} from 'react-icons/ti'

const Home = () => {
 
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn())

    const work = [
        {
            name:"Project 1",
            link:'#',
            imageSrc: projectOne
        },
        {
            name:"Project 2",
            link:'#',
            imageSrc: projectTwo
        },
        {
            name:"Project 3",
            link:'#',
            imageSrc: projectThree
        },
    ]

    const handleContactClick = (url) => {
        const win = window.open(url, '_blank')
        win.focus()
    }

  return (
    <ScrollContainer>
         <ScrollPage page={0}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                <div className='image-container'>
                    <img src={HeaderImage} alt='header image'/>
                    <div className='black-background'></div>
                </div>
            </Animator>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 0))}>
                <div className='name'>
                    <h2 className='first'>
                        Seyma
                    </h2>      
                </div>
            </Animator>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(1650, 0))}>
                <div className='name'>
                    <h2 className='last'>
                        Codes
                    </h2>      
                </div>
            </Animator>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(-100, 100))}>
                <div className='position'>
                    <h2 className='last'>
                        Software Developer
                    </h2>      
                </div>
            </Animator>
        </ScrollPage>

        {/* Section 2*/}

        <ScrollPage page={1}>
            <Animator animation={ZoomInScrollOut}>
                <div className='section-title'>
                   Portfolio  
                </div>
            </Animator>
        </ScrollPage>

        <ScrollPage page={2}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <div className='portfolio-content'>
                {work && work.map((workItem, index) => {
                return (
                <a href={workItem.link} target="_blank" key={workItem.name}>
                    <div className='portfolio-card'>
                    <div className='project-image'>
                        <img src={workItem.imageSrc} alt={workItem.name}/>
                    </div>
                    <div className='portfolio-title'>
                        <h3>
                        {workItem.name}
                        </h3>
                    </div>
                    <div className='count'>
                        {index}
                    </div>
                </div>
                </a>
             );
        })}
    </div>

        </Animator>
        </ScrollPage>

        {/* section 3*/}
        <ScrollPage page={3}>
            <Animator animation={ZoomInScrollOut}>
                <div className='section-title about-me'>
                   About Me  
                </div>
            </Animator>
        </ScrollPage>

        <ScrollPage page={4}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(-1000, -400))}>
                <div className='background-image-container'>
                   <img src={HeaderImage} alt='my picture'/> 
                   <div className='black-background'></div>
                </div>
            </Animator>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 500))}>
                <div className='details'>
                   <h2 className='gretting'>Hello</h2>
                   <br/>
                   <p className='bio'>
                    I'm Seyma, a software developer and computer engineer with 
                    over 9 years of experience in the industry. I specialize in developing 
                    scalable, high-performance applications using cutting-edge technologies 
                    and frameworks.
                   </p>
                   <br/>
                   <p className='bio'>
                    I am passionate about software development and always strive to deliver
                    high-quality solutions that meet the needs of my clients. If you're interested 
                    in working with me, please don't hesitate to get in touch.
                   </p>
                </div>
            </Animator>
        </ScrollPage>
          
        {/* section 3*/}
        <ScrollPage page={5}>
            <Animator animation={ZoomInScrollOut}>
                <div className='section-title contact'>
                   Contact 
                </div>
            </Animator>
        </ScrollPage>

        <ScrollPage page={6}>
            <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                height:'100%'
            }}>
                <span style={{fontSize:'40px'}}>

                    <Animator animation={MoveIn(-1000, 0)}>
                        <div style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        onClick={() => handleContactClick('https://google.com')}
                        >
                            <SiInstagram color='white' className='contact-list-icon' /> 
                                <p>seymacodes</p>
                           
                        </div>
                    </Animator>

                    <Animator animation={MoveIn(1000, 0)}>
                        <div style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        onClick={() => handleContactClick('https://google.com')}
                        >
                            <FiMail color='white' className='contact-list-icon'/> 
                                <p>seymacodes</p>
                            
                        </div>
                    </Animator>

                    <Animator animation={MoveOut(1000, 0)}>
                        <div style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        onClick={() => handleContactClick('https://google.com')}
                        >
                            <FiGithub color='white' className='contact-list-icon' /> 
                                <p>seymacodes</p>
                            
                        </div>
                    </Animator>

                    <Animator animation={MoveIn(-1000, 0)}>
                        <div style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        onClick={() => handleContactClick('https://google.com')}
                        >
                             <TiSocialLinkedin color='white' className='contact-list-icon'/> 
                                <p>seymacodes</p>
                          
                        </div>
                    </Animator>
                </span>
            </div>
        </ScrollPage>

        {/* section 5 */}
    
        <ScrollPage page={7}>
            <Animator animation={batch(Fade(), Sticky())}>
                <span className='footer'>
                    @CODE
                </span>
                <br/>
                <span className='footer'>
                    ALL LIFE
                </span>
            </Animator>
        </ScrollPage>
   </ScrollContainer>
  )
}

export default Home