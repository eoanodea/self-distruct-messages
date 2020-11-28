import React from "react";
import logo from "./logo.gif";
import unlocked from "./unlocked.gif";

import loadingLogo from "./loading.gif";
import "./App.css";
import Create from "./Create";
import { create, destroy, get } from "./api";
// import { Player } from "@lottiefiles/react-lottie-player";

function App() {
  const [correct, setCorrect] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState(null);
  const [creating, setCreating] = React.useState(false);

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

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) submit();
  };

  const toggleCreate = () => {
    setLoading(false);
    setCreating((old) => !old);
    setError(null);
  };

  const createMessage = (message) => {
    // if (input === "") return setError("Passphrase cannot be blank");
    setLoading(true);
    setError(null);
    create(message).then((data) => {
      setLoading(false);

      if (!data || data.error)
        return setError(
          `Error: ${
            data && data.error ? data.error : "Could not create message"
          }`
        );

      toggleCreate();
    });
  };

  if (correct)
    return (
      <div className="App">
        <header className="App-header">
          {/* <Player
            src="https://assets3.lottiefiles.com/packages/lf20_yAh844.json"
            // src={unlocked}
            style={{ height: "300px", width: "300px" }}
            // className="App-logo"

            alt="logo"
          /> */}
          <img
            src={loading ? loadingLogo : unlocked}
            className="App-logo"
            alt="logo"
          />
          {/* <Player
            src={"https://assets3.lottiefiles.com/packages/lf20_yAh844.json"}
            background="transparent"
            speed="1"
            style={{ height: "300px", width: "300px" }}
          /> */}
          {/* <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_yAh844.json"
            background="transparent"
            speed="1"
            style={{ height: "300px", width: "300px" }}
            autoplay
          ></lottie-player> */}

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

  if (creating)
    return (
      <Create
        back={toggleCreate}
        submit={createMessage}
        loading={loading}
        error={error}
      />
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
            onKeyDown={handleKeyDown}
            onChange={(v) => setInput(v.target.value.toLowerCase())}
            placeholder="Passphrase"
          />

          <button className="submit-button" disabled={loading} onClick={submit}>
            Enter
          </button>
        </div>
        {error && <p className="error"> {error}</p>}
        <button
          disabled={loading}
          className="erase-button"
          onClick={toggleCreate}
        >
          Create a message
        </button>
      </header>
    </div>
  );
}

export default App;
