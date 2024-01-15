import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Select from "react-select";
import { tags } from "../tags.ts";

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

//---------------------------------------------------------------------------------------FORMDATA
function Sign() {
  const navigate = useNavigate();
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

  console.log(formData);

  useEffect(() => {
    // Set initial selected tags after component mounts
    setFormData((prevData) => ({
      ...prevData,
      selectedTags: tagOptions.slice(2, 4).map((tag) => tag.value),
    }));
  }, []);

  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, type } = e.target;

    if (type === "select-multiple") {
      const selectElement = e.target as HTMLSelectElement;
      const selectedOptions: string[] = Array.from(
        selectElement.selectedOptions,
        (option) => option.value,
      );

      setFormData((prevData) => ({ ...prevData, [name]: selectedOptions }));
    } else {
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

  //---------------------------------------------------------------------------------------SUBMIT
  const handleSubmitSecondForm = (e: React.FormEvent) => {
    e.preventDefault();
    // Add validation logic for the second form fields
    // If validation passes, you can submit the complete form
    console.log("Submitting complete form:", formData);
    navigate("/login");
  };

  return (
    <div className="h-screen w-screen">
      {/* <img
        src="shape1.svg"
        className="w-full h-full z-[-10] absolute rotate-45 opacity-70"
      /> */}
      <div className="flex flex-col md:items-center md:justify-center ">
        <h1 className="p-5 font-quicksand text-5xl lg:mt-5">SIGNUP</h1>
      </div>
      {/* //---------------------------------------------------------------------------------------FIRST FORM*/}
      {formState === FormState.First && (
        <div className="flex flex-col md:items-center md:justify-center ">
          <p className="p-5 pt-1 font-quicksand">
            Welcome, please insert all your information for the first form.
          </p>
          <div className="m-5 flex flex-col items-center justify-center rounded-lg bg-beiged shadow-md lg:mx-auto">
            <form className=" p-5" onSubmit={handleSubmitFirstForm}>
              <div className=" p-5">
                <label className="block text-lg">
                  Email:
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg bg-beigel px-3 py-2 text-sm"
                  />
                </label>

                <label className="mt-3 block text-lg">
                  Username:
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg bg-beigel px-3 py-2 text-sm"
                  />
                </label>

                <label className="mt-3 block text-lg">
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

                <label className="mt-3 block text-lg">
                  Confirm Password:
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`mt-1 w-full rounded-lg px-3 py-2 text-sm ${
                        !passwordsMatch
                          ? "border-red-500"
                          : "border-slate-300 bg-beigel"
                      }`}
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
                {!passwordsMatch && (
                  <p className="mt-1 text-sm text-red-500">
                    Passwords do not match.
                  </p>
                )}
                <button
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                  type="submit"
                  className="mt-3 w-1/2 rounded-full bg-brownl px-5 pb-1 pt-1 text-white hover:bg-brownd"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* //---------------------------------------------------------------------------------------SECOND FORM*/}
      {formState === FormState.Second && (
        <div className="flex flex-col md:items-center md:justify-center">
          <p className="p-5 pt-1 font-quicksand">
            Now, please insert additional information for the second form.
          </p>
          <div className="m-5 flex flex-col items-center justify-center rounded-lg bg-beiged shadow-md lg:mx-auto ">
            <form className="p-5" onSubmit={handleSubmitSecondForm}>
              <div className="p-5">
                <label className="block max-w-72 text-lg">
                  Select your Tags
                  <Select
                    value={tagOptions.filter((tag) =>
                      formData.selectedTags.includes(tag.value),
                    )}
                    isMulti
                    name="selectedTags"
                    options={tagOptions}
                    getOptionValue={(option) => option.value}
                    getOptionLabel={(option) => option.label}
                    onChange={(selectedOptions) => {
                      const selectedTags = selectedOptions.map(
                        (option) => option.value,
                      );
                      setFormData((prevData) => ({
                        ...prevData,
                        selectedTags,
                      }));
                    }}
                    className="basic-multi-select mt-1 text-sm"
                    classNamePrefix="select"
                  />
                </label>
                <label className="mt-3 block text-lg">
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg bg-beigel px-3 py-2 text-sm"
                  />
                </label>
                <label className="mt-3 block text-lg">
                  Bio:
                  <div className="text-xs text-gray-600">Max 350 words</div>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    maxLength={350} // Set the maximum number of characters
                    className="mt-1 w-full resize-none rounded-lg bg-beigel px-3 py-2 text-sm"
                    rows={5} // Adjust the number of visible rows as needed
                  />
                </label>
                <button
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                  type="submit"
                  className="mt-3 w-1/2 rounded-full bg-brownl px-5 pb-1 pt-1 text-white hover:bg-brownd"
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
