import './profilecard.css';

export function Profilecard(props){
    return(
        <div className="profile-card">
            <div className="profile-card-header">
                <h1>{props.name1}</h1>
                <h2>Age: {props.age}</h2>
            </div>
            
            <div className="profile-greeting">
                <p>{props.greeting}</p>
            </div>
            
            <div className="profile-content">
                {props.children}
            </div>
        </div>
    )
}