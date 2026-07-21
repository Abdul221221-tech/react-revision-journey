import { Profilecard } from "./profilecard";
import './profil.css';

export function Profile(){
    const user1="Abdul"
    const user2="Abdul2"
    return(
        <div className="profile-card-container">
          <h1>Profile Cards</h1>
          <div className="profile-cards-wrapper">
            <Profilecard
                name1={user1}
                age="21"
                greeting={
                    <div>
                        <strong>Hello {user1}, keep pushing forward! 🚀</strong>
                    </div>
                }
            >
                <p>🎮 Hobbies: Gaming</p>
                <button className="profile-btn primary">Contact</button>
            </Profilecard>
        
            <Profilecard
                name1={user2}
                age="22"
                greeting={
                    <div>
                        <strong>Hello {user2}, you're doing great! 💪</strong>
                    </div>
                }
            >
                <p>🎮 Hobbies: Gaming</p>
                <button className="profile-btn primary">Contact</button>
            </Profilecard>
          </div>
      </div>
    )
}