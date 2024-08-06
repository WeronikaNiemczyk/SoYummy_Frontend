// src/components/LoginUser.jsx

import { useEffect, useState } from "react";
import controler from "../features/auth";
// import { Link } from 'react-router-dom';
import { Navigate } from "react-router-dom";

// const LoginUser = ({ loginUserData = { email: '', password: '' } }) => {
// const LoginUser = ({ loginUserData }) => {
const LoginUser = (loginUserData) => {
  const { email, password } = loginUserData;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      await controler.login({ email, password });
      setSuccess(true);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Ensure handleSubmit is called only when the submit button is clicked
  useEffect(() => {
    if (email && password) {
      handleSubmit();
    }
  }, [email, password]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {success && <Navigate to="../SoYummy_FrontEnd_groupNo_1/home" replace />}
    </div>
  );
};

export default LoginUser;
