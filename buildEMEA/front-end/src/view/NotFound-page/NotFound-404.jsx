import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Result } from 'antd';

function NotFound() {
  const navigate = useNavigate()
  const backtoHome = () => {
    navigate('/')
  }
  return (


    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button  className='bg-sky-500 hover:bg-sky-200' onClick={backtoHome}>Back Home</Button>}
    />

  )
}

export default NotFound