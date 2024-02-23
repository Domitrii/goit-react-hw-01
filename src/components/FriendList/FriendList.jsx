import css from './FriendList.module.css'
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend}>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

export default FriendList;