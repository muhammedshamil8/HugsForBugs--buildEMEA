import { useNavigate, useParams , Link} from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../../../axios-client.js";
import { useStateContext } from "../../../context/ContextProvider.jsx";
import avatar from '../../../images/avatar.png'
import '../../../styles/admin-css/profile.css'
import { message, Select } from 'antd';
import {  LeftOutlined } from '@ant-design/icons';



export default function UserForm() {
  const [categories, setCategories] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'User was successfully created',
    });
  };
  const success2 = () => {
    messageApi.open({
      type: 'success',
      content: 'User was successfully updated',
    });
  };
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

  useEffect(() => {
    axiosClient
      .get("/admin/categories")
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  //  function to format the category label
  const formatCategoryLabel = (label) => {
    // Replace underscores with spaces and capitalize each word
    return label.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  };

  const categoriesList = categories.map(category => ({
    label: formatCategoryLabel(category.category),
    value: category.id,
  }));

  const onChange = (value) => {
    // console.log(`selected ${value}`);
    setUser({ ...user, category_id: value })
  };

  const onSearch = (value) => {
    // console.log('search:', value);
  };

  const filterOption = (input, option) =>
    option.label.toLowerCase().includes(input.toLowerCase());

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (user.id) {
      axiosClient
        .put(`/admin/users/${user.id}`, user)
        .then(() => {
          success2();
          // setNotification("User was successfully updated");
          setTimeout(() => {
            navigate("/users");
          }, 1000);
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
          success();
          // setNotification("User was successfully created");
          setTimeout(() => {

            navigate("/users");
          }, 1000);
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
       <div> <Link to={`/users`}className='bg-rose-600 py-1 px-2 text-md rounded-full transform ease-in-out mb-4 inline-block hover:bg-rose-800 transition-all duration-200'>
      <LeftOutlined />
      </Link></div>
      {contextHolder}
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
              
              <Select
                value={user.category_id}
                showSearch
                placeholder="Select a category"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                options={categoriesList}
                className="input input-box p-2 rounded-md py-3 cursor-pointer text-white"
                popupClassName="dropdown-style"
                size="large"
              />

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
