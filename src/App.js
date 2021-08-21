/* eslint-disable react/jsx-no-undef */
import './App.module.css';
import user from './data/user.json';
import statsData from './data/statistical-data.json';
import friendList from './data/friend-list.json';
import transactionsData from './data/transactions.json';
import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friends/FriendList';
import FriendListItem from './components/friends/FriendListItem';
import TransactionHistory from './components/transactions/TransactionHistory';
// import { Profiler } from 'react';


export default function App() { 
  return (
    <div>
      <Profile 
      key={user.name}
      avatar={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
      />

      <Statistics
      title='Upload stats'
      stats={statsData}
      />

      <FriendList friends={friendList}>
        {friendList.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))} 
      </FriendList>

      <TransactionHistory
      transactions={transactionsData}
      />
    
    </div>

  );
  
}
