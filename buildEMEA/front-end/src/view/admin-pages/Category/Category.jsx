import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../../context/ContextProvider.jsx';
import axiosClient from '../../../axios-client.js';

function Category() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  function fetchCategories() {
    axiosClient.post('/category')
      .then(({ data }) => {
        console.log(data);  // Log the entire data object
        setLoading(false);
        setCategories(data.data);
        console.log(categories);  // Log the categories array
      })
      .catch((error) => {
        if (error.response && error.response.status === 429) {
          setTimeout(() => {
            fetchCategories();
          }, 1000);
        } else {
          setLoading(false);
        }
      });
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="bg-blue-300/20 h-screen p-6">
      <input search="search" placeholder="Search" className="bg-white/10 bg-opacity-70 border rounded p-2 mb-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {loading ? (
          <div className="text-center p-2">
            Loading...
          </div>
        ) : (
          categories.map((category) => (
            <div key={category.id} className="bg-white/10 bg-opacity-70 border rounded p-8 transition duration-300 transform hover:-translate-y-2 backdrop-blur-sm cursor-pointer">
              <div className="text-xl font-bold mb-2">{category.name}</div>
              <div className="flex justify-between">
                <div className="text-gray-500">ID: {category.id}</div>
                <Link
                  className="btn-edit bg-blue-500 text-white py-1 px-2 rounded hover:scale-95 transition duration-300"
                  to={`/category/${category.id}`}
                >
                  View
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Category;


/*  


<table className='min-w-full bg-green-300 border border-gray-300'>
          <thead className='bg-gray-200'>
            <tr>
              {tableCategory.map((item) => (
                <th key={item.id} className='border border-gray-300 text-left px-8 py-4'>
                  {item.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableCategory.length > 0 &&
              tableCategory[0].values.map((value, index) => (
                <tr key={index}>
                  {tableCategory.map((item) => (
                    <td key={item.id} className='border border-gray-300 text-left px-8 py-4'>
                      {item.values[index].value}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table> 
        
        */
