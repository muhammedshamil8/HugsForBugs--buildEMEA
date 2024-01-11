import React, { useEffect, useState } from "react";
import axiosClient from "../../../axios-client.js";
import { Link } from "react-router-dom";
import { useStateContext } from "../../../context/ContextProvider.jsx";
import { Col, Row, Skeleton, Button, Popconfirm , Empty } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import avatar from '../../../images/avatar.png'


export default function Users() {
  const [users, setUsers] = useState([]);
  const { token, role } = useStateContext();
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setNotification } = useStateContext();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const onDeleteClick = (user) => {
    // if (!window.confirm("Are you sure you want to delete this user?")) {
    //   return;
    // }
    axiosClient
      .delete(`/admin/users/${user.id}`)
      .then(() => {
        setNotification("User was successfully deleted");
        fetchData();
      })
      .catch((error) => {
        // console.error("Error deleting user:", error);
      });
  };

  function fetchData() {
    setLoading(true);

    axiosClient.get(`/admin/users`)
      .then(({ data }) => {
        // console.log(data);
        setLoading(false);
        setUsers(data.data);
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

  // function fetchNextPage() {
  //   const nextPage = currentPage + 1;
  //   setCurrentPage(nextPage);
  // }

  // function fetchPrevPage() {
  //   const prevPage = currentPage - 1;
  //   setCurrentPage(prevPage);
  // }
  const handleSearch = (e) => {
    const searchQuery = (e.target.value || '').toLowerCase();

    const filteredData = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery)
    );

    setFilteredUsers(filteredData);
  };




  return (
    <div className=" h-screen p-4 overflow-visible ">
      <div className="flex  flex-col  mb-4">
        <div>

          <h1 className="text-4xl font-bold -ml-4 -mb-2 mt-2">Users Profile</h1>
        </div>
        <div className="flex justify-end gap-4">
          <Link className="btn-add bg-rose-600 text-white py-1 px-4 rounded-2xl text-sm" to="/users/new">
            Add new +
          </Link>
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

        {filteredUsers.length === 0 && (
          <div className="flex items-center justify-center mb-6 ">
            <p className="text-2xl font-bold text-gray-400"><Empty description={
              <span className="text-white">
                No <a href="#API"> Data Found</a>
              </span>
            }>
            </Empty>
            </p>
          </div>
        )}


        {loading ? (
          <div>

            <Skeleton active />
          </div>
        ) : (
          <Row gutter={[10, 10]} className="m-auto animate-pulse">
            {
              filteredUsers.map((u) => (
                <Col className="gutter-row  gap-4 m-auto" span={6} xs={24} sm={12} md={12} lg={8} key={u.id}>
                  <div className="max-h-72 flex bg-white/20 backdrop-blur-lg relative max-w-96 p-4 gap-2 py-8 px-6 rounded-md m-auto ">
                    <div className="bg-white rounded-xl ">
                      <img src={avatar} alt="avatar" className="w-16 h-16 rounded-full" />
                    </div>
                    <div className="my-auto">
                      <p className=" font-bold text-md">{u.name}</p>
                      <p className=" font-bold text-md">{u.email}</p>
                      <p className=" font-bold text-md">{u.category_name}</p>
                      <p className=" ">
                        <Link className="btn-edit  text-white py-1 px-2 rounded absolute top-2 right-10 hover:text-green-400" to={`/users/${u.id}`}>
                          <EditOutlined />
                        </Link>
                        <Popconfirm
                          title="Delete the task"
                          description="Are you sure to delete this task?"
                          okText="Yes"
                          cancelText="No"
                          okType="danger"
                          onConfirm={() => onDeleteClick(u)}
                        >
                          <button
                            className="btn-delete  text-white py-1 px-2 rounded absolute top-2 right-2 hover:text-red-600 transition-all ease-in-out duration-500"

                          >
                            <DeleteOutlined />
                          </button>
                        </Popconfirm>
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
