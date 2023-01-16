import React from 'react'
import offerings from '../assets/offerings.png'
import offerings2 from '../assets/offerings2.png'
import flash from '../assets/flash.png'
import clock from '../assets/clock.png'
import shield from '../assets/shield.png'
import sales from '../assets/Sales Assistant.png'
import sales3 from '../assets/SalesAssistant3.png'
//import lightining from '../assets/lightning.png'
import clock2 from '../assets/clock2.png'
import flash2 from '../assets/lightning2.png';
import shield2 from '../assets/shield2.png'

import offerings3 from '../assets/VRM2.png'
import offerings4 from '../assets/SalesAssistant2.png'
import VRM from '../assets/VRM2.png'

export default function Offerings() {
  let offers=[
    {
      title:'real time call assistant',
      subTitle:'for sales executives',
      desc:'Analyses live call between client & agent in real time shows `cues` & `pointers` to agents for effective sales',
      cards:[
        {
          img:shield2,
          cardDesc:'Shows perfect reply to every client query in real time'
        },
        {
          img:clock2,
          cardDesc:"Everyone's response is in line with house view; No mis-sessling"
        },
        {
          img:flash2,
          cardDesc:"Guides agents to make hyperperson -ised sales pitches"
        }
      ],
      mainImage:sales3,
      textColor:'#4F24C9',
      cardsColor:'rgb(148, 55, 235)',
      background:'rgb(222, 224, 226)',
      scale:1
    },
    {
      title:'vitual relationship manager',
      subTitle:'for Retail Customers',
      desc:'Handles all possible queries on investments & helps retail clients build customised portfolios',
      cards:[
        {
          img:shield2,
          cardDesc:'Accuracy of ~98% in handling queries related to Investments'
        },
        {
          img:clock2,
          cardDesc:"24% conversion rate in marketing compaigns vis a vis <2% earlier"
        },
        {
          img:flash2,
          cardDesc:"Customer Support Team at client reduced from 21 earlier to only 1"
        }
      ],
      mainImage:VRM,
      textColor:'#0b6ad8',
      cardsColor:'rgb(34, 48, 173)',
      background:'rgb(209, 223, 235)',
      scale:-1
    }
  ]
  return (
    <div className='offerings'>
        <h2>Our Offerings</h2>
        <OfferCard offer={offers[0]}/>
        <div className='video-holder'>
        <video autoPlay={true} muted={true} controls src="https://s3.ap-south-1.amazonaws.com/vitt.ai/Sales_video.mp4" type="video/mp4" />
        </div>
        <OfferCard offer={offers[1]}/>
        {/* <div className='video-holder'>
             <video autoPlay={true} muted={true} controls src="https://joy.videvo.net/videvo_files/video/free/2012-08/large_watermarked/hd0029_preview.mp4" type="video/mp4" />
        </div> */}
    </div>
  )
}

export function OfferCard({offer}){
  return (
    <div className='offer-card' id='offerings' style={{backgroundColor:`${offer.background}`}}>
      <div className='content'>
          <h3 className='heading' style={{color:`${offer.textColor}`}}>{offer.title}</h3>
          <p className='sub-heading' style={{color:`${offer.textColor}`}} >{offer.subTitle}</p>
          <p className='desc' style={{color:`${offer.textColor}`}}>{offer.desc}</p>
      </div>
      <div className='wrapper'>
         <div className='card-wrapper'>
            {offer.cards.map((e,i)=>{

            return<div className='card' key={i} style={{backgroundColor:`${offer.cardsColor}`}}>            
                      <div className='icon-wrapper'>
                        <img src={e.img} className='icon'/>
                      </div>
                      <p>{e.cardDesc}</p>
                  </div>
              })}
            
            {/* <div className='card'>
              <div className='icon-wrapper'>
                <img src={clock2} className='icon'/>
              </div>
                <p>Everyone's response is in line with house view: No misselling</p>
            </div>
            <div className='card'>
                <div className='icon-wrapper'>
                  <img src={flash2} className='icon'/>
                </div>
                <p>Guides agents to make hyperpersona l-ised saled pitches</p>
            </div> */}
         </div>
         <div className='image-holder'>
            <img src={offer.mainImage} style={{transform:`scaleX(${offer.scale})`}} />
         </div>
      </div>
    </div>
  )
}