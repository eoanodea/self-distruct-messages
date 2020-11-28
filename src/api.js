const server_url = "https://self-destruct-message-server.herokuapp.com";

const prefix = "/api/";

export const get = async (passcode) => {
  try {
    const response = await fetch(`${server_url}${prefix}messages/${passcode}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const destroy = async (passcode) => {
  try {
    const response = await fetch(`${server_url}${prefix}messages/${passcode}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};
