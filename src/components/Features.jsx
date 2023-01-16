import React from 'react'
import boxA from '../assets/boxA.png'
import boxB from '../assets/boxB.png'
import boxC from '../assets/boxC.png'

import icon1 from '../assets/icon1a.png';
import icon2 from '../assets/icon2a.png';
import icon3 from '../assets/icon3a.png';

import icon4 from '../assets/icon4a.png';
import icon5 from '../assets/icon5a.png';
import icon6 from '../assets/icon6a.png';


export default function Features() {
  return (
      <>
    <div className='features' id="features" style={{backgroundImage: "linear-gradient(to bottom right, rgba(82, 74, 235,1), rgba(10, 26, 68,0.9))"}}>
        <div className='wrap'>
            <h2 className='title'>Our Offerings</h2>

            <div className='desc'>
                <p >Turbocharge your Sales Team with the Power of AI</p>
                <p>How do the real time cues help sales executives ?</p>
            </div>
            <div className='box-wrapper'>
                        <div className='boxes boxA'>
                            <img src={icon3}/>
                            <p className='box-title'>Accurate Information</p>
                            <p className='box-desc'>Vitt shows the best response to all sorts of Data/Process/Advisory related client queries</p>
                        </div>
                        <div className='boxes boxA'>
                            <img src={icon4}/>
                            <p className='box-title'>No Mis-selling</p>
                            <p className='box-desc'>Vitt analysis client profile to create personalised product pitches as per in house views & policies</p>
                        </div>
                        <div className='boxes boxA'>
                            <img src={icon1}/>
                            <p className='box-title'>Higher Productivity</p>
                            <p className='box-desc'>Vitt captures relevant data from the call & automates all back end work such as updating CRM</p>
                        </div>
            </div>

        </div>
        
    </div>

    <div className='features' style={{backgroundImage: "linear-gradient(to bottom right, rgba(75,75,75,1), rgba(10, 26, 68,0.9))"}}>
        <div className='wrap'>
            <h2 className='title'>Our Offerings</h2>

            <div className='desc'>
                <p style={{color:"#aaf1ff"}}>Vitt has high accuracy & can integrate easily with existing systems</p>
                {/* <p>How do the real time cues help sales executives ?</p> */}
            </div>
            <div className='box-wrapper'>
                        <div className='boxes boxA'>
                            <img src={icon5}/>
                            <p className='box-title'>Domain Specific Training</p>
                            <p className='box-desc'>Vitt is pre-trained with 50,000 + unique knowledge parameters on Finance & can be trained with new content on the go.</p>
                        </div>
                        <div className='boxes boxA'>
                            <img src={icon2}/>
                            <p className='box-title'>High Multilingual Accuracy</p>
                            <p className='box-desc'>Vitt has an accuracy of 85%+ in analysing live call & generating the right cues in real time, across 5 indian languages.</p>
                        </div>
                        <div className='boxes boxA'>
                            <img src={icon6}/>
                            <p className='box-title'>Plug & Play Architecture</p>
                            <p className='box-desc'>Integrate Vitt easily with existing CRM, soft-phoning, Call centre & chatbot systems, making them lot more smarter.</p>
                        </div>
            </div>

        </div>

    </div>
</>
  )
}
