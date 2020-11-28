const server_url = "https://self-destruct-message-server.herokuapp.com";

const prefix = "/api/";

export const get = async (passcode) => {
  try {
    const response = await fetch(`${server_url}${prefix}messages/${passcode}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const create = async (message) => {
  try {
    const response = await fetch(`${server_url}${prefix}message`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(message),
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
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};
