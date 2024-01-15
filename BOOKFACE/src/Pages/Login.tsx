import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "email") {
      // Regular expression for a valid email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Check if the entered email matches the valid email format
      if (!emailRegex.test(value)) {
        setEmailError("Please insert a valid email.");
      } else {
        setEmailError("");
      }
    }
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //Logic for email input
    if (!formData.email) {
      setEmailError("Please insert an email.");
      return;
    }
    // Perform authentication logic here if needed

    // For the sake of example, let's assume the user is authenticated
    // and navigate to the home page
    navigate("/");
  };

  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col md:items-center md:justify-center ">
        <h1 className="p-5 font-quicksand text-5xl lg:mt-5">LOGIN</h1>
        <p className="p-5 pt-1 font-quicksand">
          Welcome, please insert your email and password for login.
        </p>
        <div className="m-5 flex flex-col items-center justify-center rounded-lg bg-beiged shadow-md lg:mx-auto">
          <form className="p-5" onSubmit={handleSubmit}>
            <div className="px-5 py-3">
              <label className="block text-lg">
                Email:
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 w-full rounded-lg bg-beigel px-3 py-2 text-sm ${
                    emailError ? "border-red-500" : ""
                  }`}
                />
              </label>
              {emailError && (
                <p className="mt-1 text-sm text-red-500">{emailError}</p>
              )}
            </div>
            <div className="px-5 py-3">
              <label className="block text-lg">
                Password:
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg bg-beigel px-3 py-2 text-sm"
                  />
                  <button
                    type="button"
                    className="absolute right-0 top-1/2 -translate-y-1/2 transform px-3"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? (
                      <img src="show-04.svg" className="h-12 w-12" />
                    ) : (
                      <img src="hide-05.svg" className="h-12 w-12" />
                    )}
                  </button>
                </div>
              </label>
            </div>
            <div className="px-5 py-3">
              <button
                style={{ fontFamily: "Quicksand, sans-serif" }}
                type="submit"
                className="w-1/2 rounded-full bg-brownl px-5 pb-1 pt-1 text-white hover:bg-brownd"
              >
                Login
              </button>
              <div className="p-2 text-sm">
                <Link to="/sign">Don't have an account? Sign up here</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
