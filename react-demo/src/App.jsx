import { useState, useEffect} from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Home from './routes/Home.jsx';
import About from './routes/About.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Persons from './routes/Persons.jsx';
import Root from './routes/Root.jsx';
import Users from './routes/Users.jsx';
import Posts from './routes/Posts.jsx';

function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Margit', title: 'CEO', age: 29, location: 'Helsinki' },
    { id: 2, name: 'Kati', title: 'developer', age: 25, location: 'NY' },
    { id: 3, name: 'Karin', title: 'designer', age: 45, location: 'Tartu' },
  ]);

  const [users, setUsers] = useState([]);
  
  
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>{setUsers(res.data);});
  }, []);
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) =>{setPosts(res.data);});
  }, []);

  const updatePostStatus = (id, published) => {
    const postId = posts.find((post) => post.id === id);
    const updatePost = { ...postId, published: !published };

    axios
      .put(`http://localhost:3000/posts/${id}`, updatePost)
      .then((res) => {
        setPosts(
          posts.map((post) =>
            post.id === id ? { ...post, published: !published } : post
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        {path: '/users', element:<Users users={users}/>},
        {path: '/posts', element:<Posts posts={posts} updatePostStatus={updatePostStatus}/>},
        { path: '/persons', element: <Persons persons={persons} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
