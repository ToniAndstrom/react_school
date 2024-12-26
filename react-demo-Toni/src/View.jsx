
const View = (props) => {
    return ( 
        <div>
            <p>First Name:{props.firstname}</p>
            <p>Last Name:{props.lastname}</p>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
            <p>Message: {props.message}</p>
        </div>
     );
}
 
export default View;