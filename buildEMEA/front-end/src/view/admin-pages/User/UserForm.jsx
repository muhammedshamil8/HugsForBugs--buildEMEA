import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../../../axios-client.js";
import { useStateContext } from "../../../context/ContextProvider.jsx";
import avatar from '../../../images/avatar.png'
import '../../../styles/admin-css/profile.css'


export default function UserForm() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [user, setUser] = useState({
    id: null,
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setNotification } = useStateContext();

  if (id) {
    useEffect(() => {
      setLoading(true);
      axiosClient
        .get(`/admin/users/${id}`)
        .then(({ data }) => {
          setLoading(false);
          setUser(data);
        })
        .catch(() => {
          setLoading(false);
        });
    }, []);
  }

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (user.id) {
      axiosClient
        .put(`/admin/users/${user.id}`, user)
        .then(() => {
          setNotification("User was successfully updated");
          navigate("/users");
        })
        .catch((err) => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors);
          }
        });
    } else {
      axiosClient
        .post("/admin/users", user)
        .then(() => {
          setNotification("User was successfully created");
          navigate("/users");
        })
        .catch((err) => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors);
          }
        });
    }
  };

  return (
    <div className=" h-screen p-4 overflow-visible">
      {user.id && <h1 className="text-2xl font-bold text-center mb-4 ">Update User: {user.name}</h1>}
      {!user.id && <h1 className="text-2xl font-bold mb-4 text-center">New User</h1>}
      <div className="card animated fadeInDown p-4">
        {loading && <div className="text-center">Loading...</div>}
        {errors && (
          <div className="alert bg-red-500 text-white p-2 mb-4">
            {Object.keys(errors).map((key) => (
              <p key={key}>{errors[key][0]}</p>
            ))}
          </div>
        )}
        {!loading && (
          <div className="max-w-lg bg-white/10 rounded-xl m-auto mt-5 p-10">
<div className="bg-white rounded-lg w-fit m-auto mb-10">
  <img src={avatar} alt="" className="w-20 h-20 rounded-full m-auto" />
</div>
          <form onSubmit={onSubmit} className="flex flex-col">
            <input
              value={user.name}
              onChange={(ev) => setUser({ ...user, name: ev.target.value })}
              className="input input-box p-2 rounded-md py-3"
              placeholder="Name"
            />
            <input
              value={user.email}
              onChange={(ev) => setUser({ ...user, email: ev.target.value })}
              className="input input-box p-2 rounded-md py-3"
              placeholder="Email"
            />
            <input value={user.category_name} onChange={(ev) => setUser({ ...user, category_name: ev.target.value })} className="input input-box p-2 rounded-md py-3" placeholder="Category Name" />
            <select value={user.category_id} onChange={(ev) => setUser({ ...user, category_id: ev.target.value })} className="input input-box p-2 rounded-md py-3 cursor-pointer">
              <option value="" className=" p-4">Select Category</option>
              <option value="1" className="">Single Department</option>
              <option value="2">Clubs</option>
              <option value="3">NSS & NCC</option>
              <option value="4">Library</option>
            
            </select>
            <input
              type="password"
              onChange={(ev) => setUser({ ...user, password: ev.target.value })}
              className="input input-box p-2 rounded-md py-3"
              placeholder="Password"
            />
            <input
              type="password"
              onChange={(ev) => setUser({ ...user, password_confirmation: ev.target.value })}
              className="input input-box p-2 rounded-md py-3"
              placeholder="Password Confirmation"
            />
            <button className="btn submit-button-box text-white my-2 px-4 rounded-md py-3">Save</button>
          </form>
          </div>

        )}
      </div>
    </div>
  );
}
