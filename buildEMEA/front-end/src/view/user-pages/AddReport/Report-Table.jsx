import { React, useEffect, useState } from 'react';
import axiosClient from "../../../axios-client.js";
import { useParams, useNavigate , Link} from 'react-router-dom';
import { DeleteOutlined ,LeftOutlined  } from '@ant-design/icons';
import { Popconfirm , message } from 'antd';
import { motion } from "framer-motion";


function ReportTable() {
  const [messageApi, contextHolder] = message.useMessage();
  const [tableCategory, setTableCategory] = useState([]);
  const [tabledataAll, setTabledataAll] = useState([]);
  const navigate = useNavigate();
  const { id, table } = useParams();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'data deleted successfully',
    });
  };

  function fetchdata() {
    axiosClient
      .get(`/table-data/${id}`)
      .then((res) => {
        setTableCategory(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }

  function fetchTablesData(id) {
    axiosClient
      .get(`/table-info/${id}`)
      .then((res) => {
        setTabledataAll(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }

  useEffect(() => {
    fetchdata();
    fetchTablesData(id);
  }, [id]);
  const handleDelete = (rowId, id) => {
    axiosClient
      .delete(`/table-data/${id}/${rowId}`)
      .then((response) => {
        // console.log('Value deleted successfully');
        // console.log(rowId);
        success();
        // If you need to refresh the table after deletion, you can refetch the data here
        setTimeout(() => {
          fetchdata();
        }, 600);
      })
      .catch((error) => {
        // console.error('Error deleting value', error);
      });
  };

  return (
    <div className='h-screen p-8 overflow-visible min-w-fit'>
       <motion.div 
      initial={{ opacity: 0.2  }}
      whileInView={{ opacity: 1 }}
      >
       {contextHolder}
      <Link to="/addreport" className='bg-indigo-800 py-2 px-4 rounded-lg transform ease-in-out mb-4 inline-block hover:bg-indigo-700 '>
      <LeftOutlined />
      </Link>
      <div>
        <h3 className='text-2xl font-bold'>Table : {table}</h3>
      </div>

      <div className='p-6 overflow-x-auto'>
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

        <table className=' border border-gray-300 rounded-2xl overflow-hidden min-w-fit m-auto'>
          <thead className='bg-slate-100 text-indigo-900 font-bold '>
            <tr>
              <th className='p-2 rounded-tl-md'>Sl. No</th>
              {tableCategory.map((item) => (
                <th key={item.id} className='border border-gray-300 text-center p-2 px-6 '>
                  {item.header}
                </th>
              ))}
              <th className='rounded-tr-md'>Actions</th>
            </tr>
          </thead>
          <tbody className='bg-white/80 text-center border text-black '>
            {tableCategory.length > 0 &&
              tableCategory[0].values.map((value, index) => (
                <tr key={index} className='border border-white min-h-20'>
                  <td className='border font-bold'>{index + 1}</td>
                  {tableCategory.map((item) => (
                    <td key={item.id} className='border text-left p-3'>
                      {item.values[index].value}<br />
                    </td>
                  ))}
                  <td className='items-center justify-center   flex flex-row-reverse my-10 p-2'>

                    <Popconfirm
                      title="Delete the task"
                      description="Are you sure to delete this task?"
                      okText="Yes"
                      cancelText="No"
                      okType="danger"
                      onConfirm={() => handleDelete(value.row_id, id)}
                    >
                      <button
                        className='hover:text-red-500 py-2 px-4 rounded mb-4  text-black font-bold text-xl transition-all ease-in-out duration-300'

                      >
                        <DeleteOutlined />
                      </button>
                    </Popconfirm>
                    <button
                      className='bg-indigo-800 hover:bg-indigo-700 text-white py-1.5 px-4 my-auto rounded-lg mb-4 transition-all ease-in-out duration-500'
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
      </motion.div>
    </div>
  );
}

export default ReportTable;
