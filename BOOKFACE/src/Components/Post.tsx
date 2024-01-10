// Post.tsx
import React from "react";
import { FaBookmark, FaPaperPlane } from "react-icons/fa";
import { BiSolidCoffeeBean } from "react-icons/bi";

interface User {
  userId: number;
  username: string;
  name: string;
  profilePhoto: string;
}

interface Button {
  id: string;
  label: string;
}

interface PostData {
  user: User;
  tag: string;
  date: string;
  hour: string;
  photo: string;
  buttons: Button[];
}

interface PostProps {
  postData: PostData | null;
}

function Post({ postData }: PostProps) {
  if (!postData) {
    return null;
  }

  const { user, tag, date, hour, photo, buttons } = postData;

  return (
    <div className="h-[50vh] w-[90vw] bg-beiged rounded-2xl flex flex-col items-center m-2 p-4 pb-2">
      {/* User Information */}
      <div className="flex flex-row space-x-2 self-start">
        <img
          src={user.profilePhoto}
          alt={`${user.username}'s profile`}
          className="w-10 h-10 object-cover rounded-full"
        />
        <div className="text-sm flex flex-col font-semibold">
          {user.username}
          <span className="text-sm text-gray-500">#{tag}</span>
        </div>
      </div>

      {/* Date and Hour */}
      <span className="text-sm w-[90%] flex flex-row justify-between mt-5">
        <span>{date}</span>
        <span>{hour}</span>
      </span>

      {/* Post Photo */}
      <div className="w-full h-[200px] mt-2">
        <img
          src={photo}
          alt={`Post by ${user.name}`}
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex items-start justify-start self-start w-full mt-3">
        {buttons.map((button: Button) => (
          <button
            key={button.id}
            className="text-brownl hover:text-brownd focus:outline-none rounded-full bg-beigel p-2 mr-2 flex items-center justify-center"
          >
            {button.id === "saveButton" && <FaBookmark className="text-sm" />}
            {button.id === "sendMessageButton" && (
              <FaPaperPlane className="text-sm" />
            )}
            {button.id === "customButton" && (
              <BiSolidCoffeeBean className="text-sm" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Post;
