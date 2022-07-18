import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo from '../assets/logo.png'
import {Link} from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick=()=> setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center pt-0 px-4 bg-black bg-opacity-75 text-gray-300 z-index:999'>
        <div>
            <img src={logo} alt='logo'style={{width: '60px'}}/>
        </div>

        {/* Menu */}
            <ul className='hidden md:flex position:absolute'>
                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li><Link to="work" smooth={true} duration={500}>Work</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
        
        {/* Hamburger */}
        {/* <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div> */}

        {/* Mobile menu */}
        {/* <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-black' }>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul> */}

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[167px] h-[60px] flex justify-between items-center ml-[-107px] hover:ml-[-10px] duration-300 glass'>
                    <a className='flex justify-between items-center w-full text-gray-300 text-lg'
                    href='https://www.linkedin.com/in/tmjsoftwareengineer/' rel="noreferrer" target="_blank" >
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 glass'>
                    <a className='flex justify-between items-center w-full text-gray-300 text-lg'
                    href='https://github.com/tmjohnson112341' rel="noreferrer" target="_blank" >
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 glass'>
                    <a className='flex justify-between items-center w-full text-gray-300 text-lg'
                    href='mailto: tmjohnson112341@gmail.com'>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 glass'>
                    <a className='flex justify-between items-center w-full text-gray-300 text-lg'
                    href='https://docs.google.com/document/d/1zx3KOOYdynO8cN8X2KpbqKPg4vJxkcyq/edit?usp=sharing&ouid=114035147453790862382&rtpof=true&sd=true' rel="noreferrer" target="_blank" >
                        Resume<BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Navbar