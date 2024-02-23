import css from './Profile.module.css'

function Profile ({username, tag, location, avatar, stats }) {
    return (
        <div className={css.container}>
            <div className={css.firstBlockCont}>
                <span className={css.userAvatarCont}>
                    <img src={avatar} alt="user-avatar" className={css.userAvatar}/>
                </span>
                <p className={css.userName}>{username}</p>
                <span className={css.miniInfo}>
                <p>@{tag}</p>
                <p>{location}</p>
                </span>
            </div>
            <ul className={css.statsList}>
                <li className={css.statsListItem}><span className={css.statsListText}>Followers</span>{stats.followers}</li>
                <li className={css.statsListItem}><span className={css.statsListText}>Views</span>{stats.views}</li>
                <li className={css.statsListItem}><span className={css.statsListText}>Likes</span>{stats.likes}</li>
            </ul>
        </div>
    )
}

export default Profile