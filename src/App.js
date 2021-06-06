import React from "react";

// data
import friends from "./data/friends.json";
import user from "./data/user.json";

// components
import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Profile";

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
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
