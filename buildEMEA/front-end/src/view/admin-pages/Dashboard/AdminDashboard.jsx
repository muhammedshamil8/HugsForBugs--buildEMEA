import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ImageDashboard from '../../../images/iqacdashboard.jpg'

function AdminDashboard() {
  const navigate = useNavigate()
  return (
    <div className=' h-full flex flex-col gap-24'>
      <div className="w-full p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">IQAC</h1>
        <p className="text-xl">
          ( Internal Quality Assurance Cell )
        </p>
      </div>
      <main className='max-w-4xl m-auto'>
      <section className="w-full min-h-40   p-2  grid grid-cols-2 section-1-dashboard ">
        <div className="w-full flex justify-around items-center  rounded-md">
          <div className='empty'></div>
          <img src={ImageDashboard} alt="iqac dashboard" className=" rounded-xl max-w-64" />
        </div>
        <div className="w-full p-4 ">
          <p className='max-w-xl'>
          IQAC , where excellence meets confidentiality. IQAC is the guardian of academic quality, driven by a vision of continuous improvement. Committed to professionalism, we monitor and enhance academic processes, ensuring secure, confidential handling of sensitive information. Join us on the journey towards educational excellence, where every endeavor is measured against the yardstick of quality.
          </p>
         
        </div>
      </section>
      <section className="w-full min-h-40 mt-10 p-2 m-auto">
          <div className="w-full p-2 m-auto text-left text-lg">
          <p className='max-w-xl m-auto'>
              IQAC , where excellence meets confidentiality. IQAC is the guardian of academic quality, driven by a vision of continuous improvement. Committed to professionalism, we monitor and enhance academic processes, ensuring secure, confidential handling of sensitive information. Join us on the journey towards educational excellence, where every endeavor is measured against the yardstick of quality.
            </p>
          </div>
</section>      
      <section className="w-full min-h-40 mt-10 p-2  grid grid-cols-2">
        <div className="w-full p-2 ">
          {/* free space */}
        </div>
        <div className="w-full p-4 text-right">
          <h1 className="text-4xl font-bold mb-4">
          Quadinator Name

          </h1>
          <p className="text-md">
            Quadinator Of IQAC - present
          </p>
        </div>
      </section>
    </main>
    </div>
  )
}

export default AdminDashboard