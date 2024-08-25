import axios from "axios";

const loginRest = async (username, secret) => {
  return await axios.get("https://api.chatengine.io/users/me/", {
    headers: {
      "Project-ID": VITE_CHAT_ENGINE_PROJECT_ID, 
      "User-Name": username,
      "User-Secret": secret,
    },
  });
};

const signupRest = async (username, secret, email, first_name, last_name) => {
  return await axios.post(
    "https://api.chatengine.io/users/?format=api",
    { username, secret, email, first_name, last_name },
    {
      headers: {
        "Private-Key": VITE_CHAT_ENGINE_PRIVATE_KEY
      }
    }
  );
};


export { loginRest, signupRest };