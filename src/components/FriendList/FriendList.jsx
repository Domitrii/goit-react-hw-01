import css from './FriendList.module.css'

function FriendList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map(item => (
        <li key={item.id} className={css.friendsListItem}>
            <img src={item.avatar} alt='avatar-img' className={css.avatar} />
            <span className={css.friendName}>
            {item.name}
            </span>
            <span className='isOnline-check'>
                {item.isOnline ? (<span className={css.online}>Online</span>): (<span className={css.offline}>Offline</span>)}
            </span>
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
