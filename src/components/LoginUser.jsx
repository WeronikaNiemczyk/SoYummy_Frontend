import { useEffect, useState } from "react";
import controler from "../features/auth";
import { Navigate } from "react-router-dom";

const LoginUser = ({ loginUserData }) => {
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

  useEffect(() => {
    if (email && password) {
      handleSubmit();
    }
  }, [email, password]);

  if (success) {
    return <Navigate to="../SoYummy_FrontEnd_groupNo_1/home" replace />;
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default LoginUser;
