import React from 'react'

export default function Expertise() {
  return (
    <div className='expertise'>
      <div className='boxA'>
          <div className='content'>
            <h2>VITT In Action</h2>
            <p>Check out this short 1 <br/>
              min video to know more <br/> 
            about VITT</p>
          </div>
          <div className='vid-wrapper'>
            <video autoPlay={false} muted={false} controls src="https://s3.ap-south-1.amazonaws.com/vitt.ai/Sales_video.mp4" type="video/mp4" />
          </div>
      </div>
      <div className='boxB'>
        <div className='content'>
          <p className='large'>
            "It's like having a  live & dynamic AI<br/>
            Teleprompter in front of my sales <br/>
            team... whatever input they need just <br/>
            megically appears..."
            </p>
            <p className='small'>
                - Ajay Kumar (Sales Manager, Insurance)
            </p>
        </div>
        
      </div>
       

    </div>
  )
}
