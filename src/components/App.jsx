import './App.css'
import user from './UserData.json'
import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import friends from './friends.json';
import transactions from './transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

function App() {
  const {username, tag, location, avatar, stats} = user
  return (
  <>
  <Profile 
  username={username}
  tag={tag}
  location={location}
  avatar={avatar}
  stats={stats}
  />
  <FriendList
  friends={friends}
  />
  <TransactionHistory 
  list={transactions}
  />
  </>
  )
}

export default App
