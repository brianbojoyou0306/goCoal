import React from "react";
import { useState } from "react";
import axios from "axios";
import "./login.css";

function LoginUser() {
  const [data, setData] = useState({ userid: "", password: "" });
	const [error, setError] = useState("");
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.placeholder]: input.value });
    console.log(input.type)
	}

  const handleSubmit = async (e) => {
		e.preventDefault();
    console.log(data)

		try {
			const url = "http://localhost:8080/api/login";
      console.log(data)

			const { data: res } = await axios.post(url, data);
			console.log(res)
			localStorage.setItem("token", res.data);
      localStorage.setItem("Type", res.Type);
			localStorage.setItem("OrganizationName", res.OrganizationName);
			localStorage.setItem("id", res.id);
      window.location = "/";

		} 
    catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
        console.log(error)
			}
		}
	}
  return (
    <div>
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>UserID</p>
            <input type="text" value={data.userid}  onChange={handleChange} placeholder="userid" required="required"/>          </label>
          <label>
            <p>Password</p>
            <input type="password"  onChange={handleChange}
							  value={data.password} placeholder="password" required="required"/>
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
