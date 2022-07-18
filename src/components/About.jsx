import React from 'react'
import 'aos/dist/aos.css';

const About = () => {
  return (
    <div  name='about' className='w-full h-screen  text-gray-300 '>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p data-aos="fade-up" data-aos-duration="1000" className='text-4xl font-bold inline border-b-4 border-pink-600 bg'>
                        About
                        </p>
                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div data-aos="fade-up" data-aos-duration="1000" className='sm:text-right text-4xl '>
                        <p><span className='bg-[rgba(0,0,0,0.5)]'>Hi I'm Tina, nice to meet you, please take a look around...</span></p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                       <p><span className='bg-[rgba(0,0,0,0.5)]'> 
                       I am a Software Engineer who has just completed the Thinkful software engineering boot camp while also working 
                       towards my bachelor of Computer Science at the University of the People. Being a pastry chef who specializes in 
                       large custom event cakes for the last 10 years, I have a strong background in design and project management. I am 
                       currently working on combining these old skills with my new skills as a software engineer using HTML, CSS, and JavaScript. 
                       I am working towards being able to use my strong artistic background to build dynamic and responsive web applications with 
                       clean and beautiful user interface designs.</span></p> 
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About