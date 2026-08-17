function Contact(props) {
    return (
        <div className="card">
            <div className="contact-info">
                <img src={props.pfp} alt={props.name} width="120px" />
                <h2>Name: {props.name}</h2>
                <p>Phone: {props.phone}</p>
                <p>Email: {props.email}</p>
            </div>
        </div>
    )
}

export default Contact