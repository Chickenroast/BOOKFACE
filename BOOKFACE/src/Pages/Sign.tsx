import React, { useState } from "react";
import { ReactComponent as HideIcon } from "../Images/hide.svg";
import { ReactComponent as ShowIcon } from "../Images/show.svg";

enum FormState {
  First,
  Second,
}

function Sign() {
  const [formState, setFormState] = useState<FormState>(FormState.First);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    tags: "",
    profileImageType: "string", // 'string' or 'url'
    profileImage: "",
    name: "",
    bio: "",
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmitFirstForm = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    // Passwords match, proceed to the second form
    setFormState(FormState.Second);
  };

  const handleSubmitSecondForm = (e: React.FormEvent) => {
    e.preventDefault();
    // Add validation logic for the second form fields
    // If validation passes, you can submit the complete form
    console.log("Submitting complete form:", formData);
  };

  return (
    <div className="bg-beigel w-screen h-screen">
      <h1
        style={{ fontFamily: "Quicksand, sans-serif" }}
        className="p-5 text-5xl"
      >
        SIGNUP
      </h1>
      <p style={{ fontFamily: "Quicksand, sans-serif" }} className="p-5 pt-1">
        Welcome, please insert all your information for the first form.
      </p>
      {formState === FormState.First && (
        <div className="lg:mx-auto bg-beiged flex m-5 flex-col items-center justify-center rounded-lg max-w-lg">
          <form className="p-5" onSubmit={handleSubmitFirstForm}>
            {/* Render first form fields */}
            <div className="p-5">
              <label className="text-lg block">
                Email:
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-beigel rounded-lg mt-1 px-3 py-2 text-sm"
                />
              </label>

              <label className="text-lg block mt-3">
                Username:
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full bg-beigel rounded-lg mt-1 px-3 py-2 text-sm"
                />
              </label>

              <label className="text-lg block mt-3">
                Password:
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full bg-beigel rounded-lg mt-1 px-3 py-2 text-sm"
                  />
                  <button
                    type="button"
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 px-3"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? (
                      <ShowIcon className="h-6 w-6" />
                    ) : (
                      <HideIcon className="h-6 w-6" />
                    )}
                  </button>
                </div>
              </label>

              <label className="text-lg block mt-3">
                Confirm Password:
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full rounded-lg mt-1 px-3 py-2 text-sm ${
                      !passwordsMatch
                        ? "border-red-500"
                        : "border-slate-300 bg-beigel"
                    }`}
                  />
                  <button
                    type="button"
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 px-3"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </label>
              {!passwordsMatch && (
                <p className="text-red-500 mt-1 text-sm">
                  Passwords do not match.
                </p>
              )}
              <button
                style={{ fontFamily: "Quicksand, sans-serif" }}
                type="submit"
                className="bg-brownl hover:bg-brownd w-1/2 px-5 rounded-full text-white pt-1 pb-1 mt-3"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      )}

      {formState === FormState.Second && (
        <div>
          <p>Now, please insert additional information for the second form.</p>
          <form onSubmit={handleSubmitSecondForm}>
            {/* Render second form fields */}
            {/* ... */}
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Sign;
