import React from 'react'
import {Blog} from './Blog'
import bg from '../assets/awards-bg.png'
import journey2 from '../assets/journey2.jpeg';
import journey3 from '../assets/journey3.jpeg';
import journey4 from '../assets/journey4.jpeg';

export default function Awards() {
    let myAwards = [
        {
            image:journey2,
            label:'Gitex 22',
            desc:'a global technology summit at Dubai, UAE'
        },
        {
            image:journey3,
            label:'Fidnovate 22',
            desc:'a startup event organised by Fidelity Investments'
        },
        {
            image:journey4,
            label:'Bizlabs 2019',
            desc:'a startup event organized by Aditya Birla Capital'
        },
    ]
  return (
    <div className='awards'  id='awards'>
        <div className='container'>
            <h2>Awards & Recognitions</h2>
            {/* <h4>We are vitt</h4> */}
            <div className='wrapper'>

                <div className='card'>
                    <div className='card-wrap'>
                        <img src={journey2}/>
                        <div>
                            <p>Gitex 22</p>
                        </div>
                    </div>
                    <p className='desc'>A global technology summits at Dubai, UAE</p>
                </div>

                <div className='card'>
                    <div className='card-wrap'>
                        <img src={journey3}/>
                        <div>
                            <p>Fidnovate 22</p>
                        </div>
                    </div>
                    <p className='desc'>A startup event organised by Fidelity Investments</p>
                </div>

                <div className='card'>
                    <div className='card-wrap'>
                        <img src={journey4}/>
                        <div>
                            <p>Bizlabs 2019</p>
                        </div>
                    </div>
                    <p className='desc'>A startup event organised by Aditya Birla Capital</p>
                </div>
            </div>
        </div>
        
        {/* <img className='bg' src={bg}/> */}
    </div>
  )
}
