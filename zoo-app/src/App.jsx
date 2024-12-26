import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { animals, birds, insects, fishes } from "../animalsList";
import Root from './components/Root';
import ErrorPage from './routes/ErrorPage';
import Home from './routes/Home';

import AboutPage from './routes/AboutPage';
import CategoryPage from './routes/CategoryPage';
import SinglePage from './routes/SinglePage';
import './App.css';
import './components/Card.css';
import './components/Footer.css';




function App() {
  const [zoo, setZoo] = useState({ animals, birds, insects, fishes });

  const likesHandler = (name, category, action) => {
   setZoo((prevZoo) => ({
    ...prevZoo,
    [category]: prevZoo[category].map((element) =>
     element.name === name 
      ? {...element, likes:element.likes + (action ==="add" ? 1 : -1)} : element)
   }) )
  }
  const removeCard = (name, category) => {
   
    setZoo((prevZoo)=> ({
      ...prevZoo,
      [category] : prevZoo[category].filter(element => element.name !== name)
    }));
   
  }

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: ":category", element: <CategoryPage 
        addLikes={likesHandler} 
        removeLikes={likesHandler}
        removeCard={removeCard}
        {...zoo} 
        /> },
        { path: ":category/:name", element: <SinglePage {...zoo}/> },
        { path: "/about", element: <AboutPage /> }
      ]
    }
  ])
  
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App
