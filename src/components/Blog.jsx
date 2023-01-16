import React from 'react'
import security from '../assets/chat-bot-security.png'
import investment from '../assets/investment-money.gif'
import Blog1 from '../assets/Blog1.png'
import Blog2 from '../assets/Blog2.png'
import blogBackground from '../assets/blog-background.png'
import BlogImg from '../assets/15.png';


export default function BlogSection() {
    let blogs = [
        {image:security,
            title:'Chat-bot security Framework',
            description:'Every thing you need to Know about chat-bot security with a curated security checklist',
            author:'~apporva raj saxena'
        },
        {   image:investment,
            title:'Investing money',
            description:'Nightmare experiences of investing money on my own',
            author:'~Saurabh Ahlawat',
            url:'https://medium.com/@saurabhahlawat89/nightmare-experiences-of-investing-money-on-my-own-265c349c478a'
        },
        {
            image:security,
            title:'Wealth Management',
            description:'We deliever thoughtful investment advisory services',
            author:'~Saurabh Ahlawat'
        }
    ]
//   return (
//     <div id='blog-section' className="blog-section" style={{backgroundImage: "linear-gradient(to bottom right, rgba(75,75,75,1), rgba(10, 26, 68,0.9))"}}>
//         <div>
//             <div className='boxA'>
//                 <h2>Our <br/> Blogs </h2>
//                 <div>
//                     <img src={BlogImg} />
//                 </div>
//             </div>
//             <div className='boxB'>
//                 <div className='blog'>
//                     <div className='number'>
//                         <p>01</p>
//                     </div>
//                     <div className='content'>
                    
//                         <p>Chat-Bot Security Framework</p>
//                         <p >
//                             Every thing you need to Know 
//                             about chat-bot security with a 
//                             curated security checklist
//                         </p>
//                     </div>
                    
//                 </div>
//                 <div className='blog'>
//                     <div className='number'>
//                         <p>02</p>
//                     </div>

//                     <div className='content'>
//                         <p >
//                         Investing Money
//                         </p>
//                         <p>Nightmare experience of investing money on my own</p>
//                     </div>
//                 </div>
//                 <div className='blog'>
//                     <div className='number'>
//                         <p>03</p>
//                     </div>
//                     <div className='content'>
//                         <p >
//                         Wealth Management
//                         </p>
//                         <p>
//                             We deliver thoughtful 
//                             investment advisory
//                             services 
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
        
//     </div>
    
//   )
return (
    <div className='blog-section' id="blog-section">
        <h2>Our Blogs</h2>
        <div className='container'>
                
            {blogs.map((e,i)=>{
                return <Blog key={i} title={e.title} author={e.author} desc={e.description} image={e.image}/>
            })}
                
        </div>
    </div>
)
}

export function Blog({title=' ',author=' ',desc=' ',button,image}){
    return  <a target="_blank" href="https://google.com">
                <div className='blog' onClick={()=>window.location.href}>
                    <img src={image}/>
                    <div className='content' >
                        <h3>{title}</h3>
                        <p className='author'>{author}</p>
                        <p className='desc'>
                            {desc}
                        </p>
                        <button>Read More</button>
                    </div>
                </div>
            </a>
}