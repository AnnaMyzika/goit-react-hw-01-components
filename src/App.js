import React from "react";

// data
import friends from "./data/friends.json";

// components
import FriendList from "./components/FriendList/FriendList";

function App() {
  return (
    <div className="App">
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
