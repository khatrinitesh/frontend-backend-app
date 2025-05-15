import React, { useEffect, useState } from 'react';
import { fetchComments } from '../api/comments';

const Home:React.FC = () => {
    const [comments,setComments] = useState([]);

    useEffect(() => {
        fetchComments().then(setComments)
    },[])

  return (
    <>
       <h1>Home Page</h1>
      <h2>Recent Comments:</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <strong>{comment.name}</strong>: {comment.body}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
