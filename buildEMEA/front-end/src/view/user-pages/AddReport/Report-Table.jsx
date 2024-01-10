import { React, useEffect, useState } from 'react';
import axiosClient from "../../../axios-client.js";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { DeleteOutlined } from '@ant-design/icons';

function ReportTable() {
  const [tableCategory, setTableCategory] = useState([]);
  const [tabledataAll, setTabledataAll] = useState([]);
  const navigate = useNavigate();
  const { id, table } = useParams();

  function fetchdata() {
    axiosClient
      .get(`/table-data/${id}`)
      .then((res) => {
        setTableCategory(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function fetchTablesData(id) {
    axiosClient
      .get(`/table-info/${id}`)
      .then((res) => {
        setTabledataAll(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchdata();
    fetchTablesData(id);
  }, [id]);

  const handleDelete = (rowId) => {
    // Implement delete functionality
    console.log('Value deleted successfully');
    console.log(rowId);
  };

  return (
    <div className=' h-screen p-8 overflow-visible min-w-fit'>
      <div>
        <h3 className='text-2xl font-bold'>Table : {table}</h3>
      </div>
      <Link to="/addreport" className='bg-indigo-800 py-2 px-4 rounded-lg transform  ease-in-out mb-4 inline-block hover:bg-indigo-700 '>
        Back to Report List
      </Link>

      <div className=' p-6 rounded-md shadow-md '>
        <div className='bg-white/10 backdrop-blur-lg p-8 rounded-lg'>
          <p className='text-xl font-bold mb-4 text-white'>
            {tabledataAll.description}
          </p>
        </div>
<div className='flex justify-end mt-6'>

        <Link className="btn-add bg-rose-600 text-white py-1.5 px-4 rounded-full my-4 " to="new">
          Add new
        </Link>
        </div>

        <table className='min-w-fit border border-gray-300 w-96 rounded-xl'>
          <thead className='bg-slate-100 text-indigo-900 '>
            <tr>
              <th className='p-2'>Sl. No</th>
              {tableCategory.map((item) => (
                <th key={item.id} className='border border-gray-300  m-auto text-center p-2 px-6'>
                  {item.header}
                </th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className='bg-white/80  text-center border border-white'>
            {tableCategory.length > 0 &&
              tableCategory[0].values.map((value, index) => (
                <tr key={index}>
                  <td className='border border-white '>{index + 1}</td>
                  {tableCategory.map((item) => (
                    <td key={item.id} className='border border-white  text-left p-3'>
                      {item.values[index].value}<br />
                      {item.values[index].row_id}
                    </td>
                  ))}
                  <td className=' items-center justify-center m-auto p-2 border border-white '>
                  <button
                      className='hover:text-red-500 text-white py-2 px-4 rounded mb-4 inline'
                      onClick={() => handleDelete(`${value.row_id}`)}
                    >
                   <DeleteOutlined />
                    </button>
                    <button
                      className='bg-indigo-800 text-white py-1.5 px-4 rounded-lg mb-4 inline'
                      onClick={() => navigate(`${value.row_id}`)}
                    >
                      Edit
                    </button>
                 
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReportTable;
