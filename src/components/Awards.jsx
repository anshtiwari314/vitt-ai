import React from 'react'
import {Blog} from './Blog'
import bg from '../assets/awards-bg.png'
import journey2 from '../assets/journey2.jpeg';
import journey3 from '../assets/journey3.jpeg';
import journey4 from '../assets/journey4.jpeg';
import journey5 from '../assets/journey5.jpeg';
import journey6 from '../assets/journey6.jpeg';
import journey7 from '../assets/journey7.jpeg';
export default function Awards() {
    let myAwards = [
        {
            image:journey2,
            label:'Gitex 2022',
            desc:'a global technology summit at Dubai, UAE'
        },
        {
            image:journey3,
            label:'Fidnovate 2022',
            desc:'a startup event organised by Fidelity Investments'
        },
        {
            image:journey4,
            label:'Bizlabs 2019',
            desc:'a startup event organized by Aditya Birla Capital'
        },
	{
            image:journey5,
            label:'VOIS 2024',
            desc:'a startup event organized by Vodafone Global'
        },
        {
            image:journey6,
            label:'Hackinsure 2023',
            desc:'a startup hackathon organized by HDFC Life'
        },
        {
            image:journey7,
            label:'AI Cohort 2024',
            desc:'part of India AI Cohort created by Nasscom'
        }
    ]
  return (
    <div className='awards'  id='awards'>
        <div className='container'>
            <h2>Awards & Recognitions</h2>
            {/* <h4>We are vitt</h4> */}
            <div className='wrapper'>
                {myAwards.map((e,i)=>(
                    <div className='card' key={i}>
                        <div className='card-wrap'>
                            <img src={e.image}/>
                            <div>
                                <p>{e.label}</p>
                            </div>
                        </div>
                        <p className='desc'>{e.desc}</p>
                    </div>
                ))}
                

                

                {/* <div className='card'>
                    <div className='card-wrap'>
                        <img src={journey4}/>
                        <div>
                            <p>Bizlabs 2019</p>
                        </div>
                    </div>
                    <p className='desc'>A startup event organised by Aditya Birla Capital</p>
                </div>

                <div className='card'>
                    <div className='card-wrap'>
                        <img src={journey4}/>
                        <div>
                            <p>Bizlabs 2019</p>
                        </div>
                    </div>
                    <p className='desc'>A startup event organised by Aditya Birla Capital</p>
                </div> */}
            </div>
        </div>
        
        {/* <img className='bg' src={bg}/> */}
    </div>
  )
}
