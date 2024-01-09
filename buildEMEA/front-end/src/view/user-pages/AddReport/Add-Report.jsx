import React from 'react';
import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

function AddReport() {
  const navigate = useNavigate();
  const style = {
    background: '#0092ff',
    padding: '8px 0',
  };

  const cards = [
    { id: 1, description: 'qweertyy', name: 'Card 1' },
    { id: 2, description: 'qweertyy', name: 'Card 2' },
    { id: 3, description: 'qweertyy', name: 'Card 3' },
    { id: 4, description: 'qweertyy', name: 'Card 4' },
    { id: 5, description: 'qweertyy', name: 'Card 5' },
    { id: 6, description: 'qweertyy', name: 'Card 6' },
    { id: 7, description: 'qweertyy', name: 'Card 7' },
    { id: 8, description: 'qweertyy', name: 'Card 8' },
  ];

  function CardOpen(id) {
    console.log(id);
    navigate(`/addreport/${id}`);
  }

  return (
    <div className='bg-rose-300 h-screen'>
      Add-Report
      <Row gutter={[8, 8]}>
        {cards.map((card, index) => (
          <Col key={index} className="gutter-row" span={6} xs={24} sm={12} md={8} lg={6}>
            <div style={style}>
              <h1>{card.name}</h1>
              <p>{card.description}</p>
              <p>{card.id}</p>
              <button onClick={() => CardOpen(card.id)}>Open</button>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default AddReport;
