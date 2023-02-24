import React,{useEffect, useRef, useState} from 'react'
// import './header.css'
import logo from '../assets/logo.png'
import homeBackground from '../assets/homeBackground.png'
import Robo from '../assets/Robo.png'
import homeBg from '../assets/home-bg--res.png'

export default function Header() {
   const [active,setActive] = useState(false)
  let headerRef= useRef()
  let headerWrapperRef = useRef()
  
  function scrollFunction(){
    // if(window.scroll > Header.wrapper.elem.getBoundingClientRect())
    //console.log(headerWrapperRef.current.getBoundingClientRect())
    let height = headerWrapperRef.current.getBoundingClientRect().height - headerRef.current.getBoundingClientRect().height
    if(window.scrollY > height){
      headerRef.current.style.backgroundColor = '#4B24C0'
    }else{
      headerRef.current.style.backgroundColor = 'transparent'
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', scrollFunction );

    return ()=>window.removeEventListener('scroll',scrollFunction)
  },[])

  
  return (<>
  <div className='header-wrapper' ref={headerWrapperRef} id='home'>
        <img src={homeBg} className='bg'/>
        <img src={Robo} className='robo'/>
        <div className='header' ref={headerRef} >
          
          <div className='childA'>
              <img src={logo} />
          </div>
          <div className='childB' >
              <div><a href='#home'>home</a></div>
              <div><a href='#features'>Product</a></div>
              <div><a href='#team'>team</a></div>
              <div><a href='#awards'>Awards & Recognitions</a></div>
              {/* <div><a href='#blog-section'>blog</a></div> */}
              <div><a href='#form'>Get in touch</a></div>
          </div>
          <div className='childC'>
              <div className='hamburger'>
                <i className="fa-sharp fa-solid fa-bars" onClick={()=>setActive(true)}></i>
              </div>
              <div className='menus' style={{right:`${active ?'-5rem': '-200vw'}`}}>
                <div className='icon-wrapper'>
                  <div className='float-box'>
                    <i className="fa-solid fa-xmark" onClick={()=>setActive(false)}></i>
                  </div>
                  
                </div>
                <a href='#home' onClick={()=>setActive(false)}>home</a>
                <a href='#features' onClick={()=>setActive(false)} >Product</a>
                <a href='#team' onClick={()=>setActive(false)}>team</a>
                <a href='#awards' onClick={()=>setActive(false)}>Awards & Recognitions</a>
                {/* <a href='#blog-section' onClick={()=>setActive(false)}>blog</a> */}
                <a href='#form' onClick={()=>setActive(false)}>Get in touch</a>
                {/* <div className='options'><a href='#home'>home</a></div>
                <div className='options'><a href='#offerings'>our offerings</a></div>
                <div className='options'><a href='#team'>our team</a></div>
                <div className='options'><a href='#awards'>Journey</a></div>
                <div className='options'><a href='#blog-section'>our blog</a></div>
                <div className='options'><a href='#form'>Get in touch</a></div> */}
              </div>
            </div>
        </div>
        <div className='content'>
            <div className='content-wrapper'>
              {/* <div className='content-logo'>
                <img src={logo} />
              </div> */}
              <h3>AI Powered Sales </h3>
              <p className='sub-heading'>
                We help front line sales teams make <br/>
                effective client pitch & achieve faster <br/>
                closure through real time cues. 
              </p>
              <p className='desc'>
                  
                  Better conversations lead 
                  to higher<br/>
                  conversions
              </p>
            </div>
            
            <div className='image-wrapper'>
              <img src={Robo} className='myrobo'/>
            </div>
            
        </div>
  </div>
    </>
  )
}
