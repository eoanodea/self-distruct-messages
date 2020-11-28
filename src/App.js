import React from "react";
import logo from "./logo.gif";
import unlocked from "./unlocked.gif";
import "./App.css";

function App() {
  const [correct, setCorrect] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [error, setError] = React.useState(null);
  const [passcode, setPasscode] = React.useState("hello");

  const submit = () => {
    if (input !== passcode) return setError("Passphrase is not correct");

    setError(null);
    setCorrect(true);
  };

  const erase = () => {
    setCorrect(false);
    setPasscode(Math.random().toString(36).substring(7));
  };

  if (correct)
    return (
      <div className="App">
        <header className="App-header">
          <img src={unlocked} className="App-logo" alt="logo" />

          <p>Secure Message:</p>
          <p className="message">This is a secret message</p>
          <button className="erase-button" onClick={erase}>
            Destroy
          </button>
        </header>
      </div>
    );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Enter your passphrase to continue</p>
        <div className="form-container">
          <input
            type="text"
            id="passcode"
            value={input}
            onChange={(v) => setInput(v.target.value)}
            placeholder="Passphrase"
          />

          <button onClick={submit}>Enter</button>
        </div>
        {error && <p className="error"> {error}</p>}
      </header>
    </div>
  );
}

export default App;
