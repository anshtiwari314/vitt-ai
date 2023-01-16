import {useState} from 'react'
//import "./Carousel.css"
import shiv from '../assets/shiv.png'
import bibhuti from '../assets/bibhuti.png'
import saurabh from '../assets/saurabh.jpeg'
import vidhu from '../assets/vidhu.jpeg'
// import shiv from '../assets/bibhuti.png'
// import sanket from '../assets/bibhuti.png'
// import anuj from '../assets/bibhuti.png'
// import varun from '../assets/bibhuti.png'

// export function CardCarousel(){
//     return <div className='card-carousal' >
//                 <div className='="card-carousal-inner' style={{display:'flex',border:"5px solid green",transform:"translateX(-100%)"}}>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/> 
//                 </div>
//                 <div className='progress-bar'>
//                     <div className='progress-item'></div>
//                     <div className='progress-item'></div>
//                 </div>
//         </div>
// }


export default function TeamSection(){
    const teams = [
        {//image:'https://wallpaperaccess.com/full/4601521.jpg',
            image:bibhuti,
            name:'Bibhuti Anand',
            des:'Chief Executive Officer ',
            linkdin:'https://www.linkedin.com/in/bibhuti-anand-25627855/'
        },
        {//image:'https://wallpapers.com/images/hd/sasuke-pfp-in-portrait-epjqc7dbxjkbucfc.jpg',
            image:saurabh, 
            name:'Saurabh Ahlawat',
            des:'Chief Technology Officer ',
            linkdin:'https://www.linkedin.com/in/saurabh-ahlawat-20915115/'
        },
        {
            image:shiv,
            name:'ShivShankar K ',
            des:'Chief Data Scientist',
            linkdin:'https://www.linkedin.com/in/shivshankark/'
        },
        {
            image:vidhu,
            name:'Dr. Vidhu Shekhar',
            des:'Director,Fintech Innovations',
            linkdin:'https://www.linkedin.com/in/vidhushekhar/'
        }
    ]
    return <div className='team-section' id='team'>
    
            <h4 className='heading'>FOUNDING TEAM</h4>
            <div className='container'>
                <h3 > 
                    We are four IIM Calcutta batchmates 
                    with 35+ years of cumulative 
                    experience in Fin/Tech
                </h3>
                <div className='wrapper' >
                    {teams.map((e,i)=>{
                    return <Card name={e.name} des={e.des} image={e.image} key={i} linkdin={e.linkdin}/>
                    })}
                </div>
            </div>
            </div>
            
}

export function Card({image,des,name,linkdin}){
    // console.log(des)
    return <div className="card">
                <div className='image-holder'>
                    <img src={image} />
                </div>
                <div className="text">
                    <div className='content'>
                        
                        <h4 className='name' >{name}</h4>
                        
                        <p className='des'>{des}</p>
                        <div className="icon-holder" >
                            <a href={linkdin}>
                                <i className="fa-brands fa-linkedin" ></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
}

