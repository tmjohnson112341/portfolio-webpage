import React from 'react'
import 'aos/dist/aos.css';


const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/e5774743-7a18-4ced-84e0-f06c5d2fe611" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p data-aos="fade-up" data-aos-duration="1000" className='text-4xl font-bold inline border-b-4 border-pink-600  text-gray-300'>Contact</p>
                <p data-aos="fade-up" data-aos-duration="1000" className='py-4 bg'><span className='bg-[rgba(0,0,0,0.5)]'>Submit the form below or email me at tmjohnson112341@gmail.com</span></p>
            </div>
            <input data-aos="fade-up" data-aos-duration="1000" className='p-2 bg-[#ccd6f6]' type='text' placeholder='Name' name='name'/>
            <input data-aos="fade-up" data-aos-duration="1000" className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email'/>
            <textarea data-aos="fade-up" data-aos-duration="1000" className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message'/>
            <button data-aos="fade-up" data-aos-duration="1000" className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Lets GO</button>
        </form>

    </div>
  )
}

export default Contact