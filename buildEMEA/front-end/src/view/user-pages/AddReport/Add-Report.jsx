import { React, useEffect, useState } from 'react';
import axiosClient from "../../../axios-client.js";
import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';



function AddReport() {
  const [tabledata, setTabledata] = useState([]);
  const [tableCategory, setTableCategory] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const navigate = useNavigate();
  const style = {
    background: '#0092ff',
    padding: '8px 0',
  };



  function CardOpen(table, id) {
    // console.log(id);
    // console.log(table);
    navigate(`/addreport/${id}/${table}`);
  }

  function fetchTablesData(data) {
    axiosClient
      .get(`/tables/${data.category_id}}`)
      .then((res) => {
        // console.log(res);
        setTabledata(res.data);

      })
      .catch((err) => {
        console.log(err);

      });
  }

  useEffect(() => {
    fetchUser();
  }, [])


  function fetchUser() {

    axiosClient.get('/logged-user')
      .then(({ data }) => {
        setCurrentUser(data)
        fetchTablesData(data);
        // console.log(data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 429) {
          setTimeout(() => {
            fetchUser()
          }, 1000);
        }
      });
  }

  return (
    <div className=' h-screen'>
      <div className='text-xl font-bold'>
        <h1>{currentUser.category_name}</h1>
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

export default AddReport;
