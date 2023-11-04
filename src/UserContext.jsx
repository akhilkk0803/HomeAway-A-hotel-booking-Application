import { createContext, useEffect, useState } from "react";
import { url } from "./url";
export const Usercontext = createContext({});
import { json } from "react-router-dom";
export const UserContextProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [ready, setready] = useState(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      fetch(url + "/auth/profile", {
        headers: {
          Authorization: token,
        },
      })
        .then((data) => {
          if (data.status === 500) {
            console.log("first")
            return json({ msg: "Login again jwt malformed" },{status:500});
          }
          return data.json();
        })
        .then((data) => {
          setready(true);
          setuser(data);
        });
    } else setready(true);
  }, []);
  return (
    <Usercontext.Provider value={{ user, setuser, ready }}>
      {children}
    </Usercontext.Provider>
  );
};
