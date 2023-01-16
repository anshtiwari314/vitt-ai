import React from 'react'
import img1 from '../assets/juicy-woman-and-a-man-drink-coffee.png'
//import './usecase.css'
import img2 from '../assets/f1.jpg'

export default function UseCase1() {
  return (
    <div className='useCase'>
        <div className='text'>
            <h3>Vitt is here for all your needs</h3>
            <p>By installing this application on your
                phone, you will benefit from 
                excellent financial services
            </p>
            <div className='button-wrapper'>
                <button>
                    <span>Get Started</span>
                    <i className="fa-solid fa-circle-right"></i>
                </button>
                <button>
                    <i className="fa-solid fa-circle-down"></i>
                    <span>Know More</span>
                   
                </button>
            </div>
        </div>
        <div className='image'>
            <img src={img2}  />
        </div>
    </div>
  )
}
