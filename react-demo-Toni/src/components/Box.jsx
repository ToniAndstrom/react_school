import './Box.css'
const Box =(props)=>{
    return(<div className='box'>
        <h1>Name:{props.name}</h1>
        <h2>Title:{props.title}</h2>
        <p>Location:{props.location}</p>
        </div>);
    
    };
    export default Box;