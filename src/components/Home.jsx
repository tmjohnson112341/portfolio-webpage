import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import 'aos/dist/aos.css';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen '>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p data-aos="fade-up" data-aos-duration="1000" className='text-2xl'><span className='bg-[rgba(0,0,0,0.5)]'>Hi! My Name is</span></p>
            <h1 data-aos="fade-up" data-aos-duration="1000" className='text-4xl sm:text-7xl'>Tina Johnson</h1>
            <h2 data-aos="fade-up" data-aos-duration="1000" className='text-4xl sm:text-7xl font-bold'>full-stack engineer.</h2>
            <p data-aos="fade-up" data-aos-duration="1000" className='py-4 max-w-700px text-2xl'><span className='bg-[rgba(0,0,0,0.5)]'>Once a pastry chef now a full-stack software-engineer</span></p>
            <div>
              <Link to="work" smooth={true} duration={500}>
                <button data-aos="fade-up" data-aos-duration="1000" className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                </span>
                </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home