import React, { useEffect, useState } from "react";
import axiosClient from "../../../axios-client.js";
import { Link } from "react-router-dom";
import { useStateContext } from "../../../context/ContextProvider.jsx";
import { Col, Row, Skeleton, Button, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import avatar from '../../../images/avatar.png'
import Department_image from '../../../images/department_image.png'
import Library_image from '../../../images/library_image.png'
import NSS_NCC_image from '../../../images/nss_ncc_image.png'
import Clubs_image from '../../../images/clubs_image.png'

function Category() {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setNotification } = useStateContext();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  function fetchData() {
    setLoading(true);

    axiosClient.get(`/admin/category`)
      .then(({ data }) => {
        console.log(data);
        setLoading(false);
        setCategories(data.data);
        setFilteredUsers(data.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 429) {
          setTimeout(() => {
            fetchData();
          }, 1000);
        } else {
          setLoading(false);
        }
      });
  }



  const handleSearch = (e) => {
    const searchQuery = (e.target.value || '').toLowerCase();

    const filteredData = categories.filter((category) =>
      category.category_name.toLowerCase().includes(searchQuery)
    );

    setFilteredUsers(filteredData);
  };

  const image = (category_id) => {
    switch (category_id) {
      case 1:
        return Department_image;
      case 2:
        return Clubs_image;
      case 3:
        return  NSS_NCC_image;
      case 4:
        return Library_image;
      default:
        return "../../../images/avatar.png";
    }
  };
  
  

return (
  <div className=" h-screen p-4 overflow-visible ">
    <div className="flex  flex-col  mb-4">
      <div>

        <h1 className="text-4xl font-bold -ml-4 -mb-2 mt-2">Category</h1>
      </div>

    </div>
    <div className="flex justify-end gap-4">
      {/* <button
        className={`px-2 py-1  text-white rounded-md ${currentPage === 1 ? 'bg-gray-400' : 'bg-gray-700'} `}
        onClick={fetchPrevPage}
        disabled={currentPage <= 1}
      >
        P
      </button>
      <button className={`px-2 py-1  text-white rounded-md ${currentPage === 3 ? 'bg-gray-400' : 'bg-gray-700'} `} onClick={fetchNextPage} disabled={currentPage >= 3}>
        N
      </button> */}
    </div>
    <div className="card mt-4 animated fadeInDown">
      <div className="flex items-center justify-center mb-6 ">
        <input type="search" placeholder="Search Users" className="w-96 border border-gray-400 p-2 rounded-full text-black bg-white/85 hover:bg-white/95 outline-none hover:border hover:border-lime-800 active:bg-white/95"
          onChange={handleSearch}
        />
      </div>



      {loading ? (
        <div>

          <Skeleton active />
        </div>
      ) : (
        <Row gutter={[16, 35]} className="m-auto ">
          {
            filteredUsers.map((u) => (
              <Col className="gutter-row  gap-4 m-auto" span={6} xs={24} sm={12} md={12} lg={8} key={u.id}>
                <div className=" flex backdrop-blur-lg relative max-w-96 p-4 gap-2 py-8 px-6 rounded-md m-auto mb-2 min-h-48 max-h-48 items-center justify-center bg-white/10">
                  {/* bg image */}
                  <div className="top-0 rounded-xl absolute  left-0 right-0 bottom-0 ">
                    <img src={image(u.category_id)} alt="bg" className="w-full h-full z-0 opacity-50" />
                  </div>

                  <div className="my-auto z-10 flex flex-col items-center justify-center ">

                    <p className=" font-bold text-lg capitalize">{u.category.category}</p>
                    {/* <p className=" font-bold text-md">{u.email}</p> */}
                    <p className=" font-bold text-xl capitalize">{u.category_name}</p>
                    <p className="absolute bottom-2 left-2 font-semibold text-gray-400 text-xs capitalize">{u.name}</p>
                    <p className="absolute bottom-4 right-4 ">
                      <Link className="bg-rose-600 py-0 px-2 rounded-xl  hover:bg-rose-700 
                        transition-all ease-in-out
                        text-center flex items-center justify-center hover:text-white font-semibold" to={`${u.category_id}/${u.category_name}`}>
                        Open
                      </Link>

                    </p>
                  </div>

                </div>

              </Col>
            ))
          }
        </Row>
      )}

    </div>

  </div>
);
}

export default Category;



