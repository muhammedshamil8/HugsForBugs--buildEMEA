import React, { useEffect, useState } from "react";
import axiosClient from "../../../axios-client.js";
import { Link } from "react-router-dom";
import { useStateContext } from "../../../context/ContextProvider.jsx";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setNotification } = useStateContext();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const onDeleteClick = (user) => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return;
    }
    axiosClient
      .delete(`/users/${user.id}`)
      .then(() => {
        setNotification("User was successfully deleted");
        fetchData();
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  function fetchData(page) {
    setLoading(true);

    axiosClient
      .get(`/users?page=${page}`)
      .then(({ data }) => {
        setLoading(false);
        setUsers(data.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 429) {
          setTimeout(() => {
            fetchData(page);
          }, 1000);
        } else {
          setLoading(false);
        }
      });
  }

  function fetchNextPage() {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
  }

  function fetchPrevPage() {
    const prevPage = currentPage - 1;
    setCurrentPage(prevPage);
  }

  return (
    <div className="bg-blue-200 h-screen p-4 w-fit">
      <div className="flex justify-right items-center mb-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <Link className="btn-add bg-green-500 text-white py-2 px-4 rounded" to="/users/new">
          Add new
        </Link>
      </div>
      <div className="flex justify-end gap-4">
        <button
          className={`px-2 py-1  text-white rounded-md ${currentPage === 1 ? 'bg-gray-400' : 'bg-gray-700'} `}
          onClick={fetchPrevPage}
          disabled={currentPage <= 1}
        >
          Prev
        </button>
        <button className={`px-2 py-1  text-white rounded-md ${currentPage === 3 ? 'bg-gray-400' : 'bg-gray-700'} `} onClick={fetchNextPage} disabled={currentPage >= 3}>
          Next
        </button>
      </div>
      <div className="card mt-4 animated fadeInDown">
<input type="search" placeholder="Search" className="w-80 border border-gray-400 p-2 rounded-md text-black" />
        <table className="border border-collapse overflow-scroll w-80">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Create Date</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center p-2">
                  Loading...
                </td>
              </tr>
            ) : (
              users.map((u) => (
                <tr key={u.id}>
                  <td className="border p-2">{u.id}</td>
                  <td className="border p-2">{u.name}</td>
                  <td className="border p-2">{u.name}</td>
                  <td className="border p-2">{u.email}</td>
                  <td className="border p-2">{u.created_at}</td>
                  <td className="border p-2">
                    <Link className="btn-edit bg-blue-500 text-white py-1 px-2 rounded" to={`/users/${u.id}`}>
                      Edit
                    </Link>
                    <button
                      className="btn-delete bg-red-500 text-white py-1 px-2 rounded "
                      onClick={() => onDeleteClick(u)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="flex gap-4">

        </div>
      </div>
    </div>
  );
}
