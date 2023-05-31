import React, { useCallback, useEffect, useState } from 'react';

export default function PostPage() {
    const [posts, setPosts] = useState([]);
    const fetchPosts = useCallback(async () => {
        try {
            const response = await fetch('https://codebuddy.review/posts');
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log('Error:', error);
        }
    },[])
    useEffect(() => {
        let data = fetchPosts();
        setPosts(data);
    },[])
  return (
    <div>
      <h2>Post Page </h2>
    </div>
  );
}
