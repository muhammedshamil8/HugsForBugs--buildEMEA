import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../../../axios-client.js";
import { useStateContext } from "../../../context/ContextProvider.jsx";

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
        .get(`/users/${id}`)
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
        .put(`/users/${user.id}`, user)
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
        .post("/users", user)
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
    <div className="bg-blue-200 h-screen p-4">
      {user.id && <h1 className="text-2xl font-bold mb-4">Update User: {user.name}</h1>}
      {!user.id && <h1 className="text-2xl font-bold mb-4">New User</h1>}
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
          <form onSubmit={onSubmit}>
            <input
              value={user.name}
              onChange={(ev) => setUser({ ...user, name: ev.target.value })}
              className="input"
              placeholder="Name"
            />
            <input
              value={user.email}
              onChange={(ev) => setUser({ ...user, email: ev.target.value })}
              className="input"
              placeholder="Email"
            />
            <input
              type="password"
              onChange={(ev) => setUser({ ...user, password: ev.target.value })}
              className="input"
              placeholder="Password"
            />
            <input
              type="password"
              onChange={(ev) => setUser({ ...user, password_confirmation: ev.target.value })}
              className="input"
              placeholder="Password Confirmation"
            />
            <button className="btn bg-blue-500 text-white py-2 px-4 rounded">Save</button>
          </form>
        )}
      </div>
    </div>
  );
}
