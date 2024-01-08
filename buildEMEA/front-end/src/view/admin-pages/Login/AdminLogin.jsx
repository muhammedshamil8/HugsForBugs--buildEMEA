// AdminLogin.jsx

import {Link , useNavigate} from "react-router-dom";
import axiosClient from "../../../axios-client.js";
import {createRef,useState , React} from "react";
import {useStateContext} from "../../../context/ContextProvider";
import { Button, Input, Form, Divider, notification, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../../../styles/admin-css/adminSignin.css'; // Import your 
import {
  BorderBottomOutlined,
  BorderTopOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from '@ant-design/icons';

const AdminLogin = () => {
  const { setUser, setToken , setRole , token , role } = useStateContext()
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `Notification ${placement}`,
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      placement,
    });
  };

  const onFinish = (values) => {
    // console.log('Received values:', values);
    if (values) {
      const paylod = {
        email : values.email,
        password: values.password,
      }
      axiosClient.post('/admin/login', paylod)
      .then(({data}) => {
        setUser(data.admin);
        console.log(data.message);
        // localStorage.setItem('role', data.admin.role);
        setRole(data.admin.role);
        setToken(data.token);
        navigate('/admindashboard');
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message)
        }
      })
    }
  };

  return (
    <div className='container'>

      <div className='admin-SignInPage--parent'>
        <div className='admin-login-message'>
          <p>SIGN IN TO YOUR
            <br /><span>ADMIN PANEL!</span></p>

        </div>


        <div className="admin-login-container">
          <div className='auth-header'>
            <h1>
              SIGN IN
            </h1>
            <p>Log in with your credentials</p>
          </div>
          <div className='auth-continer'>

            <Form name="adminLogin" onFinish={onFinish}>
            {message &&
            <div className="alert">
              <p>{message}</p>
             
            </div>
          }
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input
                  className='admin-login-input'
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input
                  className='admin-login-input'
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" className="login-form-button">
                  Log in
                </Button>
              </Form.Item>
            </Form>
            <Divider className='hr' />
            {contextHolder}
            <Space>
              <Button className='forgot-btn' onClick={() => openNotification('top')} >
                forgot password ?
              </Button>
            </Space>
          </div>

        </div>
      </div>
    </div>


  );
};

export default AdminLogin;
