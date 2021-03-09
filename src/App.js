import React, { useContext } from "react";
import app from "./firebase";
import { AuthContext } from "./Auth";

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="App">
      <h1>Home</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
      {JSON.stringify(currentUser)}
    </div>
  );
}

export default App;
