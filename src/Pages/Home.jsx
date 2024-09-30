import React from 'react'
import manoj from '../assets/manoj6.jpg'
import './Home.css'
import {FaInstagram } from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import Navbar from '../Navbar/Navbar'
import {FaFacebook,FaCode} from 'react-icons/fa'
import img1 from '../style/premium_photo-1663023612721-e588768ef403.jpeg'
import img2 from '../style/premium_photo-1678565869434-c81195861939.jpeg'
import img3 from '../style/premium_photo-1682145730713-34bba6d3d14a.jpeg'
const Home = () => {
  return (
    <>
    
        <section className='Home' id='home'>
    <div className='home-text'>
        <div className="text">
            <h1 className='heading'>HI i'm Manoj.G</h1>
            <span className='span'><h1>I'M <span className='typing'>MERN STACK DEVELOPER</span></h1></span>
            <h3>
            Enthusiastic Full Stack Developer with a strong foundatin in the MERN STACK,INCLUDING Mongodb,ExpressJs, ReactJs,And Nodejs is Recently grduated with hands on exprericene in develpoing and deploying and web application .Enger to apply skills in both front end and backand development to contribute to innovation projects and grow without a dynamic tearn.
            </h3>
            <div className="icons">
                <a href="##"><li><FaInstagram/></li></a>
                <a href="##"><li><FaWhatsapp/></li></a>
                <a href="##"><li><FaFacebook/></li></a>
            </div>
        </div>
        <div className="img">
         <img src={manoj} width='300px' height='300px' />
        </div>        
    </div>
    </section>
    <section  id='About'>
        <div className="about-compentent">
            <div className="about-img">
                <img src={manoj} alt="" width='350px' height='350px' />
            </div>
            <div className="about-text">
                <h1>ABOUT AS</h1>
                <h3>Enthusiastic Full Stack Developer with a strong foundatin in the MERN STACK,INCLUDING Mongodb,ExpressJs, ReactJs,And Nodejs is Recently grduated with hands on exprericene in develpoing and deploying and web application .Enger to apply skills in both front end and backand development to contribute to innovation projects and grow without a dynamic tearn.</h3>
            </div>
        </div>
    </section>
    <section id='Skills'>
        <div className="skills">
            <div className="skils-heading">
                <h1>My Skils</h1>
            </div>
            <div className="skils-body">
            <div className="skils-content">
                <span><FaCode/></span>
                <h1>Mern Stact Developer</h1>
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque possimus tenetur quas vel autem corrupti atque dolorem eos nemo,</h3>
                <button>Read more</button>
            </div>
            <div className="skils-content">
                <span><FaCode/></span>
                <h1>Front-end development</h1>
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque possimus tenetur quas vel autem corrupti atque dolorem eos nemo,</h3>
                <button>Read more</button>
            </div>
            <div className="skils-content">
                <span><FaCode/></span>
                <h1>Back-end development</h1>
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque possimus tenetur quas vel autem corrupti atque dolorem eos nemo, </h3>
                <button>Read more</button>
            </div>
            <div className="skils-content">
                <span><FaCode/></span>
                <h1>Mysql</h1>
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque possimus tenetur quas vel autem corrupti atque dolorem eos nemo, </h3>
                <button>Read more</button>
            </div>
            </div>
        </div>
    </section>
    {/* <section id='Project'>
        <div className="Project">
            <div className="project-heading">
                <h1>Project</h1>
            </div>
            <div className="project-content">
                <div className="project-body">
                    <img src={img1} alt="" width='250px' height='200px'/>
                    <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum odit architecto id? Porro dicta praesentium </h4>
                </div>
                <div className="project-body">
                    <img src={img2} alt="" width='250px' height='200px'/>
                    <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum odit architecto id? Porro dicta praesentium </h4>
                </div>
                <div className="project-body">
                    <img src={img3} width='250px' height='200px' />
                    <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum odit architecto id? Porro dicta praesentium </h4>
                </div>
            </div>
        </div>
    </section> */}
    <section id='Contact'>
        <div className="contact">
        <div className="contact-heading">
            <h1>Contact me</h1>
        </div>
        <div className="input-feild">
        <div className="input-box">
            <input type="text" placeholder='First Name' required/>
            <input type="email" placeholder='abc@gmail.com' required/>
        </div>
        <div className="input-box">
            <input type="text" placeholder='Last Name' required/>
            <input type="Number" placeholder='Number' required/>
        </div>
        <textarea name="" id="" cols='30' rows='10'placeholder='Enter the message'></textarea>
        <div className="submit">
        <input type="submit"/>
        </div>
        </div>
        </div>
    </section>
    </>
    
  )
}

export default Home