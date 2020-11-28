import React from "react";
import logo from "./logo.gif";
import unlocked from "./unlocked.gif";
import loadingLogo from "./loading.gif";
import "./App.css";
import { destroy, get } from "./api";

function App() {
  const [correct, setCorrect] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const [message, setMessage] = React.useState(null);

  const submit = () => {
    if (input === "") return setError("Passphrase cannot be blank");
    setLoading(true);
    setError(null);
    get(input).then((data) => {
      setLoading(false);

      if (!data || data.error) return setError("Passphrase is not correct");
      setCorrect(true);

      setMessage(data.message.message);
    });
  };

  const erase = () => {
    setLoading(true);

    destroy(input).then((data) => {
      setLoading(false);

      if (!data || data.error) return setError("Could not destroy message");
      setCorrect(false);
      setMessage(null);
      setInput("");
    });
  };

  const close = () => {
    setLoading(false);
    setCorrect(false);
    setMessage(null);
    setInput("");
    setError(null);
  };

  if (correct)
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={loading ? loadingLogo : unlocked}
            className="App-logo"
            alt="logo"
          />

          <p>Secure Message:</p>
          <p className="message">{message}</p>

          {error && <p className="error">Error: {error}</p>}

          <button disabled={loading} className="erase-button" onClick={erase}>
            Destroy
          </button>

          <button disabled={loading} className="erase-button" onClick={close}>
            Close
          </button>
        </header>
      </div>
    );
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={loading ? loadingLogo : logo}
          className="App-logo"
          alt="logo"
        />
        <p>Enter your passphrase to continue</p>
        <div className="form-container">
          <input
            type="text"
            id="passcode"
            value={input}
            onChange={(v) => setInput(v.target.value.toLowerCase())}
            placeholder="Passphrase"
          />

          <button className="submit-button" disabled={loading} onClick={submit}>
            Enter
          </button>
        </div>
        {error && <p className="error"> {error}</p>}
      </header>
    </div>
  );
}

export default App;
