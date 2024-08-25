import axios from "axios";

const loginRest = async (username, secret) => {
  return await axios.get("https://api.chatengine.io/users/me/", {
    headers: {
      "Project-ID": "e6ad633b-e74c-4261-aeed-edb5b476993f",  // Hardcoded value
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
        "Private-Key": "5b03383f-d370-4d15-a559-4101c9005dfa"  // Hardcoded value
      }
    }
  );
};


export { loginRest, signupRest };