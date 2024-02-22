import './App.css'
import user from './UserData'
import CreateProfile from './Profile';
import FriendPrint from './FriendList';
import friends from './FriendObj';
import transactions from './TransactionObj';
import TransactionHistory from './TransactionHistory';

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
  <FriendPrint
  list={friends}
  />
  <TransactionHistory 
  list={transactions}
  />
  </>
  )
}

export default App
