import { React, useEffect, useState } from 'react';
import axiosClient from "../../../axios-client.js";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { DoubleLeftOutlined } from '@ant-design/icons';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

function ReportDataTable() {
  const [tableCategory, setTableCategory] = useState([]);
  const [tabledataAll, setTabledataAll] = useState([]);
  const navigate = useNavigate();
  const { category_id, table_id, table } = useParams();

  function fetchdata() {
    axiosClient
      .get(`/table-data/${table_id}`)
      .then((res) => {
        setTableCategory(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }

  function fetchTablesData(table_id) {
    axiosClient
      .get(`/table-info/${table_id}`)
      .then((res) => {
        setTabledataAll(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }

  useEffect(() => {
    fetchdata();
    fetchTablesData(table_id);
  }, [table_id]);

 


  function ExportToExcel(table) {
    const tables = document.getElementsByTagName('table');
    if (tables.length > 0) {
      const table = tables[0].cloneNode(true);
      const header = document.createElement('thead');
      const cloneHeader = tables[0].getElementsByTagName('thead')[0].cloneNode(true);
      header.appendChild(cloneHeader);

      table.appendChild(header);

      const blob = new Blob([table.outerHTML], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'
      });

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `table_${table}.xlsx`;
      link.click();
    } else {
      console.error('No table found to export.');
    }
  }

  return (
    <div className='h-screen p-8 overflow-visible min-w-fit'>
      
      <Link to={`/category`} className='bg-rose-600 py-1 px-2 text-md rounded-full transform ease-in-out mb-4 inline-block hover:bg-indigo-700 '>
        <DoubleLeftOutlined />
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
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="btn-add bg-green-600 text-white py-1.5 px-4 rounded-full my-4"
          table="table-to-export"
          filename={`table_${table}`}
          sheet="table_data"
          buttonText="Export to Excel"
        />
      </div>

        <table id="table-to-export" className=' border border-gray-300 rounded-2xl overflow-hidden min-w-fit m-auto'>
          <thead className='bg-slate-100 text-indigo-900 font-bold '>
            <tr>
              <th className='p-2 rounded-tl-md'>Sl. No</th>
              {tableCategory.map((item) => (
                <th key={item.id} className='border border-gray-300 text-center p-2 px-6 '>
                  {item.header}
                </th>
              ))}
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
                      {item.values[index].row_id}
                    </td>
                  ))}

                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReportDataTable;
