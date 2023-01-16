import {useState} from 'react'
//import "./Carousel.css"
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import UseCase1 from '../components/UseCase1';
import UseCase2 from '../components/UseCase2';

export default function MyCarousel(){
    const [currentSlide,setCurrentSlide] = useState(0)
    const [arrOfComponents,setArrOfComponents] = useState([UseCase2,UseCase1,UseCase2,UseCase1])
    const components = [
        UseCase2,UseCase1,UseCase2,UseCase1
    ]

    const prev =()=>{
        console.log(currentSlide)
        setCurrentSlide( currentSlide===0 ? components.length-1:currentSlide-1 )
        
    }
    const next =()=>{

        setCurrentSlide( currentSlide===components.length-1 ? 0 : currentSlide+1)
    }
    return <div className='carousel'>
                <div 
                    className='carousel-inner'
                 
                >
                    <div 
                        className="carousel-item" 
                        style={{transform:`translateX(${-currentSlide*80}vw)`}}
                    >
                        {components.map((Component,index)=>{
                            return <Component key={index}/>
                                    
                        })}
                    </div>
                </div>
                <CarouselControls next={next} prev={prev}/>
            </div>
}

export function CarouselItem({slide}){
    return <div className="carousel-item">
                <img src={slide} />
            </div>
}

export function CarouselControls({next,prev}){
    return <div>
        <button className="carousel-control left" onClick={()=>prev()}>
        <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button className="carousel-control right" onClick={()=>next()}>
        <i class="fa-solid fa-chevron-right"></i>
        </button>
    </div>
}