import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import './Carousel.css';
const AutoplaySlider = withAutoplay(AwesomeSlider);

import img1 from '../assets/dfs.jpeg';
import img2 from '../assets/qwe.jpg';
import img3 from '../assets/ud.jpg';
import img4 from '../assets/wrt.jpg';
import { NavLink } from 'react-router-dom';

function Carousel(props) {
  return (
    <div className='container'>
      <div className='row my-6 gap-6 mt-5'>
        <div className='col-lg-3'>
          <div className='card shadow-sm p-4 h-100'>
              <NavLink className='text-secondary font-weight-bold py-1'>Technical Instrument</NavLink>
              <NavLink className='text-secondary font-weight-bold py-1'>Headphone</NavLink>
              <NavLink className='text-secondary font-weight-bold py-1'>Mobile</NavLink>
              <NavLink className='text-secondary font-weight-bold py-1'>Electronict</NavLink>
              <NavLink className='text-secondary font-weight-bold py-1'>Cpi</NavLink>
              <NavLink className='text-secondary font-weight-bold py-1'>Hardware</NavLink>
              <NavLink className='text-secondary font-weight-bold py-1'>Camera</NavLink>
              <NavLink className='text-secondary font-weight-bold py-1'>Printer</NavLink>
              <NavLink className='text-secondary font-weight-bold py-1'>Watch</NavLink>
          </div>
        </div>
        <div className='mt-6 mb-10 col-lg-9'>
          <AutoplaySlider play={true} cancelOnInteraction={false}  interval={6000}>
            <div data-src={img1} />
            <div data-src={img2} />
            <div data-src={img3} />
            <div data-src={img4} />
          </AutoplaySlider>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
