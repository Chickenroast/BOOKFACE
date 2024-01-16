import React, { useState } from "react";
import { FaPaperPlane, FaFileImport } from "react-icons/fa";
import { tags as tagSuggestions } from "../tags";
import Select from "react-select";

interface CreatePostProps {
  onPostSubmit: (postData: { image: File | null; tags: string[] }) => void;
}

function CreatePost({ onPostSubmit }: CreatePostProps) {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const handlePostSubmit = () => {
    // Validate that image is not empty before submitting
    if (image && image.size > 0) {
      console.log("Submitting:", { image, tags }); // Log the data
      onPostSubmit({ image, tags });
      // Optionally, you can reset the form or clear the input fields
      setImage(null);
      setTags([]);
      setImagePreview(null);
      setShowSuggestions(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selectedImage = files[0];
      setImage(selectedImage);

      // Create a temporary URL for image preview
      const previewURL = URL.createObjectURL(selectedImage);
      setImagePreview(previewURL);
    }
  };

  const handleTagSelection = (selectedOption: any) => {
    // Extract value from selectedOption and update tags state
    const selectedTag = selectedOption ? selectedOption.value : "";
    setTags([selectedTag]);

    setShowSuggestions(false);
  };

  return (
    <div className="mx-4 my-2 flex h-[50vh] w-[90vw] flex-col items-center justify-center rounded-2xl bg-beiged px-4 py-2 shadow-md lg:h-[70vh] lg:w-auto">
      {/* Image Upload */}
      <div className="flex flex-row items-start justify-start self-start justify-self-end">
        <label className="relative ml-2 flex cursor-pointer overflow-hidden rounded-full bg-brownd p-4 font-semibold text-white hover:bg-brownl">
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          />
          <span className="absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden p-2">
            <FaFileImport className="text-sm lg:text-xl" />
          </span>
        </label>
        <h2 className="mx-2 mt-1 font-quicksand">Import Your File</h2>
      </div>
      {/* Image Preview */}
      {imagePreview && (
        <div className="h-48 w-full overflow-hidden">
          <img
            src={imagePreview}
            alt="Image Preview"
            className="mt-3 h-[70%] w-full rounded-2xl object-cover object-center shadow-lg"
          />
        </div>
      )}

      {/* Tag Input with Suggestions */}
      <div className="relative -mt-5 w-full">
        <h2 className="mx-2 mb-1 font-quicksand">Select a Tag</h2>
        <Select
          value={tags.map((tag) => ({ value: tag, label: tag }))}
          isMulti={false}
          options={tagSuggestions.map((tag) => ({ value: tag, label: tag }))}
          onChange={handleTagSelection}
          placeholder="Add tags"
          className="react-select-container"
          classNamePrefix="react-select"
        />
      </div>

      {/* Action Buttons */}
      <div className="mt-3 flex w-full items-center justify-center">
        <button
          onClick={handlePostSubmit}
          className="mb-2 w-full rounded-xl bg-brownd p-2 text-white hover:text-beigel focus:outline-none"
        >
          Post-it
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
