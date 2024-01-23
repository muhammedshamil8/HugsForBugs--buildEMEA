import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../../styles/User-css/Contact.css';
import { MessageOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { motion } from "framer-motion";



function Contact() {
  return (
    <div className=' h-screen pt-40 '>
       <motion.div 
      initial={{ opacity: 0.2  }}
      whileInView={{ opacity: 1 }}
      >
    <div className="contact-container py-16">
    <div className='h-40 text-center'>
        <h1 className='text-4xl font-semibold max-w-80 '>
        Let’s discuss <br />
on something <span className='text-rose-600'>
cool
  </span> <br /> together
        </h1>
       </div>
      <div className='flex-col'>
      
        <div className="info-box">
          <p className='flex items-center justify-start gap-4'><MessageOutlined />shamil2005@gmail.com</p>
        </div>
       
        <div className="info-box">
          <p className='flex items-center justify-start gap-4'><WhatsAppOutlined />123456789</p>
        </div>
      </div>

    
    </div>
    </motion.div>
    </div>
  )
}

export default Contact