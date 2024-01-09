import {createContext, useContext, useState} from "react";

const StateContext = createContext({
  currentUser: null,
  token: null,
  notification: null,
  setUser: () => {},
  setToken: () => {},
  setNotification: () => {},
  role: null,
  setRole: () => {},
})


export const ContextProvider = ({children}) => {
  const [user, setUser] = useState({});
  const [role, _setRole] = useState(localStorage.getItem('role'));
  const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
  const [notification, _setNotification] = useState('');

  const setToken = (token) => {
    _setToken(token)
    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token);
    } else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  }
 const setRole = (role) => {
    _setRole(role)
    if (role) {
      localStorage.setItem('role', role);
    } else {
      localStorage.removeItem('role');
    }
  }

  const setNotification = message => {
    _setNotification(message);

    setTimeout(() => {
      _setNotification('')
    }, 5000)
  }

  return (
    <StateContext.Provider value={{
      user,
      setUser,
      token,
      setToken,
      notification,
      setNotification,
      role,
      setRole,
    }}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);
