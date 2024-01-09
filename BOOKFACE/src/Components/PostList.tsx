// PostList.tsx
import React, { useState} from 'react';
import Post from './Post';
import postData from './Boss.json';

const PostList: React.FC = () => {
  // You can remove setPosts if you don't plan to use it immediately
  const [posts] = useState(postData);

 

  return (
    <div>
      {posts.map(post => (
        <Post key={post.postId} postData={post} />
      ))}
    </div>
  );
};

export default PostList;
