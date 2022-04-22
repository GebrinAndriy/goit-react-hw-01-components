import {Profile} from "./task1/Profile.jsx"
import user from "./task1/user.json"
import data from "./task2/data.json"
import { Statistics } from "./task2/statistics.jsx";
import { FriendsList } from "./task3/friends.jsx";
import friends from "./task3/friends.json"
import { TransactionHistory } from "./task4/transactions.jsx";
import transactions from "./task4/transactions.json"
export const App = () => {
  const {username, tag, location, avatar, stats} = user;
  const title = "Upload stats";
  return (
    <div>
      <Profile 
        username = {username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics
        title = {title}
        stats = {data}
      />
      <FriendsList
        friends={friends}
      />
      <TransactionHistory
        transactions={transactions}
      />
    </div>
  );
};


