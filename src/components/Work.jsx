import React from 'react';
import Restaurant from '../assets/RestaurantReservation.png'
import ToDo from '../assets/toDoListBase.png'
import Recipe from '../assets/recipeTrackerMain.png'
import BnB from '../assets/Thinkfulbnb-desktop.png'
import FlashCard from '../assets/FlascardAppMain.png'
import Cipher from '../assets/DecoderRingCaesarEncode.png'
import 'aos/dist/aos.css';
import Card from './Card';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p data-aos="fade-up" data-aos-duration="1000" className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 bg'>
            Work
          </p>
          <p data-aos="fade-up" data-aos-duration="1000" className='py-6'><span className='bg-[rgba(0,0,0,0.5)]'>Check out some of my recent work:</span></p>
        </div>
        
        {/* Container */}
        <div data-aos="fade-up" data-aos-duration="1000" className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>

            {/* Grid Item */}
            <Card image={Restaurant} href1='https://res-rev-client.herokuapp.com/dashboard' name={'Restaurant Reservation'}/>
            <Card image={ToDo} href1='https://github.com/tmjohnson112341/ToDo-List' name={'To Do List'}/>
            <Card image={Recipe} href1='https://github.com/tmjohnson112341/Recipe-Tracking-App' name={'Recipe Tracker'}/>
            <Card image={BnB} href1='https://github.com/tmjohnson112341/Thinkfulbnb' name={'Thinkful BnB'}/>
            <Card image={FlashCard} href1='https://github.com/tmjohnson112341/FlashCard-App-React' name={'Flash Cards'}/>
            <Card image={Cipher} href1='https://github.com/tmjohnson112341/Decoder-Ring' name={'Cipher'}/>
        </div>
      </div>
    </div>
  );
};

export default Work;