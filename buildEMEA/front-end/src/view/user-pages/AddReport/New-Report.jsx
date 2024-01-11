import React, { useState, useEffect } from 'react';
import axiosClient from "../../../axios-client.js";
import { useParams, useNavigate } from 'react-router-dom';
import { message } from 'antd';

function ReportForm() {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Data Created successfully',
    });
  };
  const success2 = () => {
    messageApi.open({
      type: 'success',
      content: 'Data updated successfully',
    });
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Please fill in all fields.',
    });
  };
  const { id, rowId, table } = useParams();
  const [headers, setHeaders] = useState([]);
  const [rowData, setRowData] = useState({});
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tabledataAll, setTabledataAll] = useState([]);
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  useEffect(() => {
    setLoading(true);

    fetchTablesData(id)
    fetchHeaders(id, rowId);
    // Fetch headers
  }, [id, rowId]);

  function fetchHeaders(id, rowId) {
    axiosClient.get(`/table-data/${id}`)
      .then((res) => {
        setHeaders(res.data.data);
        // console.log(res.data.data);
        // Initialize formData with an entry for every header
        setFormData(res.data.data.map(header => ({ header_id: header.id, value: '' })));

        // If rowId is present and not 'new', fetch row data
        if (rowId && rowId !== 'new') {
          axiosClient.get(`/table-data/${id}/${rowId}`)
            .then((res) => {
              setRowData(res.data);
              // console.log(res.data);
              setFormData(prevData =>
                prevData.map(item => ({
                  header_id: item.header_id,
                  value: res.data.valuesByHeader[item.header_id]?.[0]?.value || ''
                }))
              );
              setLoading(false);
            })
            .catch((err) => {
              // console.log(err);
              setLoading(false);
            });
        } else {
          setLoading(false);
        }
      })
      .catch((err) => {
        // console.log(err);
        setLoading(false);
      });
  }

  function fetchTablesData(id) {
    axiosClient
      .get(`/table-info/${id}`)
      .then((res) => {
        setTabledataAll(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }


  const handleChange = (headerId, value) => {
    setFormData(prevData => prevData.map(item => (item.header_id === headerId ? { ...item, value } : item)));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    // Check if all fields are filled
    if (formData.some(item => item.value.trim() === '')) {
      // console.log('Please fill in all fields.');
      setMessage('Please fill in all fields.');
      error();
      return;
    }

    // If rowId is present and not 'new', update existing values
    if (rowId && rowId !== 'new') {
      const updateRequests = formData.map(item => {
        return axiosClient.put(`/update-values/${item.header_id}/${rowId}`, { value: item.value });
      });

      Promise.all(updateRequests)
        .then((responses) => {
          success2();
          console.log('Values updated successfully', responses.map(res => res.data));
          setTimeout(() => {
            navigate(`/addreport/${id}/${table}`);
          }, 1000);
        })
        .catch((err) => {
          // console.error('Error updating values:', err);
        });
    } else {
      // If rowId is not present or 'new', insert new values
      axiosClient.post('/insert-values', { values: formData })
        .then((res) => {
          console.log('Values inserted successfully', res.data);
          success();
          setTimeout(() => {

            navigate(`/addreport/${id}/${table}`);
          }, 1000);
        })
        .catch((err) => {
          // console.error('Error inserting values:', err);
        });
    }
  };

  return (
    <div className=' h-screen p-8'>
      {contextHolder}
      <div className='flex flex-col justify-between  '>
        <div className='flex '>
          <h1 className='font-bold text-xl mb-4'>{rowId && rowId !== 'new' ? 'Edit' : 'New'} Report</h1>
        </div>


        <div className='bg-white/10 p-8 rounded-md m-auto max-w-xl mb-4 font-bold text-lg'>
          {tabledataAll.description}
        </div>

        {loading && <p>Loading...</p>}

        <section className='max-w-xl  m-auto pt-10 bg-white/10 px-12 py-4 rounded-lg  min-w-72 mb-8'>


          {!loading && (
            <form onSubmit={handleSubmit}>
              {message && <p className='text-red-500 p-2 text-center'>{message}</p>
              }
              {/* {headers.length === 0 && <p>No headers found.</p>} */}
              {headers.map(header => (
                <div key={header.id} className="mb-4">
                  <label htmlFor={`header-${header.id}`} className='text-white'>{header.header}hyy</label>
                  <p className='max-w-80 font-semibold'>{header.header} </p>
                  {/* {formData.find(item => item.header_id === header.id)?.value} */}
                  <textarea
                    className='block w-full h-10 p-2 border text-black border-gray-300 rounded-md shadow-sm outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    placeholder={'Enter value here'}
                    id={`header-${header.id}`}
                    value={formData.find(item => item.header_id === header.id)?.value || ''}
                    onChange={(e) => handleChange(header.id, e.target.value)}
                  />



                </div>
              ))}

              <button className='bg-gradient-to-r from-indigo-600  to-blue-500 w-full p-2 rounded-lg hover:bg-gradient-to-l transition-all ease-in-out' type="submit">Save</button>
            </form>
          )}
        </section>

      </div>
    </div>

  );
}

export default ReportForm;
