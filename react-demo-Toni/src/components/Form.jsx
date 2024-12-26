const Form = (props) => {
    return (
        <form>
            <h2>Form</h2>
            <div>
                <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstname" name="firstname" onChange={props.changeHandler} />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastname" name="lastname" onChange={props.changeHandler}/>
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
            <input type="text"id="phone" name= "phone" onChange={props.changeHandler}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" onChange={props.changeHandler}/>
            </div>
            <div>
                <label htmlFor="message">Message</label>
            <textarea type="textarea" id="message" name="message"onChange={props.changeHandler}/>
            </div>
        </form>
    );
};
export default Form;