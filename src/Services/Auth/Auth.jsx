import React, { useState } from "react";
import LoginForm from "../../Components/LoginForm";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Auth = async () => {

  const [error, setError] = useState(false);

  const auth = getAuth();
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    setError(true);
  }
  return <LoginForm />;
};

export default Auth;
