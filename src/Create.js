import React from "react";

const Create = ({ back, submit, loading, error }) => {
  const [message, setMessage] = React.useState("");
  const [messageError, setMessageError] = React.useState(null);
  const [passcode, setPasscode] = React.useState("");
  const [passcodeError, setPasscodeError] = React.useState(null);

  const createMessage = () => {
    if (message === "") setMessageError("Message cannot be blank");
    if (passcode === "") setPasscodeError("Passcode cannot be blank");
    if (passcode.length < 6)
      return setPasscodeError("Passcode cannot be less than 6 characters");
    setMessageError(null);
    setPasscode(null);

    const newMessage = {
      message,
      password: passcode,
    };

    submit(newMessage);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) createMessage();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Create a message</h1>
        <div className="form-container add-form-container">
          <input
            type="text"
            id="message"
            className="add-form"
            value={message}
            onKeyDown={handleKeyDown}
            onChange={(v) => setMessage(v.target.value)}
            placeholder="Message"
          />
          {messageError && (
            <label htmlFor="message" className="error">
              {messageError}
            </label>
          )}
        </div>

        <div className="form-container add-form-container">
          <input
            type="text"
            id="passcode"
            className="add-form"
            value={passcode}
            onKeyDown={handleKeyDown}
            onChange={(v) => setPasscode(v.target.value.toLowerCase())}
            placeholder="Passcode"
          />
          {passcodeError && (
            <label htmlFor="passcode" className="error">
              {passcodeError}
            </label>
          )}
        </div>
        {error && <p className="error">Error: {error}</p>}
        <button
          disabled={loading}
          className="erase-button"
          onClick={createMessage}
        >
          Create
        </button>
        <button disabled={loading} className="erase-button" onClick={back}>
          Cancel
        </button>
      </header>
    </div>
  );
};

export default Create;
