import './FriendList.css'

function FriendPrint({ list }) {
  return (
    <ul className='friends-list'>
      {list.map(item => (
        <li key={item.id} className="friends-list-item">
            <img src={item.avatar} alt='avatar-img' className='avatar' />
            <span className='friend-name'>
            {item.name}
            </span>
            <span className='isOnline-check'>
                {item.isOnline ? (<span className='online'>Online</span>): (<span className='offline'>Offline</span>)}
            </span>
        </li>
      ))}
    </ul>
  );
}

export default FriendPrint;
