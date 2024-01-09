import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Result } from 'antd';
function UnAuth() {
  const navigate = useNavigate();
  const backtoHome = () => {
    navigate('/')
  }
  return (
    <div className='w-full h-screen bg-rose-200 flex items-center justify-center'>
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button  className='bg-sky-500 hover:bg-sky-200' onClick={backtoHome}>Back Home</Button>}
  />
</div>
);
  }
export default UnAuth;