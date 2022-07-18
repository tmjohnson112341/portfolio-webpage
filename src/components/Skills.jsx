import React from 'react'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import GitHub from '../assets/github.png'
import CSS from '../assets/css.png'
import HTML from '../assets/html.png'
import 'aos/dist/aos.css';

const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p data-aos="fade-up" data-aos-duration="1000" className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            </div>
            <div>
                <p data-aos="fade-up" data-aos-duration="1000" className='py-3'><span className='bg-[rgba(0,0,0,0.5)]'>These are the technologies I've worked with:</span></p>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 '>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 box'>
                    <img className="w-20 mx-auto" src={HTML} alt="html icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 box'>
                    <img className="w-20 mx-auto" src={CSS} alt="css icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 box'>
                    <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 box'>
                    <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 box'>
                    <img className="w-20 mx-auto" src={GitHub} alt="github icon" />
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 box'>
                    <img className="w-20 mx-auto" src={Node} alt="node icon" />
                    <p className='my-4'>Node</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills