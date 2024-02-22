import './Profile.css'

function CreateProfile ({username, tag, location, avatar, stats }) {
    return (
        <div className="container">
            <div className="first-block-cont">
                <span className='user-avatar-cont'>
                    <img src={avatar} alt="user-avatar" className='user-avatar'/>
                </span>
                <p className="userName">{username}</p>
                <span className="mini-info">
                <p>@{tag}</p>
                <p>{location}</p>
                </span>
            </div>
            <ul className="stats-list">
                <li className="stats-list-item"><span className="stats-list-text">Followers</span>{stats.followers}</li>
                <li className="stats-list-item"><span className="stats-list-text">Views</span>{stats.views}</li>
                <li className="stats-list-item"><span className="stats-list-text">Likes</span>{stats.likes}</li>
            </ul>
        </div>
    )
}

export default CreateProfile