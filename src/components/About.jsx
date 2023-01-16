import React from 'react'
import aboutImg from '../assets/about2.jpg'

export default function About() {
  return (
    <div className='about'>
        <div className='boxA'>
            <img src={aboutImg}/>

        </div>
        <div className='boxB'>
          <div className='wrap'>
              <p className='title'>About <br/> VITT.AI</p>
              <p className='desc'>
                  VITT is a Real Time Call Assistant for <br/> 
                  front line Sales teams.<br/>
                  When a sales executive is on a call with<br/> 
                  a client, our AI engine listens to the live<br/>
                  call & generates real time "cues" &<br/> 
                  "pointers" which help the sales<br/>
                  executive answer all sort of client<br/>
                  queries & make perfect sales pitch. <br/>
              </p>
          </div>
            
        </div>
        
        
    </div>
  )
}
