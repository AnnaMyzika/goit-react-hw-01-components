import React from "react";

// data
import friends from "./data/friends.json";
import user from "./data/user.json";
import data from "./data/statistical-data.json";
import transactions from "./data/transactions.json";

// components
import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
