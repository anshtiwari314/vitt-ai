import React from 'react'
import bg from '../assets/form-bg.png'
import emailjs from '@emailjs/browser'
import { useEffect,useState,useRef } from 'react'
import formImg from '../assets/formImg.png';
//import env from 'react-dotenv';
//import dotenv from 'dotenv'
import success from '../assets/sucess-tick.png';
import failed from '../assets/failed.png'

export default function Form() {
   // dotenv.config();
   let initialObject = {
    email:'',
    name:'',
    message:'',
    mobile:''
    }

    const [formData,setFormData] = useState(initialObject)
    const [sendBtn,setSendBtn] = useState(false);
    const isMailSend = useRef(false);
    
    const successBox =  useRef()
    const [isFormSuccess,setIsFormSuccess] = useState(false)
    // useEffect(()=>{

    //     let templateParams = {
    //         name:"anuj",
    //         email:"anshtiwari314@gmail.com",
    //         message:"here is the test message",
    //         mobile:"8368751774"
    //     }
    //   //  console.log(env.SAURABH_TEMPLATE_ID)
    
    //  },[])

     useEffect(()=>{
        console.log(formData);
        
        

        if(isMailSend.current===true){

            emailjs.send('service_aipj2rd','template_ajezo6a', formData, '0nX7mwsU_D7eW8AbZ')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                
                setIsFormSuccess(true)
                successBox.current.style.display = 'flex';

            }, (err) => {
                console.log('FAILED...', err);
                
                setIsFormSuccess(false)
                successBox.current.style.display = 'flex';
            
            });

        //console.log('i am mail current',isMailSend.current)
            
            
            isMailSend.current = false;
            setFormData(initialObject);


            setSendBtn(false);
        }
     },[sendBtn])
  return (
    <div className='form' id='form'>
        
        <div className='success-box' ref={successBox} >
                <div>
                    <i className="fa-sharp fa-solid fa-xmark" onClick={()=>successBox.current.style.display = "none"}></i>
                    <p>
                        {
                        isFormSuccess===true ? 
                        'Success we received your message we will connect to u shortly !! ':
                        'Oops got an error'}
                    </p>
                    <img src={isFormSuccess===true ? success :failed} onClick={()=>successBox.current.style.display = "none"}/>
                </div>
        </div>

        <div className='wrap'>

            
            <div className='boxA'>
                {/* <img src={bg}/> */}
                <h4>Get In Touch</h4>
                <div className='wrapper'>
                    <div className='inputs'>
                        <label htmlFor='name' >Name</label>
                        <input  
                            required
                            type='name' 
                            id='name' 
                            placeholder='Enter your name'
                            value={formData.name} 
                            onChange={(e)=>setFormData({...formData,name:String(e.target.value)})}
                            />
                    </div>
                    <div className='inputs'>
                        <label className='email' htmlFor='email' >Email</label>
                        <input 
                            required
                            type='email' 
                            id='email'
                            placeholder='Enter your Email ID'
                            value={formData.email} 
                            onChange={(e)=>setFormData({...formData,email:String(e.target.value)})}
                            />
                    </div>
                    <div className='inputs'>
                        <label htmlFor='message'>Message</label>
                        <input 
                            required
                            type='text' 
                            placeholder='Enter your query' 
                            id='message'
                            value={formData.message} 
                            onChange={(e)=>setFormData({...formData,message:String(e.target.value)})}
                            />
                    </div>
                    <div className='inputs'>
                        <label htmlFor='mobile'>Mobile</label>
                        <input 
                            type='tel' 
                            placeholder='Enter your number' 
                            id='mobile' 
                            value={formData.mobile} 
                            onChange={(e)=>setFormData({...formData,mobile:String(e.target.value)})}/>
                    </div>
                </div>
                <button  disabled={sendBtn} onClick={()=>{isMailSend.current=true; setSendBtn(true);}}>Submit</button>
            </div>
           
        </div>
    </div>
  )
}
