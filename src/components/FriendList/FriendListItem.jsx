import css from './FriendList.module.css'

function FriendListItem({friend}){
    return(
        <li key={friend.id} className={css.friendsListItem}>
            <img src={friend.avatar} alt='avatar-img' className={css.avatar} />
            <span className={css.friendName}>
            {friend.name}
            </span>
            <span className='isOnline-check'>
                {friend.isOnline ? (<span className={css.online}>Online</span>): (<span className={css.offline}>Offline</span>)}
            </span>
        </li>
    )
}

export default FriendListItem