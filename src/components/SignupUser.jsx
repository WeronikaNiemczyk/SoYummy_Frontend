// src/components/SignupUser.jsx

import { useEffect, useState } from "react";
import controler from "../features/auth";

const Signup = ({ signupData }) => {
  // const Signup = (signupData) => {
  const { name, email, password } = signupData;
  const [registerData] = useState({ name, email, password });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      await controler.register(registerData);
      setSuccess(true);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {success && <p>Registration successful!</p>}
    </div>
  );
};

export default Signup;
