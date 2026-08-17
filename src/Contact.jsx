function Contact(props) {
    return (
        <div>
            <img src={props.pfp} alt={props.name} width="120px" />
            <h2>Name: {props.name}</h2>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default Contact