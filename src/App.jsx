import { useState } from "react";
import "./App.css";
import users from "./users.json";

function App() {
  console.log(users);
  const randomIndex = Math.floor(Math.random() * users.length);
  const [index, setIndex] = useState(randomIndex);

  const changeUser = () => {
    const anotherRandom = Math.floor(Math.random() * users.length);
    setIndex(anotherRandom);
  };

  const colors = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#F9F871"
  ];
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[randomColorIndex]}`;

  return (
    <div className="App" style={{ color: colors[randomColorIndex] }}>
      <div className="card">
        <h1>
          {users[index].name.title} {users[index].name.first}{" "}
          {users[index].name.last}
        </h1>
        <img src={users[index].picture.large} alt="" />
        <ul>
          <li>
            <i className="fa-solid fa-envelope"></i>
            {users[index].email}
          </li>
          <li>
            <i className="fa-solid fa-phone"></i>
            {users[index].phone}
          </li>
          <li>
            <i className="fa-solid fa-location-dot"></i>
            {users[index].location.country} {users[index].location.city},{" "}
            {users[index].location.state}
          </li>
        </ul>
        <button onClick={changeUser}>
          <i class="fa-solid fa-shuffle"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
