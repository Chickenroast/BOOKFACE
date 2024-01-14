import React, { useState, useEffect } from "react";
import axios from 'axios';


import Select from 'react-select';
import { tags } from '../tags.ts';

enum FormState {
  First,
  Second,
}

interface Tag {
  value: string;
  label: string;
}

const tagOptions: Tag[] = tags.map((tag: string) => ({
  value: tag,
  label: tag,
}));

function Sign() {
  const [formState, setFormState] = useState<FormState>(FormState.First);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
     selectedTags: [] as string[],
    profileImageType: "string",
    profileImage: "",
    name: "",
    bio: "",
  });


console.log(formData)

  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, type } = e.target;
  
    if (type === 'select-multiple') {
      // Use type assertion to inform TypeScript about the type of the element
      const selectElement = e.target as HTMLSelectElement;
  
      // Get the selected options and create an array of values
      const selectedOptions: string[] = [];
      for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].selected) {
          selectedOptions.push(selectElement.options[i].value);
        }
      }
  
      setFormData((prevData) => ({ ...prevData, [name]: selectedOptions }));
    } else {
      // For other input types, handle normally
      const { value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
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
    <div className="w-screen h-screen">
      {/* <img
        src="shape1.svg"
        className="w-full h-full z-[-10] absolute rotate-45 opacity-70"
      /> */}
      <div className="flex flex-col md:items-center md:justify-center">
        <h1 className="p-5 text-5xl lg:mt-5 font-quicksand">SIGNUP</h1>
      </div>
      {formState === FormState.First && (
        <div className="flex flex-col md:items-center md:justify-center ">
          <p className="p-5 pt-1 font-quicksand">
            Welcome, please insert all your information for the first form.
          </p>
          <div className="lg:mx-auto bg-beiged flex m-5 flex-col items-center justify-center rounded-lg ">
            <form className=" p-5" onSubmit={handleSubmitFirstForm}>
              <div className=" p-5">
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
                        <img src="show-04.svg" className="w-12 h-12" />
                      ) : (
                        <img src="hide-05.svg" className="w-12 h-12" />
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
                      {showPassword ? (
                        <img src="show-04.svg" className="w-12 h-12" />
                      ) : (
                        <img src="hide-05.svg" className="w-12 h-12" />
                      )}
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
        </div>
      )}

{formState === FormState.Second && (
      <div className="flex flex-col md:items-center md:justify-center">
        <p className="p-5 pt-1 font-quicksand">
          Now, please insert additional information for the second form.
        </p>
        <div className="lg:mx-auto bg-beiged flex m-5 flex-col items-center justify-center rounded-lg ">
          <form className="p-5" onSubmit={handleSubmitSecondForm}>
            <div className="p-5">
              
  <label className="text-lg block">
    Select your Tags
      <Select
  defaultValue={tagOptions.slice(2, 4)} // Adjust the slice as needed
  isMulti
  name="colors"
  options={tagOptions}
  className="basic-multi-select"
  classNamePrefix="select"
/>
  </label>
              <label className="text-lg block mt-3">
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-beigel rounded-lg mt-1 px-3 py-2 text-sm"
                  />
                </label>
                <label className="text-lg block mt-3">
                  Bio:
                  <input
                    type="text"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    className="w-full bg-beigel rounded-lg mt-1 px-3 py-2 text-sm"
                  />
                </label>
                <button
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                  type="submit"
                  className="bg-brownl hover:bg-brownd w-1/2 px-5 rounded-full text-white pt-1 pb-1 mt-3"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sign;
