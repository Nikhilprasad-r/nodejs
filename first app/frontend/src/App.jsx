import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [jokes, setJoke] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJoke(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <h1>Full stack</h1>

      <p>{jokes.length}</p>
      {jokes.map((joke) => {
        return (
          <div key={joke.id}>
            <h1>{joke.title}</h1>
            <p>{joke.body}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
