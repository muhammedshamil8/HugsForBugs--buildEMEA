import React, { useState, useEffect } from 'react';
import axiosClient from "../../../axios-client.js";
import { useParams } from 'react-router-dom';

function ReportForm() {
  const { id, rowId } = useParams();
  const [headers, setHeaders] = useState([]);
  const [rowData, setRowData] = useState({});
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  
    // Fetch headers
    axiosClient.get(`/table-info/${id}`)
      .then((res) => {
        setHeaders(res);
      })
      .catch((err) => {
        console.log(err);
      });
  
    // Fetch row data based on rowId
    axiosClient.get(`/get-row-data/${id}/${rowId}}`)
      .then((res) => {
        setRowData(res.data);
        // Initialize formData based on headers and row data
        setFormData(res.data.values.map(value => ({ header_id: value.header_id, value: value.value })));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id, rowId]);
  

  const handleChange = (headerId, value) => {
    setFormData(prevData => prevData.map(item => (item.header_id === headerId ? { ...item, value } : item)));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    // Check if all fields are filled
    if (formData.some(item => item.value.trim() === '')) {
      console.log('Please fill in all fields.');
      return;
    }

    // If in edit mode, update existing values
    if (id && rowId) {
      formData.forEach((item) => {
        axiosClient.put(`/update-value/${item.header_id}/${rowId}`, { value: item.value })
          .then((res) => {
            console.log('Value updated successfully', res.data);
          })
          .catch((err) => {
            console.error('Error updating value:', err);
          });
      });
    } else {
      // If in insert mode, insert new values
      axiosClient.post('/insert-values', formData)
        .then((res) => {
          console.log('Values inserted successfully', res.data);
        })
        .catch((err) => {
          console.error('Error inserting values:', err);
        });
    }
  };

  return (
    <div className='bg-rose-300 h-screen p-8'>
      <h1>{id && rowId ? 'Edit' : 'New'} Report</h1>

      {loading && <p>Loading...</p>}

      {!loading && (
        <form onSubmit={handleSubmit}>
          <table>
            <thead>
              <tr>
                {headers.map(header => (
                  <th key={header.id}>{header.header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {headers.map(header => (
                  <td key={header.id}>
                    <input
                      type="text"
                      value={formData.find(item => item.header_id === header.id).value}
                      onChange={(e) => handleChange(header.id, e.target.value)}
                    />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>

          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
}

export default ReportForm;
