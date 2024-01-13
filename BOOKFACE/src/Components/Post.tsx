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
    <div className="mx-4 my-2 flex h-[50vh] w-[90vw] flex-col shadow-md items-center justify-center rounded-2xl bg-beiged px-4 lg:h-[70vh] lg:w-auto">
      {/* User Information */}
      <div className="flex flex-row space-x-2 self-start">
        <img
          src={user.profilePhoto}
          alt={`${user.username}'s profile`}
          className="h-10 w-10 lg:h-14 lg:w-14 rounded-full object-cover"
        />
        <div className="flex flex-col text-sm lg:text-lg font-semibold">
          {user.username}
          <span className="text-sm text-gray-500">#{tag}</span>
        </div>
      </div>

      {/* Date and Hour */}
      <span className="mt-2 lg:mt-4 lg:mb-1 px-2 flex w-full flex-row justify-between text-xs opacity-40">
        <span>{date}</span>
        <span>{hour}</span>
      </span>

      {/* Post Photo */}
     
        <img
          src={photo}
          alt={`Post by ${user.name}`}
          className="shadow-lg h-[70%] w-full rounded-2xl object-cover"
        />
 

      {/* Action Buttons */}
      <div className="mt-3 flex w-full items-start justify-start self-start justify-self-end">
        {buttons.map((button: Button) => (
          <button
            key={button.id}
            className="mr-2 flex items-center justify-center rounded-full bg-beigel p-2 text-brownl hover:text-brownd focus:outline-none"
          >
            {button.id === "saveButton" && <FaBookmark className="text-sm lg:text-xl" />}
            {button.id === "sendMessageButton" && (
              <FaPaperPlane className="text-sm lg:text-xl" />
            )}
            {button.id === "customButton" && (
              <BiSolidCoffeeBean className="text-sm lg:text-xl" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Post;
