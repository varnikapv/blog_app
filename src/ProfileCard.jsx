import './ProfileCard.css'
import { useState } from 'react'

function ProfileCard(props) {
    const[isFollowing, setIsFollowing] = useState(false)

    function handleFollowClick() {
        setIsFollowing(!isFollowing)
    }

    return (
        <div className="card">
            <img    
                src={props.image}
                alt="Profile"
            />
            <h2>{props.name}</h2>
            <p>{props.bio}</p>

            <button 
                className="follow-btn"
                onClick={handleFollowClick}>
                {isFollowing ? 'Following' : 'Follow'}
                </button>
        </div>
    )
}

export default ProfileCard