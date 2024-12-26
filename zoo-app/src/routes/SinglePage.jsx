import React from 'react'
import { useParams, useNavigate, NavLink } from 'react-router-dom'
import "./SinglePage.css"


const SinglePage = ({ ...rest }) => {
    const navigate = useNavigate();
    const params = useParams();
    const categoryItems = rest[params.category];
    const data = categoryItems.find((element) => element.name === params.name);
    console.log(data);

    return (
        <>
        <main id="single">
            <h2 className="single_name">{data.name}</h2>
        
            <img className="single_image" src={`https://source.unsplash.com/400x400/?${data.name}`}/>

          <button> <NavLink to= {`https://en.wikipedia.org/wiki/${data.name}`}> Find me on Wikipedia</NavLink></button>

           <button><NavLink to= {`https://www.youtube.com/results?search_query=animal ${data.name}`}>Find me on Youtube</NavLink></button>
            
            <button onClick={() => navigate(-1)}>Back</button>
            </main>
        </>
    )
}

export default SinglePage