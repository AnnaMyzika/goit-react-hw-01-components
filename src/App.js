import React from "react";

// data
import friends from "./data/friends.json";
import userData from "./data/user.json";

// components
import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <FriendList friends={friends} />
      <Profile user={userData} />
    </div>
  );
}

export default App;
