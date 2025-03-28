import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "../api";
import Input from "../components/Input";

function Userform() {
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const errors = validation();
    if (Object.keys(errors).length) {
      return;
    }
    postData("/users", newUser)
      .then((response) => {
        navigate("/");
   console.log(response);
   
      })
      .catch((error) => {
        console.log(error);
      })
  };


  const validation = () => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const newError = {};

    if (!newUser.name.trim()) {
      newError.name = "Name is required";
    }

    if (!newUser.username.trim()) {
      newError.username = "Username is required";
    }

    if (!newUser.email.trim()) {
      newError.email = "Email is required";
    } else if (!newUser.email.match(regexEmail)) {
      newError.email = "Invalid email format";
    }
    if (!newUser.phone.trim()) {
      newError.phone = "Phone number is required";
    } else if (newUser.phone.length !== 10) {
      newError.phone = "At list 10 digit numbers required";
    }

    setError(newError);
    return newError;
  };

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="p-8 max-w-md w-full bg-white rounded-lg shadow-xl">
        <h1 className="text-center text-4xl font-bold text-blue-600 mb-8 font-serif">
          Create User
        </h1>
        <form onLoadedData={handleAddUser} onSubmit={handleAddUser}>
          <div className="space-y-4">
            <div>
              <Input
                label="Name"
                type="text"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
                placeholder="Enter name"
              />

              {error.name && (
                <p className="text-red-500 text-sm">{error.name}</p>
              )}
            </div>

            <div>
              <Input
                label="Username"
                type="text"
                name="username"
                value={newUser.username}
                onChange={handleInputChange}
                placeholder="Enter username"
              />
              {error.username && (
                <p className="text-red-500 text-sm">{error.username}</p>
              )}
            </div>

            <div>
              <Input
                label="Email"
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
                placeholder="Enter email"
              />
              {error.email && (
                <p className="text-red-500 text-sm">{error.email}</p>
              )}
            </div>

            <div>
              <Input
                label="Phone"
                type="number"
                name="phone"
                value={newUser.phone}
                onChange={handleInputChange}
                placeholder="Enter phone number"
              />
              {error.phone && (
                <p className="text-red-500 text-sm">{error.phone}</p>
              )}
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md w-full sm:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Userform;
