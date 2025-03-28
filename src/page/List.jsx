import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getData } from "../api";
import Loader from "../components/Loader";
import NotFoundPage from "../components/NotFoundPage";

function List() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    getData("/users")
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <h1 className="flex justify-center items-center ">
        <Loader />
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-red-600 font-bold text-center text-4xl">
        <NotFoundPage />
      </h1>
    );
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-semibold">Users List</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            <NavLink to="/userform">Add</NavLink>
          </button>
        </div>
        <table className="min-w-full table-auto bg-white border-collapse rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Username</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Phone</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((fetch, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="px-6 py-4">{fetch.name}</td>
                <td className="px-6 py-4">{fetch.username}</td>
                <td className="px-6 py-4">{fetch.email}</td>
                <td className="px-6 py-4">{fetch.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default List;
