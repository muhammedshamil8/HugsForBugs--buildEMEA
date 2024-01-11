import { React, useEffect, useState } from 'react';
import axiosClient from "../../../axios-client.js";
import { Col, Row } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {  LeftOutlined } from '@ant-design/icons';



function ShowReport() {
  const [tabledata, setTabledata] = useState([]);
  const [tableCategory, setTableCategory] = useState([]);
  const navigate = useNavigate();
  const style = {
    background: '#0092ff',
    padding: '8px 0',
  };
  const { category_id , category_name} = useParams();



  function CardOpen(table, id) {
    console.log(id);
    console.log(table);
    navigate(`/category/${category_id}/${id}/${table}`);
  }

  function fetchTablesData(category_id) {
    console.log(category_id);
    axiosClient
      .get(`/admin/tables/${category_id}`)
      .then((res) => {
        console.log(res

          );
          setTabledata(res.data);

      })
      .catch((err) => {
        console.log(err);

      });
  }
 
  useEffect(() => {
    fetchTablesData(category_id);

  }, [])


  return (
    <div className=' h-screen'>
      <div> <Link to={`/category`}className='bg-rose-600 py-1 px-2 text-md rounded-full transform ease-in-out mb-4 inline-block hover:bg-indigo-700 '>
      <LeftOutlined />
      </Link></div>
      <div className='text-xl font-bold'>
        <h1>{category_name}</h1>
      </div>
      
      
      <Row gutter={[8, 8]} className='p-4 '>
        {tabledata.map((card) => (
          <Col key={card.id} className="gutter-row m-auto" span={6} xs={24} sm={12} md={12} lg={8} >
            <div className=' p-8 max-w-96 rounded-lg bg-white/20 backdrop-blur-md m-1 flex flex-col justify-between max-h-72 min-h-60 cursor-pointer'>
              <h1 className='text-md font-semibold'>{card.name}</h1>
              <p className='text-[17px] text-left'>{card.short_description}</p>
              <div className='flex justify-end'>
              <button onClick={() => CardOpen(card.name, card.id)} className='bg-rose-600 p-1 px-3 rounded-xl hover:bg-rose-800 transition-all ease-in-out'>Open</button>
              </div>
             
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ShowReport;
