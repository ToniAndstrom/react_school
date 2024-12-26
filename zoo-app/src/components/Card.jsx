import { Link } from "react-router-dom"

const Card = ({name,likes, removeCard, addLikes, removeLikes}) => {
  return (
  
        
          <div className="Card">
    <button onClick={removeCard} id="x">
         X
        </button><br />
        <h2 className="animal_name">{name}</h2>

        <img className="card_image" src={`https://source.unsplash.com/250x250/?${name}`} />

        <div className="likes">
        <button onClick={addLikes} id="like">
          <span className="material-symbols-outlined">
          heart_plus</span>
        </button>
        
        <span  className="material-symbols-outlined" id="heart">
     {likes>=5 ? "heart_check": likes<=-5 ? "heart_broken" : "favorite"}
        </span>
        <p className="like_number">{likes}</p>
        
        <button onClick={removeLikes} id="dislike"><span className="material-symbols-outlined">
          heart_minus</span>
          </button> <br />
          </div>
    <div className="single_link">
        <Link to = {name} >See More</Link>
        </div>
    </div>
  
  )
}

export default Card