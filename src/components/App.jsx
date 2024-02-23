import './App.css'
import user from './Profile/UserData'
import CreateProfile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import friends from './FriendList/FriendObj';
import transactions from './TransactionHistory/TransactionObj';
import TransactionHistory from './TransactionHistory/TransactionHistory';

function App() {
  const {username, tag, location, avatar, stats} = user
  return (
  <>
  <CreateProfile 
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
