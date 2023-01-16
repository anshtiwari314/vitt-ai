import React from 'react'
import img1 from '../assets/juicy-woman-and-a-man-drink-coffee.png'
//import './usecase.css'
import youtubeVideo from 'youtube-video'
import { useEffect } from 'react'
//import armaan from '../assets/armaan_tu.mp4'

export default function UseCase2() {
    // useEffect(()=>{
    //     youtubeVideo('MVpAAJzPEds', {
    //         elementId: 'vid', // by default: youtube-video
    //         // width: 500,
    //         // height: 300,
    //         width:'100rem',
    //         height:'50rem',
    //         autoplay: false,
    //         controls: true,
    //       })
    // },[])
    
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
        <div className='video'>
           <video id="vid" autoPlay={true} muted={true} controls src="https://joy.videvo.net/videvo_files/video/free/2012-08/large_watermarked/hd0029_preview.mp4" type="video/mp4" >
                {/* <source  >
                    
                </source> */}
            </video>
        </div>
    </div>
  )
}
